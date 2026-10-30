import React from "react";
import { Box, Chip, Link, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { colors, monoFont } from "../theme/theme";
import { experience } from "../data/profile";
import Section, { Reveal } from "./Section";

const Experience = () => (
  <Section id="experience" index="03" eyebrow="experience" title="Where I've Worked">
    <Box sx={{ position: "relative", pl: { xs: 3, md: 5 } }}>
      {/* Timeline rail */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: 5, md: 11 },
          top: 8,
          bottom: 8,
          width: 2,
          background: `linear-gradient(${colors.accent}, ${alpha(colors.accent2, 0.1)})`,
        }}
      />

      {experience.map((job) => (
        <Reveal key={job.company + job.role} sx={{ position: "relative", mb: 4 }}>
          <Box
            sx={{
              position: "absolute",
              left: { xs: -24, md: -36 },
              top: 8,
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: colors.bg,
              border: `3px solid ${colors.accent}`,
              boxShadow: job.current ? `0 0 0 6px ${alpha(colors.accent, 0.15)}` : "none",
            }}
          />
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "flex-start" }}
              spacing={1}
            >
              <Box>
                <Typography variant="h5">{job.role}</Typography>
                <Link
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ color: colors.accent, fontWeight: 600, fontSize: "1.05rem" }}
                >
                  {job.company}
                </Link>
              </Box>
              <Box sx={{ textAlign: { sm: "right" } }}>
                <Typography sx={{ fontFamily: monoFont, fontSize: 14, color: colors.text }}>{job.period}</Typography>
                <Typography variant="body2" sx={{ color: colors.muted }}>
                  {job.location}
                </Typography>
              </Box>
            </Stack>

            <Box component="ul" sx={{ listStyle: "none", p: 0, mt: 3, mb: 3 }}>
              {job.points.map((point) => (
                <Box
                  component="li"
                  key={point}
                  sx={{
                    position: "relative",
                    pl: 3,
                    mb: 1.5,
                    color: colors.muted,
                    lineHeight: 1.75,
                    "&::before": {
                      content: '"▹"',
                      position: "absolute",
                      left: 0,
                      color: colors.accent,
                    },
                  }}
                >
                  {point}
                </Box>
              ))}
            </Box>

            <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
              {job.stack.map((t) => (
                <Chip key={t} label={t} size="small" />
              ))}
            </Stack>
          </Box>
        </Reveal>
      ))}
    </Box>
  </Section>
);

export default Experience;
