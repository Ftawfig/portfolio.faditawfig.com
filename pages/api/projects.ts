import type { NextApiRequest, NextApiResponse } from 'next';
import { dbService } from '../../db';

type ResponseData = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method === 'GET') {
        try {
            const projects = await dbService.getProjects();
            console.log(projects);
            res.status(200).json({projects});
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