import { dbCollectionMock } from '../../__mocks__/database.mocks'
import { skillsMock } from '../../__mocks__/skills.mock'
import { listUserSkills } from '../data'

jest.mock('../../database', () => dbCollectionMock(skillsMock))

describe('Skills data', () => {
    it('should mock and resolve listUserSkills collection', () => {
        const skillsResult = listUserSkills({userName: 'user'})

        skillsResult.then(value => {
            expect(value).toEqual([skillsMock])
        })
    })
})
