import { Help, HelpType } from './type'
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { getHelp, listHelp } from './data'

const GetHelpQuery = {
    type: Help,
    description: Help.description,
    args: {
        type: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The type of help'
        }
    },
    resolve: (source: any, args: any) => {
        const helpType: HelpType = {type: args.type}
        return getHelp(helpType)
    }
}
const ListHelpQuery = {
    type: new GraphQLList(Help),
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