"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var type_1 = require("./type");
var data_1 = require("./data");
var GetUserQuery = {
    type: type_1.UserType,
    description: type_1.UserType.description,
    // require arguments
    resolve: function (source, args) {
        return data_1.getUser(args);
    }
};
var ListUserQuery = {
    type: new graphql_1.GraphQLList(type_1.UserType),
    description: type_1.UserType.description,
    resolve: function (source, args) {
        return data_1.getUsers();
    }
};
exports.UserBaseQuery = new graphql_1.GraphQLObjectType({
    name: 'UserQuery',
    description: 'The user query',
    fields: function () { return ({
        get: GetUserQuery,
        list: ListUserQuery
    }); }
});
//# sourceMappingURL=query.js.map