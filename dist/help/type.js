"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.Help = new graphql_1.GraphQLObjectType({
    name: 'Help',
    description: 'Help feature',
    fields: () => ({
        type: {
            type: graphql_1.GraphQLString,
            description: 'The agent type to help'
        },
        usage: {
            type: graphql_1.GraphQLString,
            description: 'The usage of help command'
        },
        content: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
            description: 'Help content features'
        }
    })
});
//# sourceMappingURL=type.js.map