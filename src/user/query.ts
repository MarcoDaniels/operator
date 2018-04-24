import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { User } from './type'
import { getCollaborators, getUser, getUsers } from './data'
import { ProjectType } from '../project/type'

const GetUserQuery = {
    type: User,
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
    type: new GraphQLList(User),
    description: User.description,
    resolve: () => {
        return getUsers()
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