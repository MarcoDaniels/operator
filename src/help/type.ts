import {GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';

export const HelpType: GraphQLObjectType = new  GraphQLObjectType({
    name: 'Help',
    description: 'Help feature',
    fields: () => ({
        content: {
            type: new GraphQLList(GraphQLString),
            description: 'Help features'
        }
    })
})