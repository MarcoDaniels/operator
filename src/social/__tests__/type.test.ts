import { SocialMedia } from '../type'
import { GraphQLNonNull, GraphQLString } from 'graphql'

describe('social type', () => {
    it('should check for all social media fields type', () => {
        const fields = SocialMedia.getFields()

        expect(fields).toHaveProperty('identifier')
        expect(fields.identifier.type).toMatchObject(GraphQLNonNull(GraphQLString))

        expect(fields).toHaveProperty('name')
        expect(fields.name.type).toMatchObject(GraphQLNonNull(GraphQLString))

        expect(fields).toHaveProperty('url')
        expect(fields.url.type).toMatchObject(GraphQLNonNull(GraphQLString))

        expect(fields).toHaveProperty('displayName')
        expect(fields.displayName.type).toMatchObject(GraphQLString)
    })
})
