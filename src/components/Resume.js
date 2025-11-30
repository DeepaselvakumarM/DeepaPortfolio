import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function Resume() {
  return (
    <Box>
      <Typography variant="h4" mb={3} fontWeight="bold">
        Resume
      </Typography>

      {/* Download Button */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        sx={{ mb: 3 }}
        href="/resume.pdf"
        download
      >
        Download Resume (PDF)
      </Button>

      {/* Personal Summary */}
      <Typography variant="h5" mt={2}>Summary</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography mb={3}>
        Passionate Full Stack Developer specializing in React, Node.js,
        PostgreSQL, and Java. Loves building real-time applications and solving 
        complex technical problems.
      </Typography>

      {/* Skills */}
      <Typography variant="h5">Technical Skills</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography mb={3}>
        <strong>Frontend:</strong> HTML, CSS, JavaScript, React, Material UI <br />
        <strong>Backend:</strong> Node.js, Express.js, Java <br />
        <strong>Database:</strong> SQL, PostgreSQL, MongoDB <br />
        <strong>Tools:</strong> Git, VS Code, Postman
      </Typography>

      {/* Experience / Internship */}
      <Typography variant="h5">Internship</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography mb={3}>
        <strong>Web Developer Intern – ABC Company</strong> (2024) <br />
        Built components using React and integrated Node.js APIs. Worked with SQL databases.
      </Typography>

      {/* Projects */}
      <Typography variant="h5">Projects</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography mb={3}>
        <strong>Food Delivery App</strong> – MERN Stack <br />
        <strong>Library Management System</strong> – PERN Stack <br />
        <strong>E-Commerce Shopping App</strong> – React + Node.js
      </Typography>

      {/* Education */}
      <Typography variant="h5">Education</Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography>
        B.Tech – Information Technology (Final Year)
      </Typography>
    </Box>
  );
}

export default Resume;
