import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'
import { ListUserExperienceQuery } from '../experience/query'
import { ListUserProjectQuery } from '../project/query'
import { ListUserEducationQuery } from '../education/query'
import { ListUserSocialMediaQuery } from '../social/query'
import { ListUserSkillsQuery } from '../skills/query'
import { GetUserImageQuery } from '../images/query'

export type UserType = {
    userName: string
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
        image: {
            ...GetUserImageQuery
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
        skills: {
            ...ListUserSkillsQuery
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