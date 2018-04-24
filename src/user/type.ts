import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'

export type UserType = {
    name: string
    email: string
    userName: string
    description: string[]
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
        email: {
            type: GraphQLString,
            description: 'The user email.'
        },
        userName: {
            type: GraphQLString,
            description: 'The user userName.'
        },
        description: {
            type: new GraphQLList(GraphQLString),
            description: 'The user description.'
        },
        welcomeMessage: {
            type: new GraphQLList(GraphQLString),
            description: 'The user welcome message'
        }
    })
})