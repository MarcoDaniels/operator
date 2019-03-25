import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { ProjectCollaboratorsQuery } from '../user/query'

export interface IProject {
    name: string
    homepage: string
    releaseDate?: string
    description: string
    details?: string[]
    collaborators: string[]
}

export const Project: GraphQLObjectType = new GraphQLObjectType({
    name: 'Project',
    description: 'Personal or work developed project.',
    fields: () => ({
        name: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The name of the project.'
        },
        homepage: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The homepage of the project.'
        },
        releaseDate: {
            type: GraphQLString,
            description: 'The released data of the project.'
        },
        description: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The description of the project.'
        },
        details: {
            type: GraphQLList(GraphQLString),
            description: 'Details of the project specifications.'
        },
        collaborators: {
            ...ProjectCollaboratorsQuery
        }
    })
})
