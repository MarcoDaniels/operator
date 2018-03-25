"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions = require("firebase-functions");
var express = require("express");
var bodyParser = require("body-parser");
var apollo_server_express_1 = require("apollo-server-express");
var schema_1 = require("./schema");
var setupGraphQLServer = function () {
    var PORT = Number(process.env.PORT) || 3000;
    var server = express();
    server.use('/graphql', bodyParser.json(), apollo_server_express_1.graphqlExpress({ schema: schema_1.schema }));
    server.listen(PORT, function () { console.log("GraphQL is up and running"); });
    return server;
};
exports.operator = functions.https.onRequest(setupGraphQLServer());
//# sourceMappingURL=index.js.map