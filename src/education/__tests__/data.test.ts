import { getEducation } from '../data'
import { educationMock } from '../__mocks__/education.mock'

const dataBaseGet = (mockObject: any) => {
    return new Promise(resolve => {
        resolve([{
            data: jest.fn(() => {
                return mockObject
            })
        }])
    })
}

jest.mock('../../database', () => {
    return {
        dataBase: {
            collection: jest.fn(() => {
                return {
                    where: jest.fn(() => {
                        return {
                            get: jest.fn(() => dataBaseGet(educationMock))
                        }
                    })
                }
            })
        }
    }
})

describe('Education data', () => {
    it('should mock and resolve getEducation collection', async () => {
        const educationResult = getEducation({userName: 'this-user'})

        educationResult.then(value => {
            expect(value).toEqual([educationMock])
        })
    })
})
