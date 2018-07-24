import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'

export type HelpType = {
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
            type: GraphQLString,
            description: 'The type of the feature'
        },
        description: {
            type: GraphQLString,
            description: 'The description of the feature help'
        },
        usage: {
            type: GraphQLString,
            description: 'The usage of feature help command'
        },
        content: {
            type: new GraphQLList(GraphQLString),
            description: 'Help content features'
        }
    })
})