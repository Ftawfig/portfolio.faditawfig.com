import type { NextApiRequest, NextApiResponse } from 'next';
import { dbService } from '../../db';

type ResponseData = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Process a POST request
        const { userId, entryKey, entryType, entryText } = req.body;
        console.log(userId);
        console.log(entryKey);
        console.log(entryType);
        console.log(entryText);

        try {
            if (entryType === 'project') {
                dbService.insertProject(userId, entryKey, entryText);
            }
            res.status(200).json({ message: 'Entry submitted successfully' });

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