import {GraphQLObjectType, GraphQLString} from 'graphql'

export type ExperienceType = {
    position: string
    workplace: string
    startDate: string
    endDate: string
    location: string
    details: string
}

export const Experience: GraphQLObjectType = new  GraphQLObjectType({
    name: 'Experience',
    description: 'Work experience.',
    fields: () => ({
        position: {
            type: GraphQLString,
            description: 'The position name.'
        },
        workplace: {
            type: GraphQLString,
            description: 'The workplace name.'
        },
        startDate: {
            type: GraphQLString,
            description: 'The start date of the experience'
        },
        endDate: {
            type: GraphQLString,
            description: 'The end date of the experience'
        },
        location: {
            type: GraphQLString,
            description: 'The city or/and country.'
        },
        details: {
            type: GraphQLString,
            description: 'Details of the experience.'
        }
    })
})