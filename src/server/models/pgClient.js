const { Client } = require('pg');

const client = new Client({
  user: 'jyoti.sharma',
  database: 'feeds_db',
  password: 'newsfeeds',
})
client.connect()


export function get (tableName, next) {
  client.query(`SELECT * FROM ${tableName}`, null, (err, res) => {
    next(err, res);
  })
}


export function add (tableName, columns, values, next) {
  client.query(`INSERT INTO ${tableName}(${columns.join(', ')}) VALUES ($1, $2)`, values, (err, res) => {
    next(err, res);
  })
}


export function update (tableName, id, columns, values, next) {
  client.query(`UPDATE ${tableName} SET ${columns[0]}=$1, ${columns[1]}=$2 WHERE ID=${id}`, values, (err, res) => {
    next(err, res);
  })
}


export function remove (tableName, id, next) {
  client.query(`DELETE FROM ${tableName} WHERE id=($1)`, [id], (err, res) => {
    next(err, res);
  })
}
