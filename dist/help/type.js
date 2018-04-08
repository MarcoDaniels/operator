"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
exports.HelpType = new graphql_1.GraphQLObjectType({
    name: 'Help',
    description: 'Help feature',
    fields: function () { return ({
        content: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
            description: 'Help features'
        }
    }); }
});
//# sourceMappingURL=type.js.map