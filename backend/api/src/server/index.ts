import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import objectsRouter from './routes/objects'
import { PORT } from '@/lib/env'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Example API',
      version: '1.0.0',
    },
  },
  apis: ['**/index.ts'],
}

export const listenOnServer = () => {
  const app = express()
  app.use(express.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(
    cors({
      // origin: 'http://localhost:4000', //アクセス許可するオリジン
      // credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
      // optionsSuccessStatus: 200, //レスポンスstatusを200に設定
    }),
  )
  app.use(
    '/api/spec',
    swaggerUi.serve,
    swaggerUi.setup(swaggerJSDoc(swaggerOptions)),
  )
  app.use('/api/objects', objectsRouter)
  app.listen(PORT)
}
