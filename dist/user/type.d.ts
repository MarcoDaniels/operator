import { GraphQLObjectType } from 'graphql';
export declare type UserType = {
    name: string;
    description: string;
    welcomeMessage: string[];
};
export declare const User: GraphQLObjectType;
