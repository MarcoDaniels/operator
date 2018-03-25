import {GraphQLID, GraphQLObjectType, GraphQLString} from 'graphql'

export const UserType: GraphQLObjectType = new GraphQLObjectType({
    name: 'User',
    description: 'This is user.',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'The user id.'
        },
        name: {
            type: GraphQLString,
            description: 'The user\'s name.'
        },
        email: {
            type: GraphQLString,
            description: 'The user\'s primary email address.'
        },
        phone: {
            type: GraphQLString,
            description: 'The user\'s primary phone number.'
        },
    })
})