import { GraphQLObjectType } from 'graphql';
export declare type UserType = {
    name: string;
    title: string;
    description: string;
    welcomeMessage: string[];
};
export declare const User: GraphQLObjectType;
