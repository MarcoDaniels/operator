import { dbCollectionMock } from '../../__mocks__/database.mocks'
import { socialMediaMock } from '../../__mocks__/social.mock'
import { getSocialMedias } from '../data'

jest.mock('../../database', () => dbCollectionMock(socialMediaMock))

describe('social data', () => {
    it('should mock and resolve getSocialMedias collection', () => {
        const socialMediaResult = getSocialMedias({userName: 'that-user'})

        socialMediaResult.then(value => {
            expect(value).toEqual([socialMediaMock])
        })
    })
})
