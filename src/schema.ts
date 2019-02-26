import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { UserQuery } from './user/query'
import { ProjectQuery } from './project/query'
import { HelpQuery } from './help/query'

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query',
    fields: () => ({
        user: {
            type: UserQuery,
            description: UserQuery.description,
            resolve: () => { return {} }
        },
        help: {
            type: HelpQuery,
            description: HelpQuery.description,
            resolve: () => { return {} }
        },
        project: {
            type: ProjectQuery,
            description: ProjectQuery.description,
            resolve: () => { return {} }
        }
    })
})

export const schema = new GraphQLSchema({
    query: Query
})
