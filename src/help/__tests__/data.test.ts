import { dbCollectionMock } from '../../__mocks__/database.mocks'
import { helpMock } from '../../__mocks__/data.mock'
import { getHelp, listHelp } from '../data'

jest.mock('../../database', () => dbCollectionMock(helpMock))

describe('help data', () => {
  it('should mock and resolve getHelp collection', () => {
    const helpResult = getHelp({ type: 'help' })

    helpResult.then((value) => {
      expect(value).toBe(helpMock)
    })
  })

  it('should mock and resolve listHelp collection', () => {
    const helpResult = listHelp()

    helpResult.then((value) => {
      expect(value).toEqual([helpMock])
    })
  })
})
