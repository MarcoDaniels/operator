import { Skills } from './type'
import { GraphQLList } from 'graphql'
import { IUser } from '../user/type'
import { listUserSkills } from './data'

export const ListUserSkillsQuery: any = {
    type: new GraphQLList(Skills),
    description: Skills.description,
    resolve: (source: IUser) => {
        return listUserSkills(source)
    }
}
