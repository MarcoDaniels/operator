import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { User, IUser } from './type'
import { getCollaborators, getUser, listUsers } from './data'
import { IProject } from '../project/type'
import { ObjectList, ObjectListArguments } from '../utils/objectList'
import { IGraphQLFieldQuery } from '../utils/GraphQLFieldQuery'

export const GetUserQuery: IGraphQLFieldQuery<any, any, any> = {
  type: GraphQLNonNull(User),
  description: User.description,
  args: {
    userName: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The user userName',
    },
  },
  resolve: (source: any, args: any) => {
    return getUser(args.userName)
  },
}

export const ListUserQuery: IGraphQLFieldQuery<any, any, any> = {
  type: GraphQLNonNull(ObjectList(User)),
  description: ObjectList(User).description,
  args: {
    filter: {
      type: ObjectListArguments,
      description: ObjectListArguments.description,
      defaultValue: { page: 1, perPage: 10 },
    },
  },
  resolve: (source: any, args: any) => {
    return listUsers(args.filter)
  },
}

export const UserQuery = new GraphQLObjectType({
  name: 'UserQuery',
  description: 'The user query',
  fields: () => ({
    get: GetUserQuery,
    list: ListUserQuery,
  }),
})

export const GetUser: IGraphQLFieldQuery<IUser, Record<string, unknown>, Record<string, unknown>> = {
  type: User,
  description: User.description,
  resolve: (source: IUser) => {
    return getUser(source.userName)
  },
}

export const ProjectCollaboratorsQuery: IGraphQLFieldQuery<
  IProject,
  Record<string, unknown>,
  Record<string, unknown>
> = {
  type: GraphQLList(User),
  description: User.description,
  resolve: (source: IProject) => {
    return getCollaborators(source.collaborators)
  },
}
