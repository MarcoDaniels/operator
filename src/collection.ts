import { GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql'

export type CollectionArgumentsType = {
    page: number
    perPage: number
}

interface CollectionMetadataType extends CollectionArgumentsType {
    total: number
}

export type CollectionOutputType = {
    metadata: CollectionMetadataType,
    data: any[]
}

export const CollectionArguments = new GraphQLInputObjectType({
    name: 'CollectionArguments',
    description: 'Filter list of objects.',
    fields: () => ({
        page: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The page number.'
        },
        perPage: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The elements per page.'
        }
    })
})

export const CollectionMetadata = new GraphQLObjectType({
    name: 'CollectionMetadata',
    description: 'Data about list connection.',
    fields: () => ({
        ...CollectionArguments.getFields(),
        total: {
            type: GraphQLInt,
            description: 'Total number of items.'
        }
    })
})

export function Collection(objectType: GraphQLObjectType): GraphQLObjectType {
    return new GraphQLObjectType({
        name: objectType.name + 'Collection',
        description: 'Collection of data objects and metadata for ' + objectType.name + '.',
        fields: () => ({
            metadata: {
                type: CollectionMetadata,
                description: CollectionMetadata.description
            },
            data: {
                type: new GraphQLList(objectType),
                description: objectType.description
            }
        })
    })
}
