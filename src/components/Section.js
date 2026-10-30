import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { colors, gradient, monoFont } from "../theme/theme";

// Fades children up into view the first time they scroll on screen.
export const Reveal = ({ children, delay = 0, sx }) => {
  const ref = useRef(null);
  // Visitors who prefer reduced motion see content immediately.
  const [visible, setVisible] = useState(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

const Section = ({ id, index, eyebrow, title, alt = false, children }) => (
  <Box
    component="section"
    id={id}
    sx={{
      py: { xs: 10, md: 14 },
      backgroundColor: alt ? colors.bgAlt : colors.bg,
      borderTop: `1px solid ${colors.border}`,
    }}
  >
    <Container maxWidth="lg">
      <Reveal>
        <Typography
          variant="overline"
          component="p"
          sx={{ color: colors.accent, fontFamily: monoFont, mb: 1 }}
        >
          {index} / {eyebrow}
        </Typography>
        <Typography variant="h3" component="h2" sx={{ fontSize: { xs: "2rem", md: "2.75rem" } }}>
          {title}
        </Typography>
        <Box sx={{ width: 56, height: 4, borderRadius: 2, background: gradient, mt: 2, mb: { xs: 5, md: 7 } }} />
      </Reveal>
      {children}
    </Container>
  </Box>
);

export default Section;
