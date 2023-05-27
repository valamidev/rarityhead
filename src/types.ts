
export const DEFAULT_EMPTY_TYPE = '__undefined';

export interface CollectionTokens {
    chainId: string;
    contract: string;
    tokenIndex: number;
    tokenId: string;
    image?: string;
    attributes: Record<string, any>;
    name?: string;
    description?: string;
    tokenScore?: number;
    tokenRank?: number;
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