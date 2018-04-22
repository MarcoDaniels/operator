"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.Help = new graphql_1.GraphQLObjectType({
    name: 'Help',
    description: 'Help feature',
    fields: () => ({
        type: {
            type: graphql_1.GraphQLString,
            description: 'The type of the feature'
        },
        description: {
            type: graphql_1.GraphQLString,
            description: 'The description of the feature help'
        },
        usage: {
            type: graphql_1.GraphQLString,
            description: 'The usage of feature help command'
        },
        content: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
            description: 'Help content features'
        }
    })
});
//# sourceMappingURL=type.js.map