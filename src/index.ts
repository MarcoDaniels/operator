import { https, HttpsFunction } from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { schema } from './schema'

const server = express()

server.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    graphqlExpress({
        schema
    })
)

server.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/operator/graphql'
    })
)

export const operator: HttpsFunction = https.onRequest(server)