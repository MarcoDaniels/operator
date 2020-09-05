import { IGraphQLFieldQuery } from '../utils/GraphQLFieldQuery'
import { GraphQLList } from 'graphql'
import { Experience } from './type'
import { IUser } from '../user/type'
import { getExperiences } from './data'

export const ListUserExperienceQuery: IGraphQLFieldQuery<IUser, Record<string, unknown>, Record<string, unknown>> = {
  type: GraphQLList(Experience),
  description: Experience.description,
  resolve: (source: IUser) => {
    return getExperiences(source)
  },
}
