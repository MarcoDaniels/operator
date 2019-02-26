import { GetProjectQuery, ListProjectQuery, ListUserProjectQuery, ProjectQuery } from '../query'
import { IProject, Project } from '../type'
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'
import { projectMock } from '../../__mocks__/data.mock'

jest.mock('../../user/query', () => {
    return {ProjectCollaboratorsQuery: {type: {}}}
})

jest.mock('../data', () => {
    return {
        getProject: jest.fn(() => {
            return new Promise(resolve => {
                resolve(projectMock)
            })
        }),
        listProjects: jest.fn(() => {
            return new Promise(resolve => {
                resolve([projectMock])
            })
        })
    }
})

describe('project query', () => {
    it('should match GraphQL object for GetProjectQuery', () => {
        const projectQuery = GetProjectQuery

        expect(projectQuery.type).toBe(Project)
        expect(projectQuery.description).toBe(Project.description)
        expect(projectQuery.args!.name).toMatchObject({
           type: new GraphQLNonNull(GraphQLString),
           description: 'The project name'
        })

        // @ts-ignore
        projectQuery.resolve({}, {name: 'operator'})
            .then((project: IProject) => {
                expect(project).toBe(projectMock)
            })
    })

    it('should match GraphQL object for ListProjectQuery', () => {
        const projectQuery = ListProjectQuery

        expect(projectQuery.type).toEqual(new GraphQLList(Project))
        expect(projectQuery.description).toBe(Project.description)

        // @ts-ignore
        projectQuery.resolve().then((projects: [IProject]) => {
            expect(projects).toEqual([projectMock])
        })
    })

    it('should match GraphQL fields for ProjectQuery', () => {
        const queryFields = ProjectQuery.getFields()

        expect(queryFields.get).toBeDefined()
        expect(queryFields.list).toBeDefined()
    })

    it('should match GraphQL object for ListUserProjectQuery', () => {
        const userProjectQuery = ListUserProjectQuery

        expect(userProjectQuery.type).toEqual(new GraphQLList(Project))
        expect(userProjectQuery.description).toBe(Project.description)

        // @ts-ignore
        userProjectQuery.resolve({userName: 'this-user'})
            .then((projects: [IProject]) => {
                expect(projects).toEqual([projectMock])
            })
    })
})
