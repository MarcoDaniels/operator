import { GraphQLObjectType, GraphQLString } from 'graphql'

export const SocialMedia: GraphQLObjectType = new GraphQLObjectType({
    name: 'SocialMedia',
    description: 'Social Media accounts.',
    fields: () => ({
        identifier: {
            type: GraphQLString,
            description: 'The social media string identifier(ex: facebook, instagram).'
        },
        name: {
            type: GraphQLString,
            description: 'The name of the social media.'
        },
        url: {
            type: GraphQLString,
            description: 'The url for the social media.'
        },
        displayName: {
            type: GraphQLString,
            description: 'The display name for the social media URL.'
        }
    }),
})