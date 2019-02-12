import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { User, UserType } from './type'
import { getCollaborators, getUser, getUsers } from './data'
import { ProjectType } from '../project/type'
import { Collection, CollectionArguments } from '../collection'
import { GraphQLFieldQueryType } from '../utils'

const GetUserQuery: any = {
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

const ListUserQuery = {
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
        return getUsers(args.filter)
    }
}

export const GetUser: GraphQLFieldQueryType<UserType, {}, {}> = {
    type: User,
    description: User.description,
    resolve: (source: UserType) => {
        return getUser(source.userName)
    }
}

export const ProjectCollaboratorsQuery = {
    type: new GraphQLList(User),
    description: User.description,
    resolve: (source: ProjectType) => {
        return getCollaborators(source.collaborators)
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
