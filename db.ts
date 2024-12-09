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
    insertResumeEntry,
    insertEducationEntry,
    getProjects,
    getResume,
    getEducation,
    getAllEntires
}

function insertProject(
    userId: number,
    entryTitle: string,
    entryCategory: string, 
    entryKey: string,
    entryDescription: string
): void {
    const query = {
        text: 'INSERT INTO entries(user_id, entry_title, entry_category, entry_type, entry_key, entry_description) VALUES($1, $2, $3, $4, $5, $6)',
        values: [userId, entryTitle, entryCategory, "project", entryKey, entryDescription],
    }

    getQueryResults(query);
}

function insertResumeEntry(
    userId: number,
    entryTitle: string,
    entryCategory: string,
    entryKey: string,
    entryDescription: string,
    entryStartDate: string,
    entryEndDate: string
): void {
    const query = {
        text: 'INSERT INTO entries(user_id, entry_title, entry_category, entry_type, entry_key, entry_description, start_date, end_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
        values: [userId, entryTitle, entryCategory, "resume", entryKey, entryDescription, entryStartDate, entryEndDate],
    }

    getQueryResults(query);
}

function insertEducationEntry(
    userId: number,
    entryTitle: string,
    entryCategory: string,
    entryKey: string,
    entryDescription: string,
    entryStartDate: string,
    entryEndDate: string
): void {
    const query = {
        text: 'INSERT INTO entries(user_id, entry_title, entry_category, entry_type, entry_key, entry_description, start_date, end_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
        values: [userId, entryTitle, entryCategory, "education", entryKey, entryDescription, entryStartDate, entryEndDate],
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

async function getResume() {
    const query = {
        text: 'SELECT * FROM entries WHERE entry_type IN ($1, $2)',
        values: ["resume", "education"]
    }

    return await getQueryResults(query);
}

async function getEducation() {
    const query = {
        text: 'SELECT * FROM entries WHERE entry_type = $1',
        values: ["education"],
    }

    return await getQueryResults(query);
}

async function getAllEntires() {
    const query = {
        text: 'SELECT * FROM entries',
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
