import { ListUserEducationQuery } from '../query'
import { GraphQLList, GraphQLResolveInfo } from 'graphql'
import { Education, IEducation } from '../type'
import { educationMock } from '../../__mocks__/data.mock'

jest.mock('../data', () => {
  return {
    getEducation: jest.fn(() => {
      return new Promise((resolve) => {
        resolve(educationMock)
      })
    }),
  }
})

describe('education query', () => {
  it('should match GraphQL object for ListUserEducationQuery', () => {
    const data = ListUserEducationQuery

    expect(data.type).toMatchObject(GraphQLList(Education))
    expect(data.description).toBe(Education.description)

    data.resolve({ userName: 'this-user' }, {}, {}, {} as GraphQLResolveInfo).then((education: IEducation) => {
      expect(education).toBe(educationMock)
    })
  })
})
