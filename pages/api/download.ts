import type { NextApiRequest, NextApiResponse } from 'next';
import { dbService } from '../../db';
const PDFDocument = require('pdfkit');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const data = await dbService.getResume();

            // get year from start date 
            data?.map(entry => {
                const startDate = entry.start_date;
                entry.startYear = startDate?.substr(startDate.length - 4);
            })

            // sort entries by start date
            data?.sort((a, b) => {
                return parseInt(b.startYear) - parseInt(a.startYear);
            });

            // Create a new PDF document
            const doc = new PDFDocument({ font: 'Helvetica' });
            //doc.registerFont('default', 'fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf', 'SpaceGrotesk');

            //doc.font('fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf');

            // Set response headers for PDF download
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=fadi_tawfig_resume.pdf');

            // Pipe the PDF document to the response
            doc.pipe(res);

            // Add content to the PDF
            addHeader(doc);

            // resume entries
            doc.fontSize(16).text('Experience', { align: 'center' }).moveDown();
            data.filter(e => e.entry_type === "resume").forEach((entry: any) => {
                addEntryText(doc, entry);
            });

            // education entries
            doc.fontSize(16).text('Education', { align: 'center' }).moveDown();
            data.filter(e => e.entry_type === "education").forEach((entry: any) => {
                addEntryText(doc, entry);
            });


            doc.fontSize(10).text('Generated on: ' + new Date().toLocaleString() + ' by https://portfolio.faditawfig.com');

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

function addEntryText(doc: any, entry: any) {
    doc.fontSize(14).text(entry.entry_title, { continued: true }).fontSize(10).text(entry.start_date + ' - ' + entry.end_date, { align: 'right' })
        .moveDown();

    const descriptionList = entry.entry_description.split('- ');
    doc.list(descriptionList, { align: 'left' });
    //doc.fontSize(12).text(entry.entry_description.replaceAll(/- /g, ''), { align: 'left' });
    doc.moveDown();
}

function addHeader(doc: any) {
    doc.fontSize(18).text('FADI TAWFIG', { align: 'left', continued: true })
        .fontSize(12).text('faditawfig@gmail.com', { align: 'right' })
    doc.fontSize(12).text('(416) 895-0558', { align: 'right' });
    doc.fontSize(12).text('https://portfolio.faditawfig.com', { align: 'right' });
    doc.fontSize(12).text('https://linkedin.com/in/fadi-tawfig/', { align: 'right' });
    doc.moveDown();
}