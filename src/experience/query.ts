import {ExperienceType} from './type'
import {GraphQLList, GraphQLObjectType} from 'graphql'
import {getExperience, getExperiences} from './data'

const GetExperienceQuery = {
    type: ExperienceType,
    description: ExperienceType.description,
    resolve: (source: any, args: any) => {
        return getExperience(args)
    }
}

const ListExperienceQuery = {
    type: new GraphQLList(ExperienceType),
    description: ExperienceType.description,
    resolve: (source: any, args: any) => {
        return getExperiences()
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