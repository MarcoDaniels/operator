import { dbCollectionMock } from '../../__mocks__/database.mocks'
import { projectMock } from '../../__mocks__/project.mock'
import { getProject, listProjects } from '../data'

jest.mock('../../database', () => dbCollectionMock(projectMock))

describe('project data', () => {
    it('should mock and resolve getProject collection', () => {
        const projectResult = getProject('operator')

        projectResult.then(value => {
            expect(value).toEqual(projectMock)
        })
    })

    it('should mock and resolve listProjects collection', () => {
        const projectsResult = listProjects()

        projectsResult.then(value => {
            expect(value).toEqual([projectMock])
        })
    })

    it('should mock and resolve listProjects with user collection', () => {
        const projectsResult = listProjects({userName: 'this-user'})

        projectsResult.then(value => {
            expect(value).toEqual([projectMock])
        })
    })
})
