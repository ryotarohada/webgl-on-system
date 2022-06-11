import mysql from 'mysql'
import { MYSQL_HOST, MYSQL_ROOT_PASSWORD, MYSQL_ROOT_USER } from '@/lib/env'

export class DataBase {
  private connection: mysql.Connection

  constructor() {
    this.connection = mysql.createConnection({
      host: MYSQL_HOST,
      user: MYSQL_ROOT_USER,
      password: MYSQL_ROOT_PASSWORD,
    })
  }

  public getUserList(): Promise<{ id: number; name: string }[]> {
    return new Promise((resolve) => {
      this.connection.query(`use example_db`)
      this.connection.query('SELECT * FROM user;', (error, results) => {
        if (error) throw error
        resolve(results)
      })
    })
  }

  public addUser({
    name,
  }: {
    name: string
  }): Promise<{ status: number; message: string }> {
    return new Promise((resolve) => {
      this.connection.query(`use example_db`)
      this.connection.query(
        `insert into user (name) values ("${name}");`,
        (error) => {
          if (error) resolve({ status: 400, message: 'エラー' })
          resolve({ status: 200, message: 'ユーザーを追加しました' })
        },
      )
    })
  }

  public deleteUser({
    id,
  }: {
    id: number
  }): Promise<{ status: number; message: string }> {
    return new Promise((resolve) => {
      this.connection.query(`use example_db`)
      this.connection.query(`delete from user where id = ${id};`, (error) => {
        if (error) resolve({ status: 400, message: 'エラー' })
        resolve({ status: 200, message: `ユーザーID : ${id} を削除しました` })
      })
    })
  }

  public updateUser({
    id,
    updateName,
  }: {
    id: number
    updateName: string
  }): Promise<{ status: number; message: string }> {
    return new Promise((resolve) => {
      this.connection.query(`use example_db`)
      this.connection.query(
        `update user set name = "${updateName}" where id = ${id};`,
        (error) => {
          if (error) resolve({ status: 400, message: 'エラー' })
          resolve({ status: 200, message: `ユーザーを更新しました` })
        },
      )
    })
  }
}
