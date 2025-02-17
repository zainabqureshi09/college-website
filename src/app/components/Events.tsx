"use client";
import { FaCalendarAlt, FaBasketballBall, FaBookOpen, FaTheaterMasks } from "react-icons/fa";
import { motion } from "framer-motion";

const events = [
  {
    icon: <FaCalendarAlt className="text-blue-600 text-4xl" />,
    title: "Annual Science Fair",
    description: "Showcase innovative projects by our talented students.",
  },
  {
    icon: <FaTheaterMasks className="text-blue-600 text-4xl" />,
    title: "Cultural Fest",
    description: "A vibrant celebration of different cultures with music, dance, and food.",
  },
  {
    icon: <FaBasketballBall className="text-blue-600 text-4xl" />,
    title: "Sports Week",
    description: "Competitive events including football, cricket, and basketball.",
  },
];

const facilities = [
  {
    icon: <FaBookOpen className="text-blue-600 text-4xl" />,
    title: "Library",
    description: "A well-stocked library with thousands of books for reference and research.",
  },
  {
    icon: <FaBasketballBall className="text-blue-600 text-4xl" />,
    title: "Sports Complex",
    description: "Indoor and outdoor sports facilities to promote a healthy lifestyle.",
  },
  {
    icon: <FaTheaterMasks className="text-blue-600 text-4xl" />,
    title: "Computer Lab",
    description: "A computer lab for students to enhance their skills in IT. ",
  },
];

export default function EventsFacilities() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Events & Facilities</h2>
        <p className="text-gray-600 mt-2">Engaging activities and top-notch infrastructure for students</p>

        {/* Events Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {events.map((event, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              {event.icon}
              <h3 className="text-xl font-semibold mt-4">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {facilities.map((facility, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              {facility.icon}
              <h3 className="text-xl font-semibold mt-4">{facility.title}</h3>
              <p className="text-gray-600 mt-2">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
