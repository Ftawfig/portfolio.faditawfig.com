import { hostname } from "os"
import { use } from "react"

const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    hostname: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    connectionString: process.env.POSTGRES_URL,
})

export const dbService = {
    insertProject
}

function insertProject(userId : number, entryKey : string, entryDescription : string) {
    const query = {
        text: 'INSERT INTO entries(user_id, entry_type, entry_key, entry_description) VALUES($1, $2, $3, $4)',
        values: [userId, "project", entryKey, entryDescription],
    }

    console.log(query);

    pool.query(query, (err, res) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(res)
    })
}