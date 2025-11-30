

import React, { useEffect, useState } from "react";
import { Box, Typography, Fade } from "@mui/material";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("footer");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="footer"
      sx={{
        py: 3,
        background: "linear-gradient(135deg, #1B3C53 0%, #234C6A 100%)",
        color: "white",
        textAlign: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #FFD700, transparent)",
        }
      }}
    >
      <Fade in={isVisible} timeout={1000}>
        <Typography variant="body2">
          © 2025 Deepa Selvakumar. All Rights Reserved.
        </Typography>
      </Fade>
    </Box>
  );
};

export default Footer;