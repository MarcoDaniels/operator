"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.Project = new graphql_1.GraphQLObjectType({
    name: 'Project',
    description: 'Personal or work developed project.',
    fields: () => ({
        name: {
            type: graphql_1.GraphQLString,
            description: 'The name of the project.'
        },
        homepage: {
            type: graphql_1.GraphQLString,
            description: 'The homepage of the project.'
        },
        releaseDate: {
            type: graphql_1.GraphQLString,
            description: 'The released data of the project.'
        },
        description: {
            type: graphql_1.GraphQLString,
            description: 'The description of the project.'
        },
        details: {
            type: graphql_1.GraphQLString,
            description: 'Details of the project specifications.'
        }
    })
});
//# sourceMappingURL=type.js.map