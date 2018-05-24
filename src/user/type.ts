import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'
import { ListUserExperienceQuery } from '../experience/query'
import { ListUserProjectQuery } from '../project/query'
import { ListUserEducationQuery } from '../education/query'
import { ListUserSocialMediaQuery } from '../social/query'

export type UserType = {
    userName: string
    name: string
    email: string
    title: string
    welcomeMessage: string[]
    description: string[]
    interests: string[]
}

export const User: GraphQLObjectType = new GraphQLObjectType({
    name: 'User',
    description: 'This is user.',
    fields: () => ({
        userName: {
            type: GraphQLString,
            description: 'The user userName.'
        },
        name: {
            type: GraphQLString,
            description: 'The user name.'
        },
        email: {
            type: GraphQLString,
            description: 'The user email.'
        },
        title: {
            type: GraphQLString,
            description: 'The user title.'
        },
        welcomeMessage: {
            type: new GraphQLList(GraphQLString),
            description: 'The user welcome message.'
        },
        description: {
            type: new GraphQLList(GraphQLString),
            description: 'The user description.'
        },
        interests: {
            type: new GraphQLList(GraphQLString),
            description: 'The user interests.'
        },
        experience: {
            ...ListUserExperienceQuery
        },
        projects: {
            ...ListUserProjectQuery
        },
        education: {
            ...ListUserEducationQuery
        },
        socialMedia: {
            ...ListUserSocialMediaQuery
        }
    })
})