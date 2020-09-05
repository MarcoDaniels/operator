import { ListUserExperienceQuery } from '../query'
import { GraphQLList, GraphQLResolveInfo } from 'graphql'
import { Experience, IExperience } from '../type'
import { experienceMock } from '../../__mocks__/data.mock'

jest.mock('../../user/query', () => {
  return { GetUser: { type: {} } }
})

jest.mock('../data', () => {
  return {
    getExperiences: jest.fn(() => {
      return new Promise((resolve) => {
        resolve(experienceMock)
      })
    }),
  }
})

describe('experience query', () => {
  it('should match GraphQL object for ListUserExperienceQuery', () => {
    const data = ListUserExperienceQuery

    expect(data.type).toMatchObject(GraphQLList(Experience))
    expect(data.description).toBe(Experience.description)

    data.resolve({ userName: 'this-user' }, {}, {}, {} as GraphQLResolveInfo).then((experience: IExperience) => {
      expect(experience).toBe(experienceMock)
    })
  })
})
