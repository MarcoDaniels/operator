import {ProjectType} from './type'
import {GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql'
import {getProject, getProjects} from './data'

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

export const ProjectQuery = new GraphQLObjectType({
    name: 'ProjectQuery',
    description: 'The projects base query',
    fields: () => ({
        get: GetProjectQuery,
        list: ListProjectQuery
    })
})