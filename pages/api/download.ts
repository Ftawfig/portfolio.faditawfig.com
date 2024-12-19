import type { NextApiRequest, NextApiResponse } from 'next';
import { dbService } from '../../db';
import { link } from 'fs';
import path from 'path';

const PDFDocument = require('pdfkit');

const fontFile = 'Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf';
path.join(process.cwd(),"public","fonts",fontFile);
const headingFont = path.join(process.cwd(),"public","fonts",fontFile);

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


            // Set response headers for PDF download
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=fadi_tawfig_resume.pdf');

            // Pipe the PDF document to the response
            doc.pipe(res);

            // Add content to the PDF
            addHeader(doc);

            // resume entries
            data.filter(e => e.entry_type === "resume").forEach((entry: any) => {
                addEntryText(doc, entry);
            });

            // education entries
            doc.font(headingFont);
            doc.fontSize(16).text('Education', { align: 'center' }).moveDown();
            data.filter(e => e.entry_type === "education").forEach((entry: any) => {
                addEntryText(doc, entry);
            });


            doc.moveDown();
            doc.fontSize(8).text('Generated on: ' + new Date().toLocaleString() + ' on https://portfolio.faditawfig.com', { align: "left" });
            doc.image('public/logo.png', { align: 'right', width: 120, link: 'https://portfolio.faditawfig.com' });


            // Finalize the PDF
            await doc.end();

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
    doc.font(headingFont);

    doc.fontSize(14).text(entry.entry_title);
    doc.fontSize(12).text(entry.entry_category, { align: 'left', continued: true, underline: true })
        .text(entry.start_date + ' - ' + entry.end_date, { align: 'right' })
        .moveDown();

    doc.font('Helvetica');
    const descriptionList = entry.entry_description.split('- ');
    doc.list(descriptionList, { align: 'left' });
    //doc.fontSize(12).text(entry.entry_description.replaceAll(/- /g, ''), { align: 'left' });
    doc.moveDown();
}

function addHeader(doc: any) {
    doc.font(headingFont);
    doc.fontSize(18).text('FADI TAWFIG', { align: 'left', continued: true });
    doc.fontSize(12);
    doc.text('faditawfig@gmail.com', { align: 'right', link: 'mailto:faditawfig.com' });
    doc.text('(416) 895-0558', { align: 'right', link: 'tel:+14168950558' });
    doc.text('https://portfolio.faditawfig.com', { align: 'right', link: 'https://portfolio.faditawfig.com' });
    doc.text('https://linkedin.com/in/fadi-tawfig/', { align: 'right', link: 'https://linkedin.com/in/fadi-tawfig/' });
    doc.moveDown();
}