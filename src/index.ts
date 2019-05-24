import * as express from 'express'
import * as cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { https, HttpsFunction } from 'firebase-functions'
import { schema } from './schema'

const app = express()

app.use(cors())

const server = new ApolloServer({
    schema: schema,
    introspection: true,
    playground: true
})

server.applyMiddleware({ app })

export const operator: HttpsFunction = https.onRequest(app)
