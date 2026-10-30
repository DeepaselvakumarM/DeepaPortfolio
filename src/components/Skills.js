import React from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import StorageIcon from "@mui/icons-material/Storage";
import { colors } from "../theme/theme";
import { skills } from "../data/profile";
import Section, { Reveal } from "./Section";

const icons = {
  Languages: <CodeIcon />,
  Frontend: <WebIcon />,
  Backend: <DnsOutlinedIcon />,
  "Cloud & Tools": <CloudOutlinedIcon />,
  Databases: <StorageIcon />,
};

const Skills = () => (
  <Section id="skills" index="02" eyebrow="skills" title="Tech Stack" alt>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
        gap: 2.5,
      }}
    >
      {skills.map((s, i) => (
        <Reveal key={s.group} delay={i * 80} sx={{ gridColumn: { md: s.group === "Cloud & Tools" ? "span 2" : "auto" } }}>
          <Box
            sx={{
              height: "100%",
              p: 3,
              borderRadius: 3,
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                borderColor: alpha(colors.accent, 0.6),
                boxShadow: `0 12px 40px ${alpha(colors.accent, 0.08)}`,
              },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  display: "grid",
                  placeItems: "center",
                  color: colors.accent,
                  backgroundColor: alpha(colors.accent, 0.1),
                }}
              >
                {icons[s.group]}
              </Box>
              <Typography variant="h6">{s.group}</Typography>
            </Stack>
            <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
              {s.items.map((item) => (
                <Chip key={item} label={item} />
              ))}
            </Stack>
          </Box>
        </Reveal>
      ))}
    </Box>
  </Section>
);

export default Skills;
