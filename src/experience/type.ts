import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { GetUser } from '../user/query'

export interface IExperience {
  user: Record<string, unknown>
  position: string
  workplace: string
  from: string
  to: string
  location: string
  details?: string[]
}

export const Experience: GraphQLObjectType = new GraphQLObjectType({
  name: 'Experience',
  description: 'Work experience.',
  fields: () => ({
    user: {
      ...GetUser,
    },
    position: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The position name.',
    },
    workplace: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The workplace name.',
    },
    from: {
      type: GraphQLString,
      description: 'The start date of the experience.',
    },
    to: {
      type: GraphQLString,
      description: 'The end date of the experience.',
    },
    location: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The city or/and country.',
    },
    details: {
      type: GraphQLList(GraphQLString),
      description: 'Details of the experience.',
    },
  }),
})
