import { ListUserEducationQuery } from '../query'
import { GraphQLList } from 'graphql'
import { Education } from '../type'
import { educationMock } from '../../__mocks__/education.mock'

jest.mock('../data', () => {
    return {
        getEducation: jest.fn(() => {
            return new Promise(resolve => {
                resolve(educationMock)
            })
        })
    }
})

describe('Education Query', () => {
    it('should match GraphQL object for ListUserEducationQuery', () => {
        const data = ListUserEducationQuery

        expect(data.type).toMatchObject(new GraphQLList(Education))
        expect(data.description).toBe(Education.description)

        data.resolve({userName: 'user'}).then((education: any) => {
            expect(education).toBe(educationMock)
        })
    })
})
