import { GraphQLObjectType } from 'graphql';
export declare type HelpType = {
    type: string;
    usage?: string;
    content?: string[];
};
export declare const Help: GraphQLObjectType;
