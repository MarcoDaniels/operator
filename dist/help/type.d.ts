import { GraphQLObjectType } from 'graphql';
export declare type HelpType = {
    type: string;
    description?: string;
    usage?: string;
    content?: string[];
};
export declare const Help: GraphQLObjectType;
