import { Experience } from './type'
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { getExperience, getExperiences } from './data'
import { UserType } from '../user/type'

const GetExperienceQuery = {
    type: Experience,
    description: Experience.description,
    args: {
        position: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The position of the experience.'
        }
    },
    resolve: (source: any, args: any) => {
        return getExperience(args)
    }
}

const ListExperienceQuery = {
    type: new GraphQLList(Experience),
    description: Experience.description,
    resolve: () => {
        return getExperiences()
    }
}

export const ListUserExperienceQuery = {
    type: new GraphQLList(Experience),
    description: Experience.description,
    resolve: (source: UserType) => {
        return getExperiences(source)
    }
}

export const ExperienceQuery = new GraphQLObjectType({
    name: 'ExperienceQuery',
    description: 'The experience base query',
    fields: () => ({
        get: GetExperienceQuery,
        list: ListExperienceQuery
    })
})