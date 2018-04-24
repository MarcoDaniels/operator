import { Help } from './type'
import { GraphQLList, GraphQLObjectType } from 'graphql'
import { getHelp } from './data'

const ListHelpQuery = {
    type: new GraphQLList(Help),
    description: Help.description,
    resolve: () => {
        return getHelp()
    }
}

export const HelpQuery = new GraphQLObjectType({
    name: 'HelpQuery',
    description: 'The root commands help',
    fields: () => ({
        list: ListHelpQuery
    })
})