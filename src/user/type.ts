import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'

export type UserType = {
    name: string
    title: string
    description: string
    welcomeMessage: string[]
}

export const User: GraphQLObjectType = new GraphQLObjectType({
    name: 'User',
    description: 'This is user.',
    fields: () => ({
        name: {
            type: GraphQLString,
            description: 'The user name.'
        },
        title: {
            type: GraphQLString,
            description: 'The user title.'
        },
        description: {
            type: GraphQLString,
            description: 'The user description.'
        },
        welcomeMessage: {
            type: new GraphQLList(GraphQLString),
            description: 'The user welcome message'
        }
    })
})