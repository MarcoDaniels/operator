import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { graphqlExpress } from 'apollo-server-express'
import { schema } from './schema'

const setupGraphQLServer = () => {
    const PORT = Number(process.env.PORT) || 3000
    const server = express()

    server.use('/graphql', cors(), bodyParser.json(), graphqlExpress({schema}))
    server.listen(PORT, () => { console.log(`GraphQL is up and running`) })

    return server
}

export const operator = functions.https.onRequest(setupGraphQLServer())