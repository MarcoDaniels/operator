"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("./type");
var graphql_1 = require("graphql");
var data_1 = require("./data");
var GetExperienceQuery = {
    type: type_1.ExperienceType,
    description: type_1.ExperienceType.description,
    resolve: function (source, args) {
        return data_1.getExperience(args);
    }
};
var ListExperienceQuery = {
    type: new graphql_1.GraphQLList(type_1.ExperienceType),
    description: type_1.ExperienceType.description,
    resolve: function (source, args) {
        return data_1.getExperiences();
    }
};
exports.ExperienceQuery = new graphql_1.GraphQLObjectType({
    name: 'ExperienceQuery',
    description: 'The experience base query',
    fields: function () { return ({
        get: GetExperienceQuery,
        list: ListExperienceQuery
    }); }
});
//# sourceMappingURL=query.js.map