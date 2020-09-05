import { Help } from '../type'
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'

describe('help type', () => {
  it('should check for all help fields type', () => {
    const fields = Help.getFields()

    expect(fields).toHaveProperty('type')
    expect(fields.type.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('description')
    expect(fields.description.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('usage')
    expect(fields.usage.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('content')
    expect(fields.content.type).toMatchObject(GraphQLList(GraphQLString))
  })
})
