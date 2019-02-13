import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { User, IUser } from './type'
import { getCollaborators, getUser, listUsers } from './data'
import { IProject } from '../project/type'
import { Collection, CollectionArguments } from '../collection'
import { GraphQLFieldQueryType } from '../utils'

export const GetUserQuery: GraphQLFieldQueryType<any, any, any> = {
    type: new GraphQLNonNull(User),
    description: User.description,
    args: {
        userName: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The user userName'
        }
    },
    resolve: (source: any, args: any) => {
        return getUser(args.userName)
    }
}

export const ListUserQuery: GraphQLFieldQueryType<any, any, any> = {
    type: new GraphQLNonNull(Collection(User)),
    description: Collection(User).description,
    args: {
        filter: {
            type: CollectionArguments,
            description: CollectionArguments.description,
            defaultValue: { page: 1, perPage: 10 }
        }
    },
    resolve: (source: any, args: any) => {
        return listUsers(args.filter)
    }
}

export const UserQuery = new GraphQLObjectType({
   name: 'UserQuery',
   description: 'The user query',
   fields: () => ({
       get: GetUserQuery,
       list: ListUserQuery
   })
})

export const GetUser: GraphQLFieldQueryType<IUser, {}, {}> = {
    type: User,
    description: User.description,
    resolve: (source: IUser) => {
        return getUser(source.userName)
    }
}

export const ProjectCollaboratorsQuery: GraphQLFieldQueryType<IProject, {}, {}> = {
    type: new GraphQLList(User),
    description: User.description,
    resolve: (source: IProject) => {
        return getCollaborators(source.collaborators)
    }
}
