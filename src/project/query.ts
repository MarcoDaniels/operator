import { Project } from './type'
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { getProject, listProjects } from './data'
import { IUser } from '../user/type'
import { IGraphQLFieldQuery } from '../utils/GraphQLFieldQuery'

export const GetProjectQuery: IGraphQLFieldQuery<any, any, any> = {
  type: Project,
  description: Project.description,
  args: {
    name: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The project name',
    },
  },
  resolve: (source: Record<string, unknown>, args: any) => {
    return getProject(args.name)
  },
}

export const ListProjectQuery: IGraphQLFieldQuery<
  Record<string, unknown>,
  Record<string, unknown>,
  Record<string, unknown>
> = {
  type: GraphQLList(Project),
  description: Project.description,
  resolve: () => {
    return listProjects()
  },
}

export const ProjectQuery = new GraphQLObjectType({
  name: 'ProjectQuery',
  description: 'The projects base query',
  fields: () => ({
    get: GetProjectQuery,
    list: ListProjectQuery,
  }),
})

export const ListUserProjectQuery: IGraphQLFieldQuery<IUser, Record<string, unknown>, Record<string, unknown>> = {
  type: GraphQLList(Project),
  description: Project.description,
  resolve: (source: IUser) => {
    return listProjects(source)
  },
}
