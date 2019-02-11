import { ListUserSkillsQuery } from '../query'
import { GraphQLList } from 'graphql'
import { Skills } from '../type'
import { skillsMock } from '../../__mocks__/skills.mock'

jest.mock('../data', () => {
    return {
        listUserSkills: jest.fn(() => {
            return new Promise(resolve => {
                resolve(skillsMock)
            })
        })
    }
})

describe('Skills Query', () => {
    it('should match GraphQL object for ListUserSkillsQuery', () => {
        const data = ListUserSkillsQuery

        expect(data.type).toMatchObject(new GraphQLList(Skills))
        expect(data.description).toBe(Skills.description)

        data.resolve({userName: 'user'}).then((skills: any) => {
            expect(skills).toBe(skillsMock)
        })
    })
})
