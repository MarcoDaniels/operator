import { Experience } from '../type'
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'
import { User } from '../../user/type'

jest.mock('../../user/type', () => {
    return { User: {} }
})

jest.mock('../../user/query', () => {
    return { GetUser: { type: {} } }
})

describe('experience type', () => {
    it('should check for all experience fields type', () => {
        const fields = Experience.getFields()

        expect(fields).toHaveProperty('user')
        expect(fields.user.type).toMatchObject(User)

        expect(fields).toHaveProperty('position')
        expect(fields.position.type).toMatchObject(GraphQLNonNull(GraphQLString))

        expect(fields).toHaveProperty('workplace')
        expect(fields.workplace.type).toMatchObject(GraphQLNonNull(GraphQLString))

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
