import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'

export type IHelp = {
    type: string
    description?: string
    usage?: string
    content?: string[]
}

export const Help: GraphQLObjectType = new GraphQLObjectType({
    name: 'Help',
    description: 'Help feature for CLI',
    fields: () => ({
        type: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The type of the feature'
        },
        description: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The description of the feature help'
        },
        usage: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The usage of feature help command'
        },
        content: {
            type: GraphQLList(GraphQLString),
            description: 'Help content features'
        }
    })
})
