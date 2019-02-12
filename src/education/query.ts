import { GraphQLList } from 'graphql'
import { GraphQLFieldQueryType } from '../utils'
import { Education } from './type'
import { UserType } from '../user/type'
import { getEducation } from './data'

export const ListUserEducationQuery: GraphQLFieldQueryType<UserType, {}, {}> = {
    type: new GraphQLList(Education),
    description: Education.description,
    resolve: (source: UserType) => {
        return getEducation(source)
    }
}
