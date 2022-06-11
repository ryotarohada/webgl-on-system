import { Router } from 'express'
import {
  addUserController,
  deleteUserController,
  updateUserController,
  getUserController,
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
router.post('/add', addUserController)

/**
 * @swagger
 * /api/user/delete:
 *   post:
 *     description: ユーザーを削除
 *     produces:
 *       - application/json
 */
router.post('/delete', deleteUserController)

/**
 * @swagger
 * /api/user/update:
 *   post:
 *     description: ユーザーを更新
 *     produces:
 *       - application/json
 */
router.post('/update', updateUserController)

/**
 * @swagger
 * /api/user/list:
 *   get:
 *     description: 全ユーザーを配列に格納して返却
 *     produces:
 *       - application/json
 */
router.get('/list', getUserController)

export default router
