import { IGraphQLFieldQuery } from '../utils'
import { GraphQLList } from 'graphql'
import { Experience } from './type'
import { IUser } from '../user/type'
import { getExperiences } from './data'

export const ListUserExperienceQuery: IGraphQLFieldQuery<IUser, {}, {}> = {
    type: new GraphQLList(Experience),
    description: Experience.description,
    resolve: (source: IUser) => {
        return getExperiences(source)
    }
}
