import { GraphQLObjectType, GraphQLString } from 'graphql'

export const Images: GraphQLObjectType = new GraphQLObjectType({
    name: 'Images',
    description: 'Image type',
    fields: () => ({
        type: {
            type: GraphQLString,
            description: 'The image type (avatar, logo)'
        },
        url: {
            type: GraphQLString,
            description: 'The image url'
        }
    })
})