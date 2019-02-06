import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'
import { User, UserType } from '../user/type'
import { getUser } from '../user/data'

export const Experience: GraphQLObjectType = new GraphQLObjectType({
    name: 'Experience',
    description: 'Work experience.',
    fields: () => ({
        user: {
            type: User,
            description: User.description,
            resolve: (source: UserType) => {
                return getUser(source.userName)
            }
        },
        position: {
            type: GraphQLString,
            description: 'The position name.'
        },
        workplace: {
            type: GraphQLString,
            description: 'The workplace name.'
        },
        from: {
            type: GraphQLString,
            description: 'The start date of the experience.'
        },
        to: {
            type: GraphQLString,
            description: 'The end date of the experience.'
        },
        location: {
            type: GraphQLString,
            description: 'The city or/and country.'
        },
        details: {
            type: new GraphQLList(GraphQLString),
            description: 'Details of the experience.'
        }
    })
})
