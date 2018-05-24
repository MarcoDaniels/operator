import { Experience } from './type'
import { GraphQLList } from 'graphql'
import { getExperiences } from './data'
import { UserType } from '../user/type'

export const ListUserExperienceQuery: any = {
    type: new GraphQLList(Experience),
    description: Experience.description,
    resolve: (source: UserType) => {
        return getExperiences(source)
    }
}