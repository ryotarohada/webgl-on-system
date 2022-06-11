import mysql from 'mysql'
import { MYSQL_HOST, MYSQL_ROOT_PASSWORD, MYSQL_ROOT_USER } from '@/lib/env'
import { Axis } from '@/types'

export class DataBase {
  private connection: mysql.Connection

  constructor() {
    this.connection = mysql.createConnection({
      host: MYSQL_HOST,
      user: MYSQL_ROOT_USER,
      password: MYSQL_ROOT_PASSWORD,
    })
  }

  public getObjectList(): Promise<{ id: number; name: string }[]> {
    return new Promise((resolve) => {
      this.connection.query(`use objects`)
      this.connection.query('SELECT * FROM boxies;', (error, results) => {
        if (error) throw error
        resolve(results)
      })
    })
  }

  public addObject({
    name,
    scale_x,
    scale_y,
    scale_z,
    pos_x,
    pos_y,
    pos_z,
  }: {
    name: string
    scale_x: number
    scale_y: number
    scale_z: number
    pos_x: number
    pos_y: number
    pos_z: number
  }): Promise<{ status: number; message: string }> {
    return new Promise((resolve) => {
      this.connection.query(`use objects`)
      this.connection.query(
        `insert into boxies (name, scale_x, scale_y, scale_z, pos_x, pos_y, pos_z) values ("${name}", ${scale_x}, ${scale_y}, ${scale_z}, ${pos_x}, ${pos_y}, ${pos_z});`,
        (error) => {
          if (error) resolve({ status: 400, message: 'エラー' })
          resolve({ status: 200, message: 'ユーザーを追加しました' })
        },
      )
    })
  }

  public deleteObject({
    id,
  }: {
    id: number
  }): Promise<{ status: number; message: string }> {
    return new Promise((resolve) => {
      this.connection.query(`use objects`)
      this.connection.query(`delete from boxies where id = ${id};`, (error) => {
        if (error) resolve({ status: 400, message: 'エラー' })
        resolve({ status: 200, message: `ユーザーID : ${id} を削除しました` })
      })
    })
  }

  public updateObject({
    id,
    updateName,
  }: {
    id: number
    updateName: string
  }): Promise<{ status: number; message: string }> {
    return new Promise((resolve) => {
      this.connection.query(`use objects`)
      this.connection.query(
        `update boxies set name = "${updateName}" where id = ${id};`,
        (error) => {
          if (error) resolve({ status: 400, message: 'エラー' })
          resolve({ status: 200, message: `ユーザーを更新しました` })
        },
      )
    })
  }
}
