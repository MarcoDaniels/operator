import { GraphQLObjectType, GraphQLString } from 'graphql'

export const Skills: GraphQLObjectType = new GraphQLObjectType({
    name: 'Skills',
    description: 'Technical and programming skills and language.',
    fields: () => ({
        identifier: {
            type: GraphQLString,
            description: 'The skill identifier.'
        },
        name: {
            type: GraphQLString,
            description: 'The skill name.'
        },
        description: {
            type: GraphQLString,
            description: 'The skill description.'
        },
    })
})