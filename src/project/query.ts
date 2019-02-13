import { Project } from './type'
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { getProject, listProjects } from './data'
import { IUser } from '../user/type'
import { GraphQLFieldQueryType } from '../utils'

export const GetProjectQuery: GraphQLFieldQueryType<any, any, any> = {
    type: Project,
    description: Project.description,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The project name'
        }
    },
    resolve: (source: {}, args: any) => {
        return getProject(args.name)
    }
}

export const ListProjectQuery: GraphQLFieldQueryType<{}, {}, {}> = {
    type: new GraphQLList(Project),
    description: Project.description,
    resolve: () => {
        return listProjects()
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

export const ListUserProjectQuery: GraphQLFieldQueryType<IUser, {}, {}> = {
    type: new GraphQLList(Project),
    description: Project.description,
    resolve: (source: IUser) => {
        return listProjects(source)
    }
}
