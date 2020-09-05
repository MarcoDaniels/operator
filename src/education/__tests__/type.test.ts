import { Education } from '../type'
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'

describe('education type', () => {
  it('should check for all education fields type', () => {
    const fields = Education.getFields()

    expect(fields).toHaveProperty('institution')
    expect(fields.institution.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('degree')
    expect(fields.degree.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('field')
    expect(fields.field.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('from')
    expect(fields.from.type).toMatchObject(GraphQLString)

    expect(fields).toHaveProperty('to')
    expect(fields.to.type).toMatchObject(GraphQLString)

    expect(fields).toHaveProperty('location')
    expect(fields.location.type).toMatchObject(GraphQLNonNull(GraphQLString))

    expect(fields).toHaveProperty('details')
    expect(fields.details.type).toMatchObject(GraphQLList(GraphQLString))
  })
})
