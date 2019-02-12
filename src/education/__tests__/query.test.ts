import { ListUserEducationQuery } from '../query'
import { GraphQLList } from 'graphql'
import { Education, EducationType } from '../type'
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

describe('education query', () => {
    it('should match GraphQL object for ListUserEducationQuery', () => {
        const data = ListUserEducationQuery

        expect(data.type).toMatchObject(new GraphQLList(Education))
        expect(data.description).toBe(Education.description)

        // @ts-ignore because of GraphQLResolveInfo
        data.resolve({userName: 'this-user'}).then((education: EducationType) => {
            expect(education).toBe(educationMock)
        })
    })
})
