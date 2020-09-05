import { GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql'

export interface IObjectListArguments {
  page: number
  perPage: number
}

interface IObjectListMetadata extends IObjectListArguments {
  total: number
}

export interface IObjectList {
  metadata: IObjectListMetadata
  data: any[]
}

export const ObjectListArguments = new GraphQLInputObjectType({
  name: 'ObjectListArguments',
  description: 'Filter properties for list of objects.',
  fields: () => ({
    page: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'The page number.',
    },
    perPage: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'The elements per page.',
    },
  }),
})

export const ObjectListMetadata = new GraphQLObjectType({
  name: 'ObjectListMetadata',
  description: 'Metadata for object list.',
  fields: () => ({
    ...ObjectListArguments.getFields(),
    total: {
      type: GraphQLInt,
      description: 'Total number of items.',
    },
  }),
})

export function ObjectList(objectType: GraphQLObjectType): GraphQLObjectType {
  return new GraphQLObjectType({
    name: objectType.name + 'ObjectList',
    description: 'Object List of data and metadata for ' + objectType.name + '.',
    fields: () => ({
      metadata: {
        type: ObjectListMetadata,
        description: ObjectListMetadata.description,
      },
      data: {
        type: GraphQLList(objectType),
        description: objectType.description,
      },
    }),
  })
}
