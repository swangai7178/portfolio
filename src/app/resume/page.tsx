/*
 * Copyright (c) 2025
 * All rights reserved.
 */
// src/app/resume/page.tsx
import Navbar from '@/app/component/navbar';
import DeveloperVibeBackground from '@/app/component/StaticStarsBackground';
import React from 'react';

export default function ResumePage() {
    return (
        <div className="relative w-full min-h-screen bg-black">
            {/* Background and Overlay */}
            <DeveloperVibeBackground />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-900 opacity-90 z-[1]" />

            {/* Navbar */}
            <Navbar />

            {/* Scrollable Content Area */}
            <div className="absolute inset-0 z-10 overflow-y-auto pt-24 pb-12">
                <main className="container mx-auto max-w-4xl text-white px-4 md:px-8 lg:px-16">
                    <h1 className="text-5xl font-extrabold mb-10 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        Samuel Wangai - Curriculum Vitae
                    </h1>

                    {/* Summary Section */}
                    <section className="mb-10 p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg border border-gray-700">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-400 border-b border-cyan-700 pb-2">Summary</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            A highly passionate and results-driven **Flutter Developer** with a proven track record in crafting robust, scalable, and user-centric cross-platform mobile applications. My expertise spans across **API integration**, **UI/UX optimization**, and **full-stack development**, ensuring high-quality and maintainable solutions. I excel in collaborative environments, adept at working with cross-functional teams to exceed project goals and client expectations. My strong problem-solving acumen is complemented by a continuous commitment to learning and innovation in the ever-evolving tech landscape.
                        </p>
                    </section>

                    {/* Technical Skills Section */}
                    <section className="mb-10 p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg border border-gray-700">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-400 border-b border-cyan-700 pb-2">Technical Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-300">
                            <div>
                                <strong className="text-green-400 block mb-1">Mobile Development:</strong>
                                <span className="text-sm">Flutter (Dart), React Native, Kotlin, Swift</span>
                            </div>
                            <div>
                                <strong className="text-green-400 block mb-1">Backend:</strong>
                                <span className="text-sm">Laravel (PHP), Node.js, Spring Boot (Java), Rust, Express.js</span>
                            </div>
                            <div>
                                <strong className="text-green-400 block mb-1">Databases:</strong>
                                <span className="text-sm">MySQL, PostgreSQL, Supabase, MongoDB, Firebase Realtime Database</span>
                            </div>
                            <div>
                                <strong className="text-green-400 block mb-1">Data Analytics:</strong>
                                <span className="text-sm">Power BI, Tableau, SPSS, Python (Pandas, NumPy, Matplotlib)</span>
                            </div>
                            <div>
                                <strong className="text-green-400 block mb-1">DevOps:</strong>
                                <span className="text-sm">Docker, Kubernetes, CI/CD Pipelines, Jenkins, GitHub Actions</span>
                            </div>
                            <div>
                                <strong className="text-green-400 block mb-1">Cloud Platforms:</strong>
                                <span className="text-sm">AWS, Google Cloud Platform (GCP), Microsoft Azure</span>
                            </div>
                            <div>
                                <strong className="text-green-400 block mb-1">Version Control:</strong>
                                <span className="text-sm">Git, GitHub, GitLab, Bitbucket</span>
                            </div>
                        </div>
                    </section>

                    {/* Work Experience Section */}
                    <section className="mb-10 p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg border border-gray-700">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-400 border-b border-cyan-700 pb-2">Work Experience</h2>
                        {/* Giga Cypher Systems */}
                        <div className="mb-6 pb-4 border-b border-gray-700 last:border-b-0">
                            <h3 className="text-xl font-semibold text-yellow-400">Flutter Developer <span className="text-lg text-gray-400">- Giga Cypher Systems</span></h3>
                            <p className="text-sm text-gray-500 mb-3">Nairobi, Kenya | 2022 - Present</p>
                            <ul className="list-disc text-gray-300 pl-6 space-y-1">
                                <li>**Spearheaded** the design, development, and maintenance of high-performance cross-platform applications for diverse sectors including e-commerce and healthcare.</li>
                                <li>**Engineered** interactive and visually compelling UI components utilizing advanced Flutter widgets and animations.</li>
                                <li>**Seamlessly integrated** RESTful APIs, Firebase services, and critical third-party libraries to expand and enhance application functionality.</li>
                                <li>**Conducted extensive debugging** and performance optimization, resulting in significant improvements to application speed and responsiveness.</li>
                                <li>**Actively mentored** junior developers and performed comprehensive code reviews, fostering a culture of high code quality and best practices.</li>
                            </ul>
                        </div>
                        {/* Amba Digital */}
                        <div className="mb-6 pb-4 border-b border-gray-700 last:border-b-0">
                            <h3 className="text-xl font-semibold text-yellow-400">Flutter & Laravel Developer <span className="text-lg text-gray-400">- Amba Digital</span></h3>
                            <p className="text-sm text-gray-500 mb-3">Nairobi, Kenya | 2022 - 2023</p>
                            <ul className="list-disc text-gray-300 pl-6 space-y-1">
                                <li>**Developed and maintained** robust Flutter mobile applications and Laravel backend systems for clients in the fintech and logistics industries.</li>
                                <li>**Collaborated closely** with UI/UX designers and backend engineers to ensure a cohesive and seamless user experience.</li>
                                <li>**Optimized applications** for peak performance, scalability, and security, meeting stringent client requirements.</li>
                                <li>**Systematically debugged, tested, and refactored** existing codebases to enhance stability and introduce new features.</li>
                                <li>**Successfully implemented** secure payment gateway integrations and real-time data synchronization solutions.</li>
                            </ul>
                        </div>
                        {/* Safaricom PLC */}
                        <div className="mb-6 pb-4 border-b border-gray-700 last:border-b-0">
                            <h3 className="text-xl font-semibold text-yellow-400">QA Engineer <span className="text-lg text-gray-400">- Safaricom PLC</span></h3>
                            <p className="text-sm text-gray-500 mb-3">Nairobi, Kenya | 2022 (Contract)</p>
                            <ul className="list-disc text-gray-300 pl-6 space-y-1">
                                <li>**Executed comprehensive manual and automated testing** for critical mobile and web applications.</li>
                                <li>**Designed and implemented** effective test cases to proactively identify and resolve software defects.</li>
                                <li>**Collaborated cross-functionally** with development teams, ensuring superior product quality and strict adherence to requirements.</li>
                                <li>**Prepared detailed and insightful test reports** and documentation for key stakeholders, facilitating informed decision-making.</li>
                            </ul>
                        </div>
                        {/* Emaskani */}
                        <div className="mb-6 pb-4 border-b border-gray-700 last:border-b-0">
                            <h3 className="text-xl font-semibold text-yellow-400">.NET Developer <span className="text-lg text-gray-400">- Emaskani</span></h3>
                            <p className="text-sm text-gray-500 mb-3">Nairobi, Kenya | 2019 - 2020</p>
                            <ul className="list-disc text-gray-300 pl-6 space-y-1">
                                <li>**Developed and maintained** robust applications using C# and .NET frameworks specifically for real estate management.</li>
                                <li>**Optimized system performance** and efficiently resolved bugs, significantly enhancing overall user satisfaction.</li>
                                <li>**Collaborated effectively** with cross-functional teams to deliver high-quality, scalable software solutions.</li>
                                <li>**Designed and implemented** efficient database structures and queries for optimal data storage and retrieval.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mb-10 p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg border border-gray-700">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-400 border-b border-cyan-700 pb-2">Education</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-yellow-400">Bachelors Degree in Computer Science</h3>
                            <p className="text-lg text-gray-300">Kirinyaga University <span className="text-sm text-gray-500">| 2017 - 2021</span></p>
                            <ul className="list-disc text-gray-300 pl-6 space-y-1 mt-2">
                                <li>Specialized in Software Development and Data Analytics.</li>
                                <li>Completed a capstone project focused on AI-Powered Chatbots for Customer Support, demonstrating practical application of theoretical knowledge.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Interests Section */}
                    <section className="p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg border border-gray-700">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-400 border-b border-cyan-700 pb-2">Interests</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            My passion for technology drives my engagement with **Flutter**, **AI**, **Machine Learning**, **Blockchain**, and contributing to **Open-Source Projects**. I actively participate in **Hackathons** and explore various **Programming Languages**. Additionally, I have a keen interest in **UI/UX Design**, **Networking**, **Cloud Computing**, **Cybersecurity**, **Game Development**, and the ever-evolving world of **IoT**.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
}