import { Collection, CollectionArguments, CollectionMetadata } from '../collection'
import { GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql'

describe('Collection Objects', () => {
    it('should match CollectionArguments fields', () => {
        const collectionArgs = CollectionArguments.getFields()

        expect(collectionArgs).toHaveProperty('page')
        expect(collectionArgs.page.type).toMatchObject(new GraphQLNonNull(GraphQLInt))

        expect(collectionArgs).toHaveProperty('perPage')
        expect(collectionArgs.perPage.type).toMatchObject(new GraphQLNonNull(GraphQLInt))
    })

    it('should match CollectionMetadata fields', () => {
        const collectionMeta = CollectionMetadata.getFields()

        expect(collectionMeta).toHaveProperty('page')
        expect(collectionMeta.page.type).toMatchObject(new GraphQLNonNull(GraphQLInt))

        expect(collectionMeta).toHaveProperty('perPage')
        expect(collectionMeta.perPage.type).toMatchObject(new GraphQLNonNull(GraphQLInt))

        expect(collectionMeta).toHaveProperty('total')
        expect(collectionMeta.total.type).toMatchObject(GraphQLInt)
    })

    it('should build collection object', () => {
        const mockObject = new GraphQLObjectType({
            name: 'mockObject',
            description: 'mock object description',
            fields: {
                id: {
                    type: GraphQLInt
                }
            }
        })

        const collection = Collection(mockObject)

        expect(collection.name).toBe('mockObjectCollection')
        expect(collection.description).toBe(
            'Collection of data objects and metadata for mockObject.'
        )

        const fields = collection.getFields()

        expect(fields).toHaveProperty('metadata')
        expect(fields.metadata.type).toMatchObject(CollectionMetadata)

        expect(fields).toHaveProperty('data')
        expect(fields.data.type)
    })
})
