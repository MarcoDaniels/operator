import { ListUserSocialMediaQuery } from '../query'
import { GraphQLList } from 'graphql'
import { SocialMedia } from '../type'
import { socialMediaMock } from '../../__mocks__/data.mock'

jest.mock('../data', () => {
    return {
        getSocialMedias: jest.fn(() => {
            return new Promise(resolve => {
                resolve(socialMediaMock)
            })
        })
    }
})

describe('social query', () => {
    it('should match GraphQL object for ', () => {
        const data = ListUserSocialMediaQuery

        expect(data.type).toMatchObject(new GraphQLList(SocialMedia))
        expect(data.description).toBe(SocialMedia.description)

        // @ts-ignore
        data.resolve({userName: 'user'}).then((social: object) => {
            expect(social).toBe(socialMediaMock)
        })
    })
})
