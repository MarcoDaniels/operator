import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'

export interface IEducation {
  institution: string
  degree: string
  field: string
  from: string
  to: string
  location: string
  details?: string
}

export const Education: GraphQLObjectType = new GraphQLObjectType({
  name: 'Education',
  description: 'Study degrees and courses.',
  fields: () => ({
    institution: {
      type: GraphQLNonNull(GraphQLString),
      description: 'University or institution name.',
    },
    degree: {
      type: GraphQLNonNull(GraphQLString),
      description: 'Degree or course name.',
    },
    field: {
      type: GraphQLNonNull(GraphQLString),
      description: 'Field of study.',
    },
    from: {
      type: GraphQLString,
      description: 'The start date of the education.',
    },
    to: {
      type: GraphQLString,
      description: 'The end date of the education.',
    },
    location: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The city or/and country.',
    },
    details: {
      type: GraphQLList(GraphQLString),
      description: 'Details of the education.',
    },
  }),
})
