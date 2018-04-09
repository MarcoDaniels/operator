import { GraphQLObjectType } from 'graphql';
export interface UserType {
    name: string;
    title: string;
    description: string;
    welcomeMessage: string[];
}
export declare const User: GraphQLObjectType;
