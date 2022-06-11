import { DataBase } from '@/server/models'
import { RequestHandler } from 'express'

export const addObjectController: RequestHandler = async (req, res) => {
  console.log(req.body)
  const db = new DataBase()
  const data = await db.addObject(req.body)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(data))
  res.end()
}
