import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'

export interface ISocialMedia {
  identifier: string
  name: string
  url: string
  displayName?: string
}

export const SocialMedia: GraphQLObjectType = new GraphQLObjectType({
  name: 'SocialMedia',
  description: 'Social Media accounts.',
  fields: () => ({
    identifier: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The social media string identifier(ex: facebook, instagram).',
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The name of the social media.',
    },
    url: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The url for the social media.',
    },
    displayName: {
      type: GraphQLString,
      description: 'The display name for the social media URL.',
    },
  }),
})
