"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("./type");
var graphql_1 = require("graphql");
var data_1 = require("./data");
var GetProjectQuery = {
    type: type_1.ProjectType,
    description: type_1.ProjectType.description,
    args: {
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID),
            description: 'The project id'
        }
    },
    resolve: function (source, args) {
        return data_1.getProject(args);
    }
};
var ListProjectQuery = {
    type: new graphql_1.GraphQLList(type_1.ProjectType),
    description: type_1.ProjectType.description,
    resolve: function () {
        return data_1.getProjects();
    }
};
exports.ProjectQuery = new graphql_1.GraphQLObjectType({
    name: 'ProjectQuery',
    description: 'The projects base query',
    fields: function () { return ({
        get: GetProjectQuery,
        list: ListProjectQuery
    }); }
});
//# sourceMappingURL=query.js.map