import { Attributes, AttributesType, CollectionTokens, CollectionTokenswithScore, DEFAULT_EMPTY_TYPE } from '../types';



export class RarityCalculator {
    private collection: CollectionTokenswithScore[];
    attributeKeys = new Set();
    attributes: object[];

    collectionSize: number;

    attributesMap: Map<string, Attributes> = new Map();

    constructor(collection: CollectionTokens[]) {

        this.collection = collection.map((e) => ({ ...e, tokenScore: 0, tokenRank: 0 }));

        this.collectionSize = collection.length;

        this.attributes = this.collection.map((e) => e.attributes);

        this.createAttributesMap();
    }

    public TokenScore(): CollectionTokenswithScore[] {
        for (const token of this.collection) {

            for (const key of [...this.attributesMap.keys()]) {
                const hasAtr = (token.attributes as any[]).find((e: any) => e.trait_type === key);

                if (hasAtr) {
                    const score = this.attributesMap?.get(key)?.values.find((e) => e.value === hasAtr.value)?.score ?? 0;

                    token.tokenScore = token.tokenScore + score;
                }

                if (!hasAtr) {
                    const score = this.attributesMap?.get(key)?.values.find((e) => e.value === DEFAULT_EMPTY_TYPE)?.score ?? 0;

                    token.tokenScore = token.tokenScore + score;
                }
            }
        }

        return this.collection
            .sort((a, b) => (b.tokenScore ?? 0) - (a.tokenScore ?? 0))
            .map((e, i) => ({
                ...e,
                tokenRank: i + 1,
            }));
    }

    public getAttributesMap() {
        const attrMapFlattened: Record<string, any> = {};

        for (const key of [...this.attributesMap.keys()]) {
            attrMapFlattened[key] = this.attributesMap.get(key);
        }

        return attrMapFlattened;
    }

    private createAttributesMap() {
        for (const attributes of this.attributes) {
            for (const attribute of attributes as any[]) {
                this.AddAttribute(attribute.trait_type, attribute.value);
            }
        }

        // Set None values
        for (const key of [...this.attributesMap.keys()]) {
            const attrMap = this.attributesMap.get(key);

            if (attrMap) {
                attrMap.values.push({
                    value: DEFAULT_EMPTY_TYPE,
                    count: this.collectionSize - attrMap.count,
                    score: 1 / ((this.collectionSize - attrMap.count) / this.collectionSize),
                });
            }


        }
    }

    private AddAttribute(key: string, value: string) {
        const attribute = this.attributesMap.get(key);

        if (!attribute) {
            const newAttribute = {
                count: 1,
                name: key,
                type: this.GetType(value),
                values: [
                    {
                        value: value,
                        count: 1,
                        score: 1 / (1 / this.collectionSize),
                    },
                ],
            };

            this.attributesMap.set(key, newAttribute);
            return;
        }

        attribute.count = attribute.count + 1;

        const attributeValue = attribute.values.find((e) => e.value === value);

        if (!attributeValue) {
            attribute.values.push({
                value: value,
                count: 1,
                score: 1 / (1 / this.collectionSize),
            });
        } else {
            attributeValue.count = attributeValue.count + 1;
            attributeValue.score = 1 / (attributeValue.count / this.collectionSize);
        }

        this.attributesMap.set(key, { ...attribute });
        return;
    }

    private GetType(value: any): AttributesType {
        if (typeof value === 'string') {
            return AttributesType.String;
        }

        if (typeof value === 'number') {
            return AttributesType.Number;
        }

        return AttributesType.Unknown;
    }
}
