'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

interface Job {
  id: number;
  title: string;
  position: string;
  company: string;
  location: string;
  applyLink: string;
}

const jobTitles = [
  "Engineering", "Development", "Data Science", "Design", "Management", "DevOps", "Security",
  "Marketing", "Sales", "Human Resources", "Cloud", "AI & Machine Learning", "Business Analysis",
  "Quality Assurance", "Networking", "Technical Writing", "Product Management", "Game Development",
  "Blockchain", "Embedded Systems", "IT Support", "Database Administration", "SEO & Digital Marketing",
  "Research", "System Analysis", "E-commerce", "Growth Hacking", "VR & AR", "IoT", "Software Testing",
  "Consulting", "Big Data", "Automation", "ERP", "Business Intelligence", "Robotics", "SAP", "Cloud Security",
  "Penetration Testing", "AI Product Management", "Software Architecture", "Web Development", "Animation"
];

const jobPositions = [
  "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Scientist", "UI/UX Designer", "Project Manager", "DevOps Engineer", "Cybersecurity Analyst",
  "Marketing Specialist", "Sales Manager", "HR Coordinator", "Cloud Engineer", "AI Engineer",
  "Business Analyst", "QA Engineer", "Network Administrator", "Technical Writer", "Product Manager",
  "Game Developer", "Blockchain Developer", "Embedded Systems Engineer", "IT Support Specialist",
  "Database Administrator", "Security Engineer", "SEO Specialist", "Machine Learning Engineer",
  "Mobile App Developer", "Research Scientist", "Systems Analyst", "E-commerce Manager",
  "Growth Hacker", "VR Developer", "IoT Engineer", "Digital Marketing Expert", "Software Tester",
  "IT Consultant", "Big Data Engineer", "Automation Engineer", "ERP Consultant", "Business Intelligence Analyst",
  "Computer Vision Engineer", "Robotics Engineer", "SAP Consultant", "Cloud Security Engineer",
  "Penetration Tester", "AI Product Manager", "Software Architect", "Web Developer", "3D Animator"
];

const jobsData: Job[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: jobTitles[i % jobTitles.length],
  position: jobPositions[i % jobPositions.length],
  company: `Company ${i + 1}`,
  location: i % 2 === 0 ? 'Remote' : 'On-Site',
  applyLink: `https://example.com/apply-job${i + 1}`,
}));

export default function JobBoard() {
  const [jobs] = useState(jobsData);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">🚀 Internship & Job Board</h2>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search jobs..."
          className="border px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{ scale: 1.05 }}
            className="border rounded-lg p-5 shadow-xl bg-white flex flex-col items-start hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              <FaBriefcase className="text-blue-600 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">{job.title} - {job.position}</h3>
                <p className="text-gray-600">{job.company} - {job.location}</p>
              </div>
            </div>
            <a
              href={job.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto self-end bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Apply Now
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}