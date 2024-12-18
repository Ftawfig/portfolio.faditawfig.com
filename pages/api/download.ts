import type { NextApiRequest, NextApiResponse } from 'next';
import { dbService } from '../../db';
const PDFDocument = require('pdfkit');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const data = await dbService.getResume();

            // Create a new PDF document
            const doc = new PDFDocument();

            // Set response headers for PDF download
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=fadi_tawfig_resume.pdf');

            // Pipe the PDF document to the response
            doc.pipe(res);

            // Add content to the PDF
            doc.fontSize(18).text('Fadi Tawfig', { align: 'left' });
            doc.moveDown();

            addContactInfo(doc);

            // resume entries
            doc.fontSize(16).text('Experience', { align: 'left' });
            data.filter(e => e.entry_type === "resume").forEach((entry: any) => {
                doc.fontSize(14).text(entry.entry_title);
                doc.fontSize(12).text(entry.entry_description);
                doc.moveDown();
            });

            // education entries
            doc.fontSize(16).text('Experience', { align: 'left' });
            data.filter(e => e.entry_type === "education").forEach((entry: any) => {
                doc.fontSize(14).text(entry.entry_title);
                doc.fontSize(12).text(entry.entry_description);
                doc.moveDown();
            });


            doc.fontSize(12).text('Generated on: ' + new Date().toLocaleString() + ' by https://portfolio.faditawfig.com');

            // Finalize the PDF
            doc.end();

            res.status(200);
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

function addContactInfo(doc: any) {
    doc.fontSize(16).text('Contact Information', { align: 'left' });
    doc.fontSize(12).text('Email: faditawfig@gmail.com');
    doc.fontSize(12).text('Phone: 416-895-0558');
    doc.fontSize(12).text('LinkedIn: linkedin.com/in/fadi-tawfig/');
    doc.moveDown();
}