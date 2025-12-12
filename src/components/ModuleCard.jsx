import React from "react";
import { motion } from "framer-motion";

const ModuleCard = ({ title, icon, description, className }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`group bg-gray-100 rounded-2xl shadow-md p-6 text-center ${className} hover:shadow-xl transition duration-300`}
    >
      {/* Icon */}
      <div
        className={`text-5xl mb-4 flex justify-center text-gray-700 transition duration-300 ${className}`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-bold mb-2 ${className} transition duration-300`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ModuleCard;
