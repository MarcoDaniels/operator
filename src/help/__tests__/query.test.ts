import { GetHelpQuery, HelpQuery, ListHelpQuery } from '../query'
import { Help } from '../type'
import { GraphQLList, GraphQLNonNull, GraphQLResolveInfo, GraphQLString } from 'graphql'
import { helpMock } from '../../__mocks__/data.mock'

jest.mock('../data', () => {
  return {
    getHelp: jest.fn(() => {
      return new Promise((resolve) => {
        resolve(helpMock)
      })
    }),
    listHelp: jest.fn(() => {
      return new Promise((resolve) => {
        resolve([helpMock])
      })
    }),
  }
})

describe('help query', () => {
  it('should match GraphQL object for GetHelpQuery', () => {
    const helpQuery = GetHelpQuery

    expect(helpQuery.type).toBe(Help)
    expect(helpQuery.description).toBe(Help.description)
    expect(helpQuery.args!.type).toMatchObject({
      type: GraphQLNonNull(GraphQLString),
      description: 'The type of help',
    })

    helpQuery.resolve({}, { type: 'help' }, {}, {} as GraphQLResolveInfo).then((help: any) => {
      expect(help).toBe(helpMock)
    })
  })

  it('should match GraphQL object for ListHelpQuery', () => {
    const listQuery = ListHelpQuery

    expect(listQuery.type).toEqual(GraphQLList(Help))
    expect(listQuery.description).toBe(Help.description)

    listQuery.resolve({}, {}, {}, {} as GraphQLResolveInfo).then((help: any) => {
      expect(help).toMatchObject([helpMock])
    })
  })

  it('should match GraphQL fields for HelpQuery', () => {
    const queryFields = HelpQuery.getFields()

    expect(queryFields.get).toBeDefined()
    expect(queryFields.list).toBeDefined()
  })
})
