import { DataBase } from '@/server/models'
import { RequestHandler } from 'express'

export const updateObjectController: RequestHandler = async (req, res) => {
  const db = new DataBase()
  const data = await db.updateObject(req.body)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(data))
  res.end()
}
