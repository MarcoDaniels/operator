"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_functions_1 = require("firebase-functions");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var apollo_server_express_1 = require("apollo-server-express");
var schema_1 = require("./schema");
var setupGraphQLServer = function () {
    var GRAPHQL = "/graphql";
    var GRAPHIQL = "/graphiql";
    var server = express();
    server.use(GRAPHQL, cors(), bodyParser.json(), apollo_server_express_1.graphqlExpress({
        schema: schema_1.schema
    }));
    server.use(GRAPHIQL, apollo_server_express_1.graphiqlExpress({
        endpointURL: GRAPHQL
    }));
    return server;
};
exports.operator = firebase_functions_1.https.onRequest(setupGraphQLServer());
//# sourceMappingURL=index.js.map