import { Skills } from '../type'
import { GraphQLNonNull, GraphQLString } from 'graphql'

describe('skills type', () => {
    it('should check for all skills fields type', () => {
        const fields = Skills.getFields()

        expect(fields).toHaveProperty('identifier')
        expect(fields.identifier.type).toMatchObject(GraphQLNonNull(GraphQLString))

        expect(fields).toHaveProperty('name')
        expect(fields.name.type).toMatchObject(GraphQLNonNull(GraphQLString))
    })
})
