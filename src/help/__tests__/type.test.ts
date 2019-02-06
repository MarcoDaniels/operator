import { Help } from '../type'
import { GraphQLList, GraphQLString } from 'graphql'

describe('Help type', () => {
    it('should check for all help fields type', () => {
        const fields = Help.getFields()

        expect(fields).toHaveProperty('type')
        expect(fields.type.type).toMatchObject(GraphQLString)

        expect(fields).toHaveProperty('description')
        expect(fields.description.type).toMatchObject(GraphQLString)

        expect(fields).toHaveProperty('usage')
        expect(fields.usage.type).toMatchObject(GraphQLString)

        expect(fields).toHaveProperty('content')
        expect(fields.content.type).toMatchObject(new GraphQLList(GraphQLString))
    })
})
