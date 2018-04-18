import { https, HttpsFunction } from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { schema } from './schema'

const setupGraphQLServer = () => {
    const PORT = Number(process.env.PORT) || 4000
    const GRAPHQL = '/graphql'
    const GRAPHIQL = '/graphiql'

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

    server.listen(PORT, () => {
        console.log(`GraphQL api on http://localhost:${PORT}${GRAPHQL}`)
        console.log(`GraphiQL interface on http://localhost:${PORT}${GRAPHIQL}`)
    })

    return server
}

export const operator: HttpsFunction = https.onRequest(setupGraphQLServer())