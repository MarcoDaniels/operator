import { dbCollectionMock } from '../../__mocks__/database.mocks'
import { educationMock } from '../../__mocks__/education.mock'
import { getEducation } from '../data'

jest.mock('../../database', () => dbCollectionMock(educationMock))

describe('education data', () => {
    it('should mock and resolve getEducation collection', async () => {
        const educationResult = getEducation({userName: 'this-user'})

        educationResult.then(value => {
            expect(value).toEqual([educationMock])
        })
    })
})
