
export const DEFAULT_EMPTY_TYPE = '__undefined';


export interface CollectionTokens {
    attributes: Record<string, any>;
    chainId?: string | number;
    contract?: string;
    tokenIndex?: string | number;
    tokenId?: string | number;
    image?: string;
    name?: string;
    description?: string;
}

export interface CollectionTokenswithScore extends CollectionTokens {
    tokenScore: number;
    tokenRank: number;
}



export enum AttributesType {
    String = 'string',
    Number = 'number',
    Date = 'date',
    Unknown = 'unknown',
}

export interface AttributeValue {
    value: string;
    count: number;
    score: number;
}

export interface Attributes {
    name: string;
    type: AttributesType;
    count: number;
    values: AttributeValue[];
}