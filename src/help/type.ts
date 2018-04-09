import {GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';

export type HelpType = {
    type: string
    content?: string[]
}

export const Help: GraphQLObjectType = new  GraphQLObjectType({
    name: 'Help',
    description: 'Help feature',
    fields: () => ({
        type: {
            type: GraphQLString,
            description: 'The agent type to help'
        },
        content: {
            type: new GraphQLList(GraphQLString),
            description: 'Help content features'
        }
    })
})