import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'

export interface ISkills {
  identifier: string
  name: string
}

export const Skills: GraphQLObjectType = new GraphQLObjectType({
  name: 'Skills',
  description: 'Technical skills, programming skills and languages.',
  fields: () => ({
    identifier: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The skill identifier.',
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The skill name.',
    },
  }),
})
