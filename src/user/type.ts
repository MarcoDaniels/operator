import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'
import { ListUserExperienceQuery } from '../experience/query'
import { ListUserProjectQuery } from '../project/query'
import { ListUserEducationQuery } from '../education/query'

export type UserType = {
    name: string
    email: string
    userName: string
    title: string
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
        title: {
            type: GraphQLString,
            description: 'The user title.'
        },
        description: {
            type: new GraphQLList(GraphQLString),
            description: 'The user description.'
        },
        welcomeMessage: {
            type: new GraphQLList(GraphQLString),
            description: 'The user welcome message'
        },
        experience: {
            ...ListUserExperienceQuery
        },
        projects: {
            ...ListUserProjectQuery
        },
        education: {
            ...ListUserEducationQuery
        }
    })
})