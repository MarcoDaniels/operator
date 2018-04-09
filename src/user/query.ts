import {GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql'
import {User} from './type'
import {getUser, getUsers} from './data'

const GetUserQuery = {
    type: User,
    description: User.description,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The user name'
        }
    },
    resolve: (source: any, args: any) => {
        return getUser(args)
    }
}

const ListUserQuery = {
    type: new GraphQLList(User),
    description: User.description,
    resolve: () => {
        return getUsers()
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