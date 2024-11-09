import { get } from "http"
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
    insertProject,
    getProjects
}

function insertProject(userId: number, entryKey: string, entryDescription: string): void {
    const query = {
        text: 'INSERT INTO entries(user_id, entry_type, entry_key, entry_description) VALUES($1, $2, $3, $4)',
        values: [userId, "project", entryKey, entryDescription],
    }

    getQueryResults(query);
}

async function getProjects() {
    const query = {
        text: 'SELECT * FROM entries WHERE entry_type = $1',
        values: ["project"],
    }

    return await getQueryResults(query);
}

async function getQueryResults(query): Promise<any> {
    console.log('Executing query: ', query);

    try {
        const res = await pool.query(query);
        return res.rows;
    } catch (error) {
        console.error('An unexpected error happened:', error);
        return error;
    }
}
