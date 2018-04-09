"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
const graphql_1 = require("graphql");
const data_1 = require("./data");
const GetExperienceQuery = {
    type: type_1.ExperienceType,
    description: type_1.ExperienceType.description,
    resolve: (source, args) => {
        return data_1.getExperience(args);
    }
};
const ListExperienceQuery = {
    type: new graphql_1.GraphQLList(type_1.ExperienceType),
    description: type_1.ExperienceType.description,
    resolve: (source, args) => {
        return data_1.getExperiences();
    }
};
exports.ExperienceQuery = new graphql_1.GraphQLObjectType({
    name: 'ExperienceQuery',
    description: 'The experience base query',
    fields: () => ({
        get: GetExperienceQuery,
        list: ListExperienceQuery
    })
});
//# sourceMappingURL=query.js.map