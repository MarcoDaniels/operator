import { GraphQLList } from 'graphql'
import { GraphQLFieldQueryType } from '../utils'
import { Education } from './type'
import { IUser } from '../user/type'
import { getEducation } from './data'

export const ListUserEducationQuery: GraphQLFieldQueryType<IUser, {}, {}> = {
    type: new GraphQLList(Education),
    description: Education.description,
    resolve: (source: IUser) => {
        return getEducation(source)
    }
}
