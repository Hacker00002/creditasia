import type { Application } from 'express'
import dotenv from 'dotenv'
import express from 'express'
import mongodb from './setting/mongodb'
import appRouter from './routes/router'
import appConfig from './config/app.config'
// dotenv
dotenv.config()
//mongodb function
mongodb()
// application configuration
const app: Application = express()
// server configuration
app.set('etag', 'weak')
//x-powered-by configuration
app.set('x-powered-by', false)
//env configuration
app.set('env', appConfig)
// express configuration
app.use(express.json())
//all router
app.use('/api/v1', appRouter)
// server configuration create
app.listen(process.env.API_PORT, (): void => {
  console.log(process.env.API_PORT)
})
