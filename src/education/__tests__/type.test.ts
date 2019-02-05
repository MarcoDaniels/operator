import { Education } from '../type'
import { GraphQLList, GraphQLString } from 'graphql'

describe('Education type', () => {
    it('should check for all education fields type', () => {
        const fields = Education.getFields()

        expect(fields).toHaveProperty('institution')
        expect(fields.institution.type).toMatchObject(GraphQLString)

        expect(fields).toHaveProperty('degree')
        expect(fields.degree.type).toMatchObject(GraphQLString)

        expect(fields).toHaveProperty('field')
        expect(fields.field.type).toMatchObject(GraphQLString)

        expect(fields).toHaveProperty('from')
        expect(fields.from.type).toMatchObject(GraphQLString)

        expect(fields).toHaveProperty('to')
        expect(fields.to.type).toMatchObject(GraphQLString)

        expect(fields).toHaveProperty('location')
        expect(fields.location.type).toMatchObject(GraphQLString)

        expect(fields).toHaveProperty('details')
        expect(fields.details.type).toMatchObject(new GraphQLList(GraphQLString))
    })
})
