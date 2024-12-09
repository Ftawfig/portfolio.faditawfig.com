import type { NextApiRequest, NextApiResponse } from 'next';
import { dbService } from '../../db';
import { Entry } from '../../types';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method === 'GET') {
        try {
            const data = await dbService.getResume();
            // shape the data to match the shape of the data in the client
            const resumeEntries : Entry[] = data.map((entry) => {
                return {
                    entryKey: entry.entry_key,
                    entryType: entry.entry_type,
                    title: entry.entry_title,
                    category: entry.entry_category,
                    description: entry.entry_description,
                    entryStartDate: entry.start_date,
                    entryEndDate: entry.end_date,
                }
            });

            console.log(resumeEntries);

            res.status(200).json({resumeEntries});
        } catch (error) {
            console.error('An unexpected error happened:', error);
            res.status(500).json({ message: 'An unexpected error happened', error });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}