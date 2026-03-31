'use client'
import { motion } from "framer-motion";
import { useState } from "react";

export default function LandingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-black/50 flex flex-col items-center justify-center">
      {/* Logo */}
      <motion.img
        src="/img/logo.png"
        alt="Company Logo"
        className="w-100 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

     {/* Title */}
      <motion.h1
        className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-green-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        ONE TO ONE
      </motion.h1>

      <motion.p
        className="text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        One Vision. One Goal
      </motion.p>

      
      {/* Coming Soon Animation */}
      <motion.div
        className="mt-10 text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
         Coming Soon
      </motion.div>
    </div>
  );
}
