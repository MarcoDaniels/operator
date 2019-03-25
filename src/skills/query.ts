import { Skills } from './type'
import { GraphQLList } from 'graphql'
import { IUser } from '../user/type'
import { listUserSkills } from './data'
import { IGraphQLFieldQuery } from '../utils/GraphQLFieldQuery'

export const ListUserSkillsQuery: IGraphQLFieldQuery<IUser, any, any> = {
    type: GraphQLList(Skills),
    description: Skills.description,
    resolve: (source: IUser) => {
        return listUserSkills(source)
    }
}
