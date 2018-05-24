import { GraphQLList } from 'graphql'
import { Education } from './type'
import { UserType } from '../user/type'
import { getEducations } from './data'

export const ListUserEducationQuery: any = {
    type: new GraphQLList(Education),
    description: Education.description,
    resolve: (source: UserType) => {
        return getEducations(source)
    }
}