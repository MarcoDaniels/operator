import { GraphQLList, GraphQLObjectType } from 'graphql';
import { ProjectType } from '../project/type';
export declare const ProjectCollaboratorsQuery: {
    type: GraphQLList<GraphQLObjectType>;
    description: string;
    resolve: (source: ProjectType) => {
        name: string;
        email: string;
        userName: string;
        description: string;
        welcomeMessage: string[];
    }[];
};
export declare const UserQuery: GraphQLObjectType;
