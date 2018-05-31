import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'

export const Education: GraphQLObjectType = new GraphQLObjectType({
    name: 'Education',
    description: 'Study degrees and courses.',
    fields: () => ({
        institution: {
            type: GraphQLString,
            description: 'University or institution name.',
        },
        degree: {
            type: GraphQLString,
            description: 'Degree or course name.'
        },
        field: {
            type: GraphQLString,
            description: 'Field of study.'
        },
        from: {
            type: GraphQLString,
            description: 'The start date of the education.'
        },
        to: {
            type: GraphQLString,
            description: 'The end date of the education.'
        },
        location: {
            type: GraphQLString,
            description: 'The city or/and country.'
        },
        details: {
            type: new GraphQLList(GraphQLString),
            description: 'Details of the education.'
        }
    })
})