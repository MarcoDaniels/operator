import {GraphQLID, GraphQLObjectType, GraphQLString} from 'graphql'

export const ProjectType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Project',
    description: 'Personal or work developed project.',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'The project ID.'
        },
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
        }
    })
})