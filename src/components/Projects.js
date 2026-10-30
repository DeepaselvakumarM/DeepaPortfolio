import React from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import { colors, gradient, monoFont } from "../theme/theme";
import { projects } from "../data/profile";
import Section, { Reveal } from "./Section";

const ProjectCard = ({ project, featured }) => (
  <Box
    sx={{
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      p: { xs: 3, md: 4 },
      borderRadius: 3,
      backgroundColor: colors.surface,
      border: `1px solid ${colors.border}`,
      overflow: "hidden",
      transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: gradient,
        opacity: 0,
        transition: "opacity 0.25s ease",
      },
      "&:hover": {
        transform: "translateY(-6px)",
        borderColor: alpha(colors.accent, 0.5),
        boxShadow: `0 20px 50px ${alpha("#000", 0.35)}`,
        "&::before": { opacity: 1 },
      },
    }}
  >
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2.5 }}>
      <FolderOpenOutlinedIcon sx={{ color: colors.accent, fontSize: 36 }} />
      <Typography sx={{ fontFamily: monoFont, fontSize: 12, color: colors.muted }}>{project.role}</Typography>
    </Stack>

    <Typography variant="h5" sx={{ fontSize: featured ? { md: "1.6rem" } : undefined }}>
      {project.title}
    </Typography>
    <Typography sx={{ color: colors.accent2, fontWeight: 500, mt: 0.5, mb: 2 }}>{project.subtitle}</Typography>

    <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, mb: 3, flexGrow: 1 }}>
      {project.points.map((point) => (
        <Box
          component="li"
          key={point}
          sx={{
            position: "relative",
            pl: 2.5,
            mb: 1.25,
            color: colors.muted,
            fontSize: "0.95rem",
            lineHeight: 1.7,
            "&::before": { content: '"▹"', position: "absolute", left: 0, color: colors.accent },
          }}
        >
          {point}
        </Box>
      ))}
    </Box>

    <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1} sx={{ mb: project.liveUrl || project.githubUrl ? 3 : 0 }}>
      {project.stack.map((t) => (
        <Chip key={t} label={t} size="small" />
      ))}
    </Stack>

    {(project.liveUrl || project.githubUrl) && (
      <Stack direction="row" spacing={1.5}>
        {project.liveUrl && (
          <Button
            size="small"
            variant="contained"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<LaunchIcon fontSize="small" />}
          >
            Live Demo
          </Button>
        )}
        {project.githubUrl && (
          <Button
            size="small"
            variant="outlined"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon fontSize="small" />}
            sx={{ color: colors.text }}
          >
            Code
          </Button>
        )}
      </Stack>
    )}
  </Box>
);

const Projects = () => (
  <Section id="projects" index="04" eyebrow="projects" title="Things I've Built" alt>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 3,
      }}
    >
      {projects.map((p, i) => (
        <Reveal
          key={p.title}
          delay={i * 100}
          // The last card spans the full row when the count is odd, so the grid has no gap.
          sx={{ gridColumn: { md: projects.length % 2 === 1 && i === projects.length - 1 ? "1 / -1" : "auto" } }}
        >
          <ProjectCard project={p} featured={i === 0} />
        </Reveal>
      ))}
    </Box>
  </Section>
);

export default Projects;
