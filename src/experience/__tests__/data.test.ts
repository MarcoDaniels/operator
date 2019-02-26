import { dbCollectionMock } from '../../__mocks__/database.mocks'
import { experienceMock } from '../../__mocks__/data.mock'
import { getExperiences } from '../data'

jest.mock('../../database', () => dbCollectionMock(experienceMock))

describe('experience data', () => {
    it('should mock and resolve getExperiences collection', () => {
        const experienceResult = getExperiences({userName: 'this-user'})

        experienceResult.then(value => {
            expect(value).toEqual([experienceMock])
        })
    })
})
