"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
const graphql_1 = require("graphql");
const data_1 = require("./data");
const GetHelpQuery = {
    type: new graphql_1.GraphQLList(type_1.Help),
    description: type_1.Help.description,
    resolve: () => {
        return data_1.getHelp();
    }
};
exports.HelpQuery = new graphql_1.GraphQLObjectType({
    name: 'HelpQuery',
    description: 'The root commands help',
    fields: () => ({
        get: GetHelpQuery
    })
});
//# sourceMappingURL=query.js.map