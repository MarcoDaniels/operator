import { Skills } from './type'
import { GraphQLList } from 'graphql'
import { UserType } from '../user/type'
import { listUserSkills } from './data'

export const ListUserSkillsQuery: any = {
    type: new GraphQLList(Skills),
    description: Skills.description,
    resolve: (source: UserType) => {
        return listUserSkills(source)
    }
}
