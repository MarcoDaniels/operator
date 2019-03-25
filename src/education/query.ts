import { GraphQLList } from 'graphql'
import { IGraphQLFieldQuery } from '../utils/GraphQLFieldQuery'
import { Education } from './type'
import { IUser } from '../user/type'
import { getEducation } from './data'

export const ListUserEducationQuery: IGraphQLFieldQuery<IUser, {}, {}> = {
    type: GraphQLList(Education),
    description: Education.description,
    resolve: (source: IUser) => {
        return getEducation(source)
    }
}
