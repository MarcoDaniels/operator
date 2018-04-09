import {Project} from './type'
import {GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql'
import {getProject, getProjects} from './data'
import {Help, HelpType} from '../help/type'
import {getHelp} from '../help/data'

const GetProjectQuery = {
    type: Project,
    description: Project.description,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The project name'
        }
    },
    resolve: (source: any, args: any) => {
        return getProject(args)
    }
}

const ListProjectQuery = {
    type: new GraphQLList(Project),
    description: Project.description,
    resolve: () => {
        return getProjects()
    }
}

const HelpProjectQuery = {
    type: Help,
    description: Help.description,
    resolve: () => {
        const args: HelpType = { type: 'project' }
        return getHelp(args)
    }
}

export const ProjectQuery = new GraphQLObjectType({
    name: 'ProjectQuery',
    description: 'The projects base query',
    fields: () => ({
        get: GetProjectQuery,
        list: ListProjectQuery,
        help: HelpProjectQuery
    })
})