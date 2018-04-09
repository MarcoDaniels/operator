import { GraphQLObjectType } from 'graphql';
export declare type ProjectType = {
    name: string;
    homepage: string;
    releaseDate: string;
    description: string;
    details: string;
};
export declare const Project: GraphQLObjectType;
