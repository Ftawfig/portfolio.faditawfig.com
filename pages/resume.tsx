import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import Hero from '../components/hero';
import Project from '../components/project';
import Head from 'next/head';

export default function Resume() {
    const searchParams = useSearchParams();

    const selectedId = searchParams.get('id');

    return (
        <>
            <Head>
                <title key="title">Fadi Tawfig's Online Resume | portfolio.fadtaw</title>
                <meta name="description" content="Fadi Tawfig's online Resume" />
            </Head>
            <Hero props={{ title: "Resume" }}>
                Click on an item to expand details.
            </Hero>
            <Container className="main">
                <h2 className="subheader">Work experience</h2>
                <ListGroup>
                    <Project props={{ id: "td-1", title: "Manager, Digital Marketing Analytics", category: "TD Bank", date: "Mar 2022 - Present" }}>
                        <ul>
                            <li>Lead 3 senior analysts as part of the digital marketing analytics team.</li>
                            <li>Responsible for building and maintaining core datasets for reporting on Digital marketing performance, which emable actionable insights for performance marketers as well as key executive reports.</li>
                            <li>Winner of the 2023 League of Excellence reward, recognizing the top 3% of performers at the bank.</li>
                        </ul>
                    </Project>
                    <Project props={{ id: "td-2", title: "Senior Analyst, Digital Marketing Analytics", category: "TD Bank", date: "Jan 2021 - Mar 2022" }}>
                        <ul>
                            <li>Lead 3 senior analysts as part of the digital marketing analytics team.</li>
                            <li>Responsible for building and maintaining core datasets for reporting on Digital marketing performance, which emable actionable insights for performance marketers as well as key executive reports.</li>
                            <li>Winner of the 2023 League of Excellence reward, recognizing the top 3% of performers at the bank.</li>
                        </ul>
                    </Project>
                    <Project props={{ id: "canadahelps-1", title: "Senior Data & Digital Marketing Analyst", category: "CanadaHelps", date: "Jul 2020 - Jan 2021" }}>
                        <ul>
                            <li>Author complex SQL queries including writing, maintaining and automating Transact-SQL  Stored Procedures. </li>
                            <li>Hands-on experience working with a large variety of structured and unstructured datasets  including application data, transactional data, geographical data and web analytics data. </li>
                            <li>Perform in-depth analysis of donor-base and charity clients including a cohort-based donor  lifetime value and retention analysis, and analysis surrounding various marketing campaigns  and promotional initiatives. </li>
                            <li>Work closely with donor and client data while observing strict compliance to data privacy and  security requirements. </li>
                            <li>Work with stakeholders to design and implement AB testing and multivariate testing for  rollout of new features. </li>
                        </ul>
                    </Project>
                    <Project props={{ id: "canadahelps-2", title: "Data & Digital Marketing Analyst", category: "CanadaHelps", date: "Jun 2018 - Jul 2020" }}>
                        <ul>
                            <li>Regularly perform complex query authoring in SQL for data analysis purposes </li>
                            <li>Own & manage Google Analytics & Google Tag Manager implementation including: views,  filters, conversions, event tracking etc. </li>
                            <li>Create and manage many dashboards in Tableau and Google Data Studio for various internal  teams. </li>
                            <li>Writing python scripts for task automation, data manipulation and data analysis </li>
                            <li>Own and manage many data ETL processes for keeping valuable charity and customer data up-to-date </li>
                        </ul>
                    </Project>
                    <Project props={{ id: "jumpfactor", title: "SEO / Digital Marketing Analyst", category: "Jumpfactor Marketing", date: "Apr 2017 - May 2018" }}>
                        <ul>
                            <li>Built and maintained a number of dashboards using Google Data Studio  to track performance against targets for leads & traffic. </li>
                            <li>Built an automated “lead tracker” spreadsheet for each client. This  automated system saved several hours of manual work each week  which was previously spent collating leads, as well as improved  reliability of data </li>
                            <li>Built and implemented custom lead attribution JavaScript cookie to  pass lead source to hidden field on forms which feeds into client lead  tracker </li>
                            <li>Audited & overhauled client analytics tracking, migrated client  websites to Google Tag Manager platform. </li>
                        </ul>
                    </Project>
                    <Project props={{ id: "outreach", title: "Account Manager - SEO", category: "Outreach Media", date: "Sep 2016 - Apr 2017" }}>
                        <ul>
                            <li>Worked on campaigns for many clients in the B2B space, specializing in  tech, engineering, and IT industries. </li>
                            <li>Performed rigorous keyword research and content mapping projects to  gather hundreds of keywords, group them into clusters based on  searcher intent and semantic relevance, and craft a site structure and  content to effectively target those keywords. </li>
                            <li>Managed Google Analytics for close to two dozen clients, including  setting up tracking tags or Google Tag Manager implementation,  custom filters & views, conversion tracking, and more. </li>
                            <li>Office spreadsheet expert; lead the development of complex client  delivery reporting dashboard in Google Sheets using multiple sheets  and files, and a number of custom scripts. </li>
                        </ul>
                    </Project>
                    <Project props={{ id: "cineplex", title: "Cast Member / Team Leader", category: "Cineplex Entertainment", date: "Nov 2011 - Sep 2016" }}>
                        <ul>
                            <li>Coordinated with theater management and team members to ensure  efficient operation of various cinema units. </li>
                        </ul>
                    </Project>
                </ListGroup>
                <h2 className="subheader">Education</h2>
                <ListGroup>
                    <Project props={{ id: "seneca", title: "Computer Programming", category: "Seneca Polytechnic", date: "2013 - 2016" }}>
                        Activities and societies: Free Software & Open Source Symposium (FSOSS)Activities and societies: Free Software & Open Source Symposium (FSOSS) <br /><br />
                        Studied computer programming at Seneca College of Arts & Technology at York University Campus. Graduated in April 2016.
                    </Project>
                </ListGroup>
            </Container>
        </>
    )
}