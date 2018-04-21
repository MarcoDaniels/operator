import { Experience } from './type'
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { getExperience, getExperiences } from './data'
import { Help, HelpType } from '../help/type'
import { getHelp } from '../help/data'

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

const HelpExperienceQuery = {
    type: Help,
    defaultStatus: Help.description,
    resolve: () => {
        const args: HelpType = {type: 'project'}
        return getHelp(args)
    }
}

export const ExperienceQuery = new GraphQLObjectType({
    name: 'ExperienceQuery',
    description: 'The experience base query',
    fields: () => ({
        get: GetExperienceQuery,
        list: ListExperienceQuery,
        help: HelpExperienceQuery
    })
})