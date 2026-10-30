import React from "react";
import { Box, Typography } from "@mui/material";
import { colors, gradient } from "../theme/theme";
import { highlights, profile } from "../data/profile";
import Section, { Reveal } from "./Section";

const About = () => (
  <Section id="about" index="01" eyebrow="about" title="About Me">
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
        gap: { xs: 5, md: 8 },
        alignItems: "start",
      }}
    >
      <Reveal>
        {profile.summary.map((p) => (
          <Typography key={p} sx={{ color: colors.muted, fontSize: { xs: "1.05rem", md: "1.15rem" }, mb: 2.5 }}>
            {p}
          </Typography>
        ))}
        <Typography sx={{ color: colors.muted, fontSize: { xs: "1.05rem", md: "1.15rem" } }}>
          I care about clean, maintainable code and interfaces that feel effortless to use, and I enjoy owning a
          feature from the database schema all the way to the deployed UI.
        </Typography>
      </Reveal>

      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {highlights.map((h, i) => (
          <Reveal key={h.label} delay={i * 100}>
            <Box
              sx={{
                height: "100%",
                p: { xs: 2.5, md: 3 },
                borderRadius: 3,
                backgroundColor: colors.surface,
                border: `1px solid ${colors.border}`,
                transition: "border-color 0.2s ease, transform 0.2s ease",
                "&:hover": { borderColor: colors.accent, transform: "translateY(-4px)" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.5rem", md: "1.9rem" },
                  lineHeight: 1.2,
                  background: gradient,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {h.value}
              </Typography>
              <Typography variant="body2" sx={{ color: colors.muted, mt: 0.75 }}>
                {h.label}
              </Typography>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  </Section>
);

export default About;
