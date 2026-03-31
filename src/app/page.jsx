'use client'
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-500 flex flex-col items-center justify-center">

      {/* Logo */}
      <motion.img
        src="/img/logo.png"
        alt="Company Logo"
        className="w-100 mb-6"
        initial={{ opacity: 0, scale: 0.7, y: -20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0]
        }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8, ease: "easeOut" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Coming Soon */}
      <motion.div
        className="mt-10 text-2xl font-mono text-black tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Coming Soon
      </motion.div>

     

    </div>
  );
}