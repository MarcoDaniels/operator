import { Experience } from './type'
import { GraphQLList } from 'graphql'
import { UserType } from '../user/type'
import { getExperiences } from './data'
import { GraphQLFieldQueryType } from '../utils'

export const ListUserExperienceQuery: GraphQLFieldQueryType<UserType, {}, {}> = {
    type: new GraphQLList(Experience),
    description: Experience.description,
    resolve: (source: UserType) => {
        return getExperiences(source)
    }
}
