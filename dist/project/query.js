"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
const graphql_1 = require("graphql");
const data_1 = require("./data");
const type_2 = require("../help/type");
const data_2 = require("../help/data");
const GetProjectQuery = {
    type: type_1.ProjectType,
    description: type_1.ProjectType.description,
    args: {
        name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: 'The project name'
        }
    },
    resolve: (source, args) => {
        return data_1.getProject(args);
    }
};
const ListProjectQuery = {
    type: new graphql_1.GraphQLList(type_1.ProjectType),
    description: type_1.ProjectType.description,
    resolve: () => {
        return data_1.getProjects();
    }
};
const HelpProjectQuery = {
    type: type_2.HelpType,
    description: type_2.HelpType.description,
    resolve: () => {
        return data_2.projectHelp();
    }
};
exports.ProjectQuery = new graphql_1.GraphQLObjectType({
    name: 'ProjectQuery',
    description: 'The projects base query',
    fields: () => ({
        get: GetProjectQuery,
        list: ListProjectQuery,
        help: HelpProjectQuery
    })
});
//# sourceMappingURL=query.js.map