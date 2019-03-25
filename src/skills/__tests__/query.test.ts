import { ListUserSkillsQuery } from '../query'
import { GraphQLList } from 'graphql'
import { Skills } from '../type'
import { skillsMock } from '../../__mocks__/data.mock'
import { ResolveInfoMock } from '../../__mocks__/graph.mock'

jest.mock('../data', () => {
    return {
        listUserSkills: jest.fn(() => {
            return new Promise(resolve => {
                resolve(skillsMock)
            })
        })
    }
})

describe('skills query', () => {
    it('should match GraphQL object for ListUserSkillsQuery', () => {
        const data = ListUserSkillsQuery

        expect(data.type).toMatchObject(GraphQLList(Skills))
        expect(data.description).toBe(Skills.description)

        data.resolve({userName: 'user'}, {}, {}, ResolveInfoMock)
            .then((skills: any) => {
                expect(skills).toBe(skillsMock)
            })
    })
})
