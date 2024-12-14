import type { NextApiRequest, NextApiResponse } from 'next';
import { dbService } from '../../db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Process a POST request
        console.log("Processing editEntry API request");

        const { userId, orderIndexes } = req.body;

        try {
            dbService.updateOrderIndexes(userId, orderIndexes);
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