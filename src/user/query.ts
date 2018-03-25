import {GraphQLList, GraphQLObjectType} from 'graphql'
import {UserType} from './type'
import {getUser, getUsers} from './data'

const GetUserQuery = {
    type: UserType,
    description: UserType.description,
    // require arguments
    resolve: (source: any, args: any) => {
        return getUser(args)
    }
}

const ListUserQuery = {
    type: new GraphQLList(UserType),
    description: UserType.description,
    resolve: (source: any, args: any) => {
        return getUsers()
    }
}

export const UserBaseQuery = new GraphQLObjectType({
    name: 'UserQuery',
    description: 'The user query',
    fields: () => ({
        get: GetUserQuery,
        list: ListUserQuery
    })
})