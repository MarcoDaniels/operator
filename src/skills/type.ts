import { GraphQLObjectType, GraphQLString } from 'graphql'

export const Skills: GraphQLObjectType = new GraphQLObjectType({
    name: 'Skills',
    description: 'Technical skills, programming skills and languages.',
    fields: () => ({
        identifier: {
            type: GraphQLString,
            description: 'The skill identifier.'
        },
        name: {
            type: GraphQLString,
            description: 'The skill name.'
        }
    })
})