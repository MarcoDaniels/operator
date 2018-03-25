"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var query_1 = require("./user/query");
var Query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    description: 'Root query',
    fields: function () { return ({
        user: {
            type: query_1.UserBaseQuery,
            description: query_1.UserBaseQuery.description,
            resolve: function () { return {}; }
        }
    }); }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: Query
});
//# sourceMappingURL=schema.js.map