/// <reference types="node" />

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly PORT: string
    readonly MYSQL_HOST: string
    readonly MYSQL_ROOT_USER: string
    readonly MYSQL_USER: string
    readonly MYSQL_ROOT_PASSWORD: string
    readonly MYSQL_PASSWORD: string
    readonly MYSQL_DATABASE: string
  }
}
