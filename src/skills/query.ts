import { Skills } from './type'
import { GraphQLList, GraphQLObjectType } from 'graphql'
import { getSkills } from './data'
import { UserType } from '../user/type'

const ListSkillsQuery: any = {
    type: new GraphQLList(Skills),
    description: Skills.description,
    resolve: () => {
        return getSkills()
    }
}

export const ListUserSkillsQuery: any = {
    type: new GraphQLList(Skills),
    description: Skills.description,
    resolve: (source: UserType) => {
        return getSkills()
    }
}

export const SkillsQuery = new GraphQLObjectType({
    name: 'SkillsQuery',
    description: 'The skills query',
    fields: () => ({
        list: ListSkillsQuery
    })
})