import { https, HttpsFunction } from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { schema } from './schema'
import { printSchema } from 'graphql'

let LOCAL = false
if (process.env.NODE_ENV !== undefined) {
    LOCAL = process.env.NODE_ENV === 'dev'
}

const PORT = Number(process.env.PORT) || 4000
const GRAPH = '/graphql'
const GRAPHQL = LOCAL ? GRAPH : '/operator/graphql'
const GRAPHIQL = '/graphiql'

const server = express()

server.use(
    GRAPH,
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

server.use(
    '/schema',
    (req, res) => {
        res.set('Content-Type', 'text/plain')
        res.send(printSchema(schema))
    }
)

if (LOCAL) {
    server.listen(PORT, () => {
        console.log(`GraphQL api on http://localhost:${PORT}${GRAPH}`)
        console.log(`GraphiQL interface on http://localhost:${PORT}${GRAPHIQL}`)
    })
}

export const operator: HttpsFunction = https.onRequest(server)