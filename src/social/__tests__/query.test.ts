import { ListUserSocialMediaQuery } from '../query'
import { GraphQLList } from 'graphql'
import { SocialMedia } from '../type'
import { socialMediaMock } from '../../__mocks__/social.mock'

jest.mock('../data', () => {
    return {
        getSocialMedias: jest.fn(() => {
            return new Promise(resolve => {
                resolve(socialMediaMock)
            })
        })
    }
})

describe('Social Query', () => {
    it('should match GraphQL object for ', () => {
        const data = ListUserSocialMediaQuery

        expect(data.type).toMatchObject(new GraphQLList(SocialMedia))
        expect(data.description).toBe(SocialMedia.description)

        data.resolve({userName: 'user'}).then((social: object) => {
            expect(social).toBe(socialMediaMock)
        })
    })
})
