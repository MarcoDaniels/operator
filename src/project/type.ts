import { GraphQLObjectType, GraphQLString } from 'graphql'
import { ProjectCollaboratorsQuery } from '../user/query'

export type ProjectType = {
    name: string
    homepage: string
    releaseDate: string
    description: string
    details: string
    collaborators: string[]
}

export const Project: GraphQLObjectType = new GraphQLObjectType({
    name: 'Project',
    description: 'Personal or work developed project.',
    fields: () => ({
        name: {
            type: GraphQLString,
            description: 'The name of the project.'
        },
        homepage: {
            type: GraphQLString,
            description: 'The homepage of the project.'
        },
        releaseDate: {
            type: GraphQLString,
            description: 'The released data of the project.'
        },
        description: {
            type: GraphQLString,
            description: 'The description of the project.'
        },
        details: {
            type: GraphQLString,
            description: 'Details of the project specifications.'
        },
        collaborators: {
            ...ProjectCollaboratorsQuery
        }
    })
})