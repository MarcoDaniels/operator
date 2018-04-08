import {ProjectType} from './type'
import {GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql'
import {getProject, getProjects} from './data'
import {HelpType} from '../help/type'
import {projectHelp} from '../help/data'

const GetProjectQuery = {
    type: ProjectType,
    description: ProjectType.description,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The project name'
        }
    },
    resolve: (source:any, args: any) => {
        return getProject(args)
    }
}

const ListProjectQuery = {
    type: new GraphQLList(ProjectType),
    description: ProjectType.description,
    resolve: () => {
        return getProjects()
    }
}

const HelpProjectQuery = {
    type: HelpType,
    description: HelpType.description,
    resolve: () => {
        return projectHelp()
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