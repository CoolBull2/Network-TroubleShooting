"use client";

import React, { useState } from "react";
import axios from "axios";
import { AuroraBackground } from "../components/ui/aurora-background";
import { motion } from "framer-motion";

function Dashboard() {
  const [status, setStatus] = useState(null);
  const [report, setReport] = useState(null); // Store ping & packet loss details

  const runDiagnostics = async () => {
    setStatus("checking");
    try {
      const response = await axios.get("http://127.0.0.1:5000/network-health");
      setStatus(response.data.status);
      setReport(null); // Reset report when running diagnostics
    } catch (error) {
      setStatus("critical");
    }
  };

  const generateReport = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/network-health");
      setReport(response.data.reason); // Store ping & packet loss details
    } catch (error) {
      setReport("Error fetching report.");
    }
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Network Health Status
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          <div className="status-indicators" style={{ marginTop: "20px" }}>
            {status === "checking" && <p>Getting data </p>}
            {status === "healthy" && (
              <div className="status green">Healthy</div>
            )}
            {status === "warning" && (
              <div className="status yellow">Warning</div>
            )}
            {status === "critical" && (
              <div className="status red">Critical</div>
            )}
          </div>
        </div>
        <button
          onClick={runDiagnostics}
          className="bg-white dark:bg-white rounded-full w-fit text-black dark:text-black px-4 py-2"
        >
          Run Diagnostics
        </button>
        <button
          onClick={generateReport}
          className="bg-white dark:bg-white rounded-full w-fit text-black dark:text-black px-4 py-2"
        >
          Generate Report
        </button>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          {report}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

export default Dashboard;
