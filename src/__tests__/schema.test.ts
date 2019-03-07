import { dbCollectionMock } from '../__mocks__/database.mocks'
import { schema } from '../schema'
// import { UserQuery } from '../user/query'
import { HelpQuery } from '../help/query'
// import { ProjectQuery } from '../project/query'

jest.mock('../database',
          () => dbCollectionMock({})
)

describe('Schema', () => {
    beforeAll(() => {
        jest.clearAllMocks()
    })

    it('should match Query object type', () => {
        const query = schema.getQueryType()

        expect(query!.name).toBe('Query')
        expect(query!.description).toBe('Root query')

        const fields = query!.getFields()

        // expect(fields).toHaveProperty('user')
        // expect(fields.user.type).toMatchObject(UserQuery)

        expect(fields).toHaveProperty('help')
        expect(fields.help.type).toMatchObject(HelpQuery)

        // @ts-ignore
        expect(fields.help.resolve()).toMatchObject({})

        // expect(fields).toHaveProperty('project')
        // expect(fields.project.type).toMatchObject(ProjectQuery)
    })
})
