import { getHelp, listHelp } from '../data'
import { dataBaseGet } from '../../__mocks__/database.mocks'
import { helpMock } from '../__mocks__/help.mocks'

jest.mock('../../database', () => {
    return {
        dataBase: {
            collection: jest.fn(() => {
                return {
                    where: jest.fn(() => {
                        return {
                            get: jest.fn(() => dataBaseGet(helpMock))
                        }
                    }),
                    orderBy: jest.fn(() => {
                        return {
                            get: jest.fn(() => dataBaseGet(helpMock))
                        }
                    })
                }
            })
        }
    }
})

describe('Help data', () => {
    it('should mock and resolve getHelp collection', () => {
        const helpResult = getHelp({type: 'help'})

        helpResult.then(value => {
            expect(value).toBe(helpMock)
        })
    })

    it('should mock and resolve listHelp collection', () => {
        const helpResult = listHelp()

        helpResult.then(value => {
            expect(value).toEqual([helpMock])
        })
    })
})
