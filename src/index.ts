import { https } from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { schema } from './schema'

const setupGraphQLServer = () => {
    const GRAPHQL = "/graphql"
    const GRAPHIQL = "/graphiql"

    const server = express()

    server.use(
        GRAPHQL,
        cors(),
        bodyParser.json(),
        graphqlExpress({
            schema
        })
    )

    server.use(
        GRAPHIQL,
        graphiqlExpress({
            endpointURL: GRAPHQL
        })
    )

    return server
}

export const operator = https.onRequest(setupGraphQLServer())