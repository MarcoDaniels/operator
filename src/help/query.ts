import { Help, IHelp } from './type'
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { getHelp, listHelp } from './data'
import { IGraphQLFieldQuery } from '../utils/GraphQLFieldQuery'

export const GetHelpQuery: IGraphQLFieldQuery<any, any, any> = {
    type: Help,
    description: Help.description,
    args: {
        type: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The type of help'
        }
    },
    resolve: (source: any, args: any) => {
        const helpType: IHelp = {type: args.type}
        return getHelp(helpType)
    }
}

export const ListHelpQuery: IGraphQLFieldQuery<any, any, any> = {
    type: GraphQLList(Help),
    description: Help.description,
    resolve: () => {
        return listHelp()
    }
}

export const HelpQuery = new GraphQLObjectType({
    name: 'HelpQuery',
    description: 'The root commands help',
    fields: () => ({
        get: GetHelpQuery,
        list: ListHelpQuery
    })
})
