import { getEducation } from '../data'

const educationMock = {
    institution: 'MIT',
    degree: 'Computer Science'
}

jest.mock('../../database', () => {
    return {
        dataBase: {
            collection: jest.fn(() => {
                return {
                    where: jest.fn(() => {
                        return {
                            get: jest.fn(() => {
                                return new Promise(resolve => {
                                    resolve([{
                                        data: jest.fn(() => {
                                            return educationMock
                                        })
                                    }])
                                })
                            })
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
