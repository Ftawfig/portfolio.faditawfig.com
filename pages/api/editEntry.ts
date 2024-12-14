import type { NextApiRequest, NextApiResponse } from 'next';
import { dbService } from '../../db';

type ResponseData = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Process a POST request
        console.log("Processing editEntry API request");

        const { userId, entryTitle, entryCategory, entryKey, entryType, entryText, entryStartDate, entryEndDate } = req.body;
        console.log(userId);
        console.log(entryTitle);
        console.log(entryCategory);
        console.log(entryKey);
        console.log(entryType);
        console.log(entryText);
        console.log(entryStartDate);
        console.log(entryEndDate);

        try {
            if (entryType === 'project') {
                dbService.editProject(userId, entryTitle, entryCategory, entryKey, entryText);
            }
            else if (entryType === 'resume') {
                dbService.editResumeEntry(userId, entryTitle, entryCategory, entryKey, entryText, entryStartDate, entryEndDate );
            }
            else if (entryType === 'education') {
                dbService.editEducationEntry(userId, entryTitle, entryCategory, entryKey, entryText, entryStartDate, entryEndDate );
            }
            res.status(200).json({ message: 'Entry edits submitted successfully' });

        } catch (error) {
            console.error('An unexpected error happened:', error);
            res.status(500).json({ message: 'An unexpected error happened', error });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}