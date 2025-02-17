"use client";

import { motion } from "framer-motion";
import { Merienda } from "next/font/google";
import { FaFileAlt, FaClipboardList } from "react-icons/fa";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

const AdmissionPage = () => {
  return (
    <main style={{ backgroundColor: "#F9FAFB", minHeight: "100vh", padding: "4rem 1.5rem" }}>
      {/* Hero Section */}
      <section style={{ maxWidth: "64rem", margin: "0 auto", textAlign: "center" }}>
        <motion.h1
          style={{
            fontFamily: merienda.style.fontFamily,
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#1D4ED8",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Admission Process
        </motion.h1>
        <motion.p
          style={{ marginTop: "1rem", fontSize: "1.125rem", color: "#4B5563" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Follow these simple steps to complete your admission at Firoza Khatoon Women&apos;s College.
        </motion.p>
      </section>

      {/* Admission Steps Section */}
      <section style={{ maxWidth: "64rem", margin: "3rem auto 0" }}>
        <motion.div
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "2rem",
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaClipboardList color="#1D4ED8" size="2rem" />
            <h2
              style={{
                fontFamily: merienda.style.fontFamily,
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#1D4ED8",
              }}
            >
              Admission Steps
            </h2>
          </div>

          <ul style={{ marginTop: "1.5rem", fontSize: "1.125rem", color: "#374151", lineHeight: "1.75rem" }}>
            <li>✅ Fill out the admission form online or visit the campus.</li>
            <li>✅ Submit the required documents listed below.</li>
            <li>✅ Pay the admission processing fee.</li>
            <li>✅ Appear for the entrance interview (if applicable).</li>
            <li>✅ Receive confirmation and start your journey with us!</li>
          </ul>
        </motion.div>
      </section>

      {/* Required Documents Section */}
      <section style={{ maxWidth: "64rem", margin: "3rem auto 0" }}>
        <motion.div
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "2rem",
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <FaFileAlt color="#1D4ED8" size="2rem" />
            <h2
              style={{
                fontFamily: merienda.style.fontFamily,
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#1D4ED8",
              }}
            >
              Required Documents
            </h2>
          </div>

          <ul style={{ marginTop: "1.5rem", fontSize: "1.125rem", color: "#374151", lineHeight: "1.75rem" }}>
            <li>📄 Original & copies of **9th & 10th matriculation marksheet**.</li>
            <li>📄 Original **matriculation enrollment card** & 1 copy.</li>
            <li>📄 Original **matriculation admit card** & 1 copy.</li>
            <li>📜 **Original Character Certificate** from the last institution attended.</li>
            <li>🆔 **B-Form (Original)** & 1 copy.</li>
            <li>🆔 **Parents&apos; CNIC (Original)** & 1 copy each.</li>
            <li>📸 **Two passport-size photographs** (Sky blue background & white scarf).</li>
          </ul>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <motion.a
          href="/apply"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            backgroundColor: "#1D4ED8",
            color: "#FFFFFF",
            fontSize: "1.125rem",
            fontWeight: "600",
            borderRadius: "9999px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            textDecoration: "none",
            transition: "transform 0.5s",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          Apply Now
        </motion.a>
      </section>
    </main>
  );
};

export default AdmissionPage;
