import '../__mocks__/queries.mock'
import { GetUser, GetUserQuery, ListUserQuery, ProjectCollaboratorsQuery, UserQuery } from '../query'
import { IUser, User } from '../type'
import { userMock, projectMock } from '../../__mocks__/data.mock'
import { GraphQLList, GraphQLNonNull } from 'graphql'
import { Collection } from '../../collection'

jest.mock('../data', () => {
    return {
        getUser: jest.fn(() => {
            return new Promise(resolve => {
                resolve(userMock)
            })
        }),
        listUsers: jest.fn(() => {
            return new Promise(resolve => {
                resolve([userMock])
            })
        }),
        getCollaborators: jest.fn(() => {
            return new Promise(resolve => {
                resolve([userMock])
            })
        }),
    }
})

describe('user query', () => {
    beforeAll(() => {
        jest.clearAllMocks()
    })

    it('should match GraphQL object for GetUserQuery', () => {
        const data = GetUserQuery

        expect(data.type).toMatchObject(new GraphQLNonNull(User))
        expect(data.description).toBe(User.description)

        // @ts-ignore
        data.resolve({}, {userName: 'this-user'}).then((user: IUser) => {
            expect(user).toBe(userMock)
        })
    })

    it('should match GraphQL object for ListUserQuery', () => {
        const data = ListUserQuery

        // TODO: figure out collection type match
        // expect(data.type).toMatchObject(new GraphQLNonNull(Collection(User)))
        expect(data.description).toBe(Collection(User).description)

        // @ts-ignore
        data.resolve({}, {}).then((users: [IUser]) => {
            expect(users).toEqual([userMock])
        })
    })

    it('should match GraphQL fields for UserQuery', () => {
        const queryFields = UserQuery.getFields()

        expect(queryFields.get).toBeDefined()
        expect(queryFields.list).toBeDefined()
    })

    it('should match GraphQL object for GetUser', () => {
        const data = GetUser

        expect(data.type).toBe(User)
        expect(data.description).toBe(User.description)

        // @ts-ignore
        data.resolve({userName: 'this-user'}).then((user: IUser) => {
            expect(user).toEqual(userMock)
        })
    })

    it('should match GraphQL object for ProjectCollaboratorsQuery', () => {
        const data = ProjectCollaboratorsQuery

        expect(data.type).toMatchObject(new GraphQLList(User))
        expect(data.description).toBe(User.description)

        // @ts-ignore
        data.resolve(projectMock).then((user: [IUser]) => {
            expect(user).toEqual([userMock])
        })
    })
})