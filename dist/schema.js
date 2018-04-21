"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const query_1 = require("./user/query");
const query_2 = require("./project/query");
const query_3 = require("./experience/query");
const Query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    description: 'Root query',
    fields: () => ({
        user: {
            type: query_1.UserQuery,
            description: query_1.UserQuery.description,
            resolve: () => {
                return {};
            }
        },
        project: {
            type: query_2.ProjectQuery,
            description: query_2.ProjectQuery.description,
            resolve: () => {
                return {};
            }
        },
        experience: {
            type: query_3.ExperienceQuery,
            description: query_3.ExperienceQuery.description,
            resolve: () => {
                return {};
            }
        }
    })
});
exports.schema = new graphql_1.GraphQLSchema({
    query: Query
});
//# sourceMappingURL=schema.js.map