import { ObjectList, ObjectListArguments, ObjectListMetadata } from '../objectList'
import { GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql'

describe('ObjectList Builder', () => {
  it('should match ObjectListArguments fields', () => {
    const objectListArgs = ObjectListArguments.getFields()

    expect(objectListArgs).toHaveProperty('page')
    expect(objectListArgs.page.type).toMatchObject(GraphQLNonNull(GraphQLInt))

    expect(objectListArgs).toHaveProperty('perPage')
    expect(objectListArgs.perPage.type).toMatchObject(GraphQLNonNull(GraphQLInt))
  })

  it('should match ObjectListMetadata fields', () => {
    const objectListMeta = ObjectListMetadata.getFields()

    expect(objectListMeta).toHaveProperty('page')
    expect(objectListMeta.page.type).toMatchObject(GraphQLNonNull(GraphQLInt))

    expect(objectListMeta).toHaveProperty('perPage')
    expect(objectListMeta.perPage.type).toMatchObject(GraphQLNonNull(GraphQLInt))

    expect(objectListMeta).toHaveProperty('total')
    expect(objectListMeta.total.type).toMatchObject(GraphQLInt)
  })

  it('should build collection object', () => {
    const mockObject = new GraphQLObjectType({
      name: 'mockObjectType',
      description: 'mock object description',
      fields: {
        id: {
          type: GraphQLInt,
        },
      },
    })

    const objectList = ObjectList(mockObject)

    expect(objectList.name).toBe('mockObjectTypeObjectList')
    expect(objectList.description).toBe('Object List of data and metadata for mockObjectType.')

    const fields = objectList.getFields()

    expect(fields).toHaveProperty('metadata')
    expect(fields.metadata.type).toMatchObject(ObjectListMetadata)

    expect(fields).toHaveProperty('data')
    expect(fields.data.type)
  })
})
