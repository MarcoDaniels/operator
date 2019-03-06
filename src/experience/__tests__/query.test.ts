import { ListUserExperienceQuery } from '../query'
import { GraphQLList } from 'graphql'
import { Experience, IExperience } from '../type'
import { experienceMock } from '../../__mocks__/data.mock'
import { ResolveInfoMock } from '../../__mocks__/graph.mock'

jest.mock('../../user/query', () => {
    return { GetUser: { type: {} } }
})

jest.mock('../data', () => {
    return {
        getExperiences: jest.fn(() => {
            return new Promise(resolve => {
                resolve(experienceMock)
            })
        })
    }
})

describe('experience query', () => {
    it('should match GraphQL object for ListUserExperienceQuery', () => {
        const data = ListUserExperienceQuery

        expect(data.type).toMatchObject(new GraphQLList(Experience))
        expect(data.description).toBe(Experience.description)

        data.resolve({userName: 'this-user'}, {}, {}, ResolveInfoMock)
            .then((experience: IExperience) => {
                expect(experience).toBe(experienceMock)
            })
    })
})
