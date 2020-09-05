import { dbCollectionMock } from '../../__mocks__/database.mocks'
import { userMock } from '../../__mocks__/data.mock'
import { getCollaborators, getUser, listUsers } from '../data'

jest.mock('../../database', () => dbCollectionMock(userMock))

describe('user data', () => {
  it('should mock and resolve getUser collection', () => {
    const userResult = getUser('this-user')

    userResult.then((value) => {
      expect(value).toEqual(userMock)
    })
  })

  it('should mock and resolve listUsers collection', () => {
    const userResult = listUsers({ page: 1, perPage: 10 })

    userResult.then((value) => {
      expect(value).toEqual({
        data: [userMock],
        metadata: {
          page: 1,
          perPage: 10,
          total: undefined,
        },
      })
    })
  })

  it('should mock and resolve getCollaborators', () => {
    const userResult = getCollaborators(['user1', 'user2'])

    userResult.then((value) => {
      expect(value).toEqual([userMock, userMock])
    })
  })
})
