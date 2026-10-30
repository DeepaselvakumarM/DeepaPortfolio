import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import LaunchIcon from "@mui/icons-material/Launch";
import { colors, monoFont } from "../theme/theme";
import { certifications, education } from "../data/profile";
import Section, { Reveal } from "./Section";

const cardSx = {
  height: "100%",
  p: { xs: 3, md: 4 },
  borderRadius: 3,
  backgroundColor: colors.surface,
  border: `1px solid ${colors.border}`,
};

const IconTile = ({ children }) => (
  <Box
    sx={{
      width: 48,
      height: 48,
      flexShrink: 0,
      borderRadius: 2,
      display: "grid",
      placeItems: "center",
      color: colors.accent,
      backgroundColor: alpha(colors.accent, 0.1),
    }}
  >
    {children}
  </Box>
);

const Education = () => (
  <Section id="education" index="05" eyebrow="education" title="Education & Certifications">
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
      <Reveal>
        <Box sx={cardSx}>
          <Typography variant="overline" component="p" sx={{ color: colors.muted, mb: 2.5 }}>
            Degree
          </Typography>
          <Stack direction="row" spacing={2.5}>
            <IconTile>
              <SchoolOutlinedIcon />
            </IconTile>
            <Box>
              <Typography variant="h6">{education.degree}</Typography>
              <Typography sx={{ color: colors.muted, mt: 0.5 }}>{education.institution}</Typography>
              <Typography variant="body2" sx={{ color: colors.muted }}>
                {education.location}
              </Typography>
              <Typography sx={{ fontFamily: monoFont, fontSize: 13, color: colors.accent, mt: 1.5 }}>
                {education.period}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Reveal>

      <Reveal delay={100}>
        <Box sx={cardSx}>
          <Typography variant="overline" component="p" sx={{ color: colors.muted, mb: 2.5 }}>
            Certifications
          </Typography>
          <Stack spacing={3}>
            {certifications.map((c) => (
              <Stack key={c.title} direction="row" spacing={2.5}>
                <IconTile>
                  <WorkspacePremiumOutlinedIcon />
                </IconTile>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{c.title}</Typography>
                  <Typography sx={{ color: colors.muted, mt: 0.5 }}>{c.issuer}</Typography>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 1 }}>
                    <Typography sx={{ fontFamily: monoFont, fontSize: 13, color: colors.accent }}>{c.date}</Typography>
                    <Button
                      size="small"
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<LaunchIcon sx={{ fontSize: "16px !important" }} />}
                      sx={{ p: 0, minWidth: 0, color: colors.muted, "&:hover": { color: colors.accent, background: "none" } }}
                    >
                      View credential
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Reveal>
    </Box>
  </Section>
);

export default Education;
