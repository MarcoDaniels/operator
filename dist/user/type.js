"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.User = new graphql_1.GraphQLObjectType({
    name: 'User',
    description: 'This is user.',
    fields: () => ({
        name: {
            type: graphql_1.GraphQLString,
            description: 'The user name.'
        },
        description: {
            type: graphql_1.GraphQLString,
            description: 'The user description.'
        },
        welcomeMessage: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
            description: 'The user welcome message'
        }
    })
});
//# sourceMappingURL=type.js.map