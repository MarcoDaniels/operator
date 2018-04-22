"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
const graphql_1 = require("graphql");
const data_1 = require("./data");
const type_2 = require("../help/type");
const data_2 = require("../help/data");
const GetExperienceQuery = {
    type: type_1.Experience,
    description: type_1.Experience.description,
    args: {
        position: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: 'The position of the experience.'
        }
    },
    resolve: (source, args) => {
        return data_1.getExperience(args);
    }
};
const ListExperienceQuery = {
    type: new graphql_1.GraphQLList(type_1.Experience),
    description: type_1.Experience.description,
    resolve: () => {
        return data_1.getExperiences();
    }
};
const HelpExperienceQuery = {
    type: type_2.Help,
    defaultStatus: type_2.Help.description,
    resolve: () => {
        const args = { type: 'project' };
        return data_2.getHelpData(args);
    }
};
exports.ExperienceQuery = new graphql_1.GraphQLObjectType({
    name: 'ExperienceQuery',
    description: 'The experience base query',
    fields: () => ({
        get: GetExperienceQuery,
        list: ListExperienceQuery,
        help: HelpExperienceQuery
    })
});
//# sourceMappingURL=query.js.map