import { Router } from 'express'
import {
  addObjectController,
  deleteObjectController,
  updateObjectController,
  getObjectController,
} from './controller'

const router = Router()

/**
 * @swagger
 * tag:
 *   name: user
 *   description: ユーザー関連API
 */

/**
 * @swagger
 * /api/user/add:
 *   post:
 *     description: ユーザーを追加
 *     produces:
 *       - application/json
 */
router.post('/add', addObjectController)

/**
 * @swagger
 * /api/user/delete:
 *   post:
 *     description: ユーザーを削除
 *     produces:
 *       - application/json
 */
router.post('/delete', deleteObjectController)

/**
 * @swagger
 * /api/user/update:
 *   post:
 *     description: ユーザーを更新
 *     produces:
 *       - application/json
 */
router.post('/update', updateObjectController)

/**
 * @swagger
 * /api/user/list:
 *   get:
 *     description: 全ユーザーを配列に格納して返却
 *     produces:
 *       - application/json
 */
router.get('/list', getObjectController)

export default router
