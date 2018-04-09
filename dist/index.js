"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_functions_1 = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("./schema");
const setupGraphQLServer = () => {
    const PORT = Number(process.env.PORT) || 3000;
    const GRAPHQL = '/graphql';
    const GRAPHIQL = '/graphiql';
    const server = express();
    server.use(GRAPHQL, cors(), bodyParser.json(), apollo_server_express_1.graphqlExpress({
        schema: schema_1.schema
    }));
    server.use(GRAPHIQL, apollo_server_express_1.graphiqlExpress({
        endpointURL: GRAPHQL
    }));
    server.listen(PORT, () => {
        console.log(`GraphQL api on http://localhost:${PORT}${GRAPHQL}`);
        console.log(`GraphiQL interface on http://localhost:${PORT}${GRAPHIQL}`);
    });
    return server;
};
exports.operator = firebase_functions_1.https.onRequest(setupGraphQLServer());
//# sourceMappingURL=index.js.map