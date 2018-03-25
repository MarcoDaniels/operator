"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var query_1 = require("./user/query");
var query_2 = require("./project/query");
var query_3 = require("./experience/query");
var Query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    description: 'Root query',
    fields: function () { return ({
        user: {
            type: query_1.UserBaseQuery,
            description: query_1.UserBaseQuery.description,
            resolve: function () { return {}; }
        },
        project: {
            type: query_2.ProjectQuery,
            description: query_2.ProjectQuery.description,
            resolve: function () { return {}; }
        },
        experience: {
            type: query_3.ExperienceQuery,
            description: query_3.ExperienceQuery.description,
            resolve: function () { return {}; }
        }
    }); }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: Query
});
//# sourceMappingURL=schema.js.map