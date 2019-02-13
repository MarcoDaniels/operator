import { GraphQLFieldQueryType } from '../utils'
import { GraphQLList } from 'graphql'
import { Experience } from './type'
import { UserType } from '../user/type'
import { getExperiences } from './data'

export const ListUserExperienceQuery: GraphQLFieldQueryType<UserType, {}, {}> = {
    type: new GraphQLList(Experience),
    description: Experience.description,
    resolve: (source: UserType) => {
        return getExperiences(source)
    }
}
