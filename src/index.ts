import { Knex, knex } from 'knex'
import { exit } from "./utils/exit"
import { showTables } from './utils/show-tables';
import { testGot } from './utils/test-got';

const connection: Knex = knex({
  client: "mysql",
  version: '5.7',
  connection: {
    host : '127.0.0.1',
    user : 'user',
    password : 'password',
    database : 'node-boots-db',
    port: 6606
  }
})

async function run(connection: Knex) {

  await showTables(connection)

  await testGot(200)

  exit()
}

run(connection)

