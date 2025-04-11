/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
// src/app/resume/page.tsx
import Navbar from '@/app/component/navbar';
import DeveloperVibeBackground from '@/app/component/StaticStarsBackground';
import React from 'react';

export default function ResumePage() {
    return (
        <div className="relative w-full min-h-screen bg-black">
            <Navbar />
            <DeveloperVibeBackground />
            <div className="absolute inset-0 z-10 overflow-y-auto pt-24 pb-12">
                <main className="container mx-auto max-w-4xl text-white px-4 md:px-8 lg:px-16">
                    <h1 className="text-4xl font-bold mb-8 text-center">// Samuel Wangai - Curriculum Vitae_</h1>

                    {/* Summary Section */}
                    <section className="mb-8 p-4 bg-gray-800 bg-opacity-70 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-3 text-cyan-400">// Summary $</h2>
                        <p className="text-gray-300">
                            Passionate Flutter Developer with expertise in cross-platform mobile app development, API integration, and UI/UX optimization. Skilled in delivering high-quality, scalable, and maintainable solutions. Adept at collaborating with cross-functional teams to achieve project goals and exceed client expectations. Strong problem-solving skills and a commitment to continuous learning and innovation.
                        </p>
                    </section>

                    {/* Technical Skills Section */}
                    <section className="mb-8 p-4 bg-gray-800 bg-opacity-70 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-3 text-cyan-400">// Technical_Skills $</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li><strong className="text-green-400">Mobile Development:</strong> Flutter (Dart), Java, React Native, Kotlin, Swift</li>
                            <li><strong className="text-green-400">Backend:</strong> Laravel (PHP), Node.js, Spring Boot (Java), Rust, Express.js</li>
                            <li><strong className="text-green-400">Databases:</strong> MySQL, PostgreSQL, Supabase, MongoDB, Firebase Realtime Database</li>
                            <li><strong className="text-green-400">Data Analytics:</strong> Power BI, Tableau, SPSS, Python (Pandas, NumPy, Matplotlib)</li>
                            <li><strong className="text-green-400">DevOps:</strong> Docker, Kubernetes, CI/CD Pipelines, Jenkins, GitHub Actions</li>
                            <li><strong className="text-green-400">Cloud Platforms:</strong> AWS, Google Cloud Platform (GCP), Microsoft Azure</li>
                            <li><strong className="text-green-400">Version Control:</strong> Git, GitHub, GitLab, Bitbucket</li>
                        </ul>
                    </section>

                    {/* Work Experience Section */}
                    <section className="mb-8 p-4 bg-gray-800 bg-opacity-70 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-3 text-cyan-400">// Work_Experience $</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-medium text-yellow-400">Giga Cypher Systems - Flutter Developer <span className="text-sm text-gray-400">[2022 - Present]</span></h3>
                            <ul className="list-disc list-inside text-gray-300 pl-4">
                                <li>Designed, developed, and maintained cross-platform applications for diverse industries, including e-commerce and healthcare.</li>
                                <li>Built interactive and high-performance UI components using Flutter widgets and animations.</li>
                                <li>Integrated RESTful APIs, Firebase services, and third-party libraries to enhance app functionality.</li>
                                <li>Debugged and optimized applications to improve performance and user experience.</li>
                                <li>Mentored junior developers and conducted code reviews to ensure code quality.</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-medium text-yellow-400">Amba Digital - Flutter & Laravel Developer <span className="text-sm text-gray-400">[2022 - 2023]</span></h3>
                            <ul className="list-disc list-inside text-gray-300 pl-4">
                                <li>Developed and maintained Flutter and Laravel applications for clients in the fintech and logistics sectors.</li>
                                <li>Collaborated with designers and backend developers to deliver seamless user experiences.</li>
                                <li>Ensured applications were optimized for performance, scalability, and security.</li>
                                <li>Debugged, tested, and improved existing codebases to meet client requirements.</li>
                                <li>Implemented payment gateway integrations and real-time data synchronization.</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-medium text-yellow-400">Safaricom PLC - QA Engineer <span className="text-sm text-gray-400">[2022 - Contract]</span></h3>
                            <ul className="list-disc list-inside text-gray-300 pl-4">
                                <li>Conducted manual and automated testing for mobile and web applications.</li>
                                <li>Designed and executed test cases to identify and resolve software defects.</li>
                                <li>Collaborated with development teams to ensure product quality and adherence to requirements.</li>
                                <li>Prepared detailed test reports and documentation for stakeholders.</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-medium text-yellow-400">Emaskani - .NET Developer <span className="text-sm text-gray-400">[2019 - 2020]</span></h3>
                            <ul className="list-disc list-inside text-gray-300 pl-4">
                                <li>Developed and maintained applications using C# and .NET frameworks for real estate management.</li>
                                <li>Optimized system performance and fixed bugs to enhance user satisfaction.</li>
                                <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
                                <li>Implemented database designs and queries for efficient data storage and retrieval.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mb-8 p-4 bg-gray-800 bg-opacity-70 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-3 text-cyan-400">// Education $</h2>
                        <p className="text-gray-300"><strong className="text-yellow-400">Kirinyaga University:</strong> Bachelor's Degree in Computer Science (2017-2021)</p>
                        <ul className="list-disc list-inside text-gray-300 pl-4">
                            <li>Specialized in Software Development and Data Analytics.</li>
                            <li>Completed a capstone project on "AI-Powered Chatbots for Customer Support."</li>
                            <li>Active member of the university's programming club and hackathon participant.</li>
                        </ul>
                    </section>

                    {/* Interests Section */}
                    <section className="p-4 bg-gray-800 bg-opacity-70 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-3 text-cyan-400">// Interests $</h2>
                        <p className="text-gray-300">
                            Flutter, AI, Machine Learning, Blockchain, Open-Source Projects, Hackathons, Programming Languages, UI/UX Design, Networking, Cloud Computing, Cybersecurity, Game Development, and IoT.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
}
