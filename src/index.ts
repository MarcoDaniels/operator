import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { https, HttpsFunction } from 'firebase-functions'
import { schema } from './schema'

const app = express()

app.use(cors())

const server = new ApolloServer({
    schema: schema
})

server.applyMiddleware({ app })

export const operator: HttpsFunction = https.onRequest(app)
