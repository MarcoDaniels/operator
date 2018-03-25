"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
exports.UserType = new graphql_1.GraphQLObjectType({
    name: 'User',
    description: 'This is user.',
    fields: function () { return ({
        id: {
            type: graphql_1.GraphQLID,
            description: 'The user id.'
        },
        name: {
            type: graphql_1.GraphQLString,
            description: 'The user\'s name.'
        },
        email: {
            type: graphql_1.GraphQLString,
            description: 'The user\'s primary email address.'
        },
        phone: {
            type: graphql_1.GraphQLString,
            description: 'The user\'s primary phone number.'
        },
    }); }
});
//# sourceMappingURL=type.js.map