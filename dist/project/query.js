"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("./type");
var graphql_1 = require("graphql");
var data_1 = require("./data");
var type_2 = require("../help/type");
var data_2 = require("../help/data");
var GetProjectQuery = {
    type: type_1.ProjectType,
    description: type_1.ProjectType.description,
    args: {
        name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: 'The project name'
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
var HelpProjectQuery = {
    type: type_2.HelpType,
    description: type_2.HelpType.description,
    resolve: function () {
        var temp = data_2.projectHelp();
        console.log('result: ', temp);
        return temp;
    }
};
exports.ProjectQuery = new graphql_1.GraphQLObjectType({
    name: 'ProjectQuery',
    description: 'The projects base query',
    fields: function () { return ({
        get: GetProjectQuery,
        list: ListProjectQuery,
        help: HelpProjectQuery
    }); }
});
//# sourceMappingURL=query.js.map