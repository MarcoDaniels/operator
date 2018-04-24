"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const type_1 = require("./type");
const data_1 = require("./data");
const GetUserQuery = {
    type: type_1.User,
    description: type_1.User.description,
    args: {
        userName: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
            description: 'The user userName'
        }
    },
    resolve: (source, args) => {
        return data_1.getUser(args.userName);
    }
};
const ListUserQuery = {
    type: new graphql_1.GraphQLList(type_1.User),
    description: type_1.User.description,
    resolve: () => {
        return data_1.getUsers();
    }
};
exports.ProjectCollaboratorsQuery = {
    type: new graphql_1.GraphQLList(type_1.User),
    description: type_1.User.description,
    resolve: (source) => {
        return data_1.getCollaborators(source.collaborators);
    }
};
exports.UserQuery = new graphql_1.GraphQLObjectType({
    name: 'UserQuery',
    description: 'The user query',
    fields: () => ({
        get: GetUserQuery,
        list: ListUserQuery
    })
});
//# sourceMappingURL=query.js.map