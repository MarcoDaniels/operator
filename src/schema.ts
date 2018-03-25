import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import {UserBaseQuery} from './user/query'

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query',
    fields: () => ({
        user: {
            type: UserBaseQuery,
            description: UserBaseQuery.description,
            resolve: () => { return {} }
        }
    })
})

export const schema = new GraphQLSchema({
    query: Query
})