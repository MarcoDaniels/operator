import { https, HttpsFunction } from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { schema } from './schema'
import { printSchema } from 'graphql'

const setupGraphQLServer = () => {
    const server = express()

    server.use(cors())

    server.options(
        '*',
        cors()
    )

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

    server.use(
        '/schema',
        (req, res) => {
            res.set('Content-Type', 'text/plain')
            res.send(printSchema(schema))
        }
    )

    return server
}

export const operator: HttpsFunction = https.onRequest(setupGraphQLServer())