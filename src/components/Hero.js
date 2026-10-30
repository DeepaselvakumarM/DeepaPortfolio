import React from "react";
import { Box, Button, Container, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DeepaProfile from "../assets/images/Deepa.jpg";
import { colors, gradient, monoFont } from "../theme/theme";
import { profile, RESUME_URL } from "../data/profile";
import { Reveal } from "./Section";

const socials = [
  { label: "LinkedIn", href: profile.linkedin, icon: <LinkedInIcon /> },
  { label: "GitHub", href: profile.github, icon: <GitHubIcon /> },
  { label: "Email", href: `mailto:${profile.email}`, icon: <EmailOutlinedIcon /> },
];

const Hero = () => (
  <Box
    id="home"
    component="header"
    sx={{
      position: "relative",
      overflow: "hidden",
      minHeight: { md: "min(100vh, 960px)" },
      display: "flex",
      alignItems: "center",
      pt: { xs: 14, md: 12 },
      pb: { xs: 10, md: 8 },
      backgroundColor: colors.bg,
      // Soft accent glows and a faint grid behind the content.
      backgroundImage: `
        radial-gradient(600px circle at 15% 20%, ${alpha(colors.accent, 0.12)}, transparent 60%),
        radial-gradient(500px circle at 85% 70%, ${alpha(colors.accent2, 0.14)}, transparent 60%),
        linear-gradient(${alpha(colors.border, 0.5)} 1px, transparent 1px),
        linear-gradient(90deg, ${alpha(colors.border, 0.5)} 1px, transparent 1px)`,
      backgroundSize: "auto, auto, 56px 56px, 56px 56px",
    }}
  >
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.35fr 1fr" },
          gap: { xs: 7, md: 8 },
          alignItems: "center",
        }}
      >
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <Reveal>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.5,
                mb: 3,
                borderRadius: 99,
                border: `1px solid ${alpha(colors.accent, 0.3)}`,
                backgroundColor: alpha(colors.accent, 0.06),
                fontFamily: monoFont,
                fontSize: 13,
                color: colors.accent,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: colors.accent,
                  boxShadow: `0 0 0 4px ${alpha(colors.accent, 0.2)}`,
                }}
              />
              Building AI-powered web apps
            </Box>
          </Reveal>

          <Reveal delay={100}>
            <Typography sx={{ color: colors.muted, fontSize: { xs: "1.1rem", md: "1.25rem" }, mb: 1 }}>
              Hi, I'm
            </Typography>
            <Typography variant="h1" sx={{ color: colors.text, fontSize: { xs: "2.75rem", sm: "3.5rem", md: "4.5rem" } }}>
              {profile.name}
            </Typography>
            <Typography
              variant="h2"
              component="p"
              sx={{
                mt: 1,
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
                background: gradient,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {profile.role}
            </Typography>
          </Reveal>

          <Reveal delay={200}>
            <Typography sx={{ color: colors.muted, fontSize: { xs: "1.05rem", md: "1.15rem" }, maxWidth: 560, mt: 3 }}>
              {profile.tagline}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.75} sx={{ mt: 2, color: colors.muted }}>
              <LocationOnOutlinedIcon fontSize="small" />
              <Typography variant="body2">{profile.location}</Typography>
            </Stack>
          </Reveal>

          <Reveal delay={300}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DescriptionOutlinedIcon />}
                sx={{ background: gradient, color: "#04201C", px: 3.5, py: 1.5 }}
              >
                View Resume
              </Button>
              <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                sx={{
                  color: colors.text,
                  px: 3.5,
                  py: 1.5,
                  "&:hover": { borderColor: colors.accent, backgroundColor: alpha(colors.accent, 0.06) },
                }}
              >
                See My Work
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
              {socials.map((s) => (
                <Tooltip key={s.label} title={s.label}>
                  <IconButton
                    component="a"
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    sx={{
                      color: colors.muted,
                      border: `1px solid ${colors.border}`,
                      transition: "all 0.2s ease",
                      "&:hover": { color: colors.accent, borderColor: colors.accent, transform: "translateY(-2px)" },
                    }}
                  >
                    {s.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Reveal>
        </Box>

        <Box sx={{ order: { xs: 1, md: 2 }, display: "flex", justifyContent: "center" }}>
          <Reveal delay={150}>
            <Box sx={{ position: "relative", width: { xs: 240, sm: 300, md: 380 } }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  transform: "translate(16px, 16px)",
                  borderRadius: "28px",
                  border: `2px solid ${alpha(colors.accent, 0.5)}`,
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "28px",
                  p: "3px",
                  background: gradient,
                  boxShadow: `0 30px 80px ${alpha(colors.accent2, 0.25)}`,
                }}
              >
                <Box
                  component="img"
                  src={DeepaProfile}
                  alt="Portrait of Deepa Selvakumar"
                  sx={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "4 / 5",
                    objectFit: "cover",
                    objectPosition: "50% 20%",
                    borderRadius: "25px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: -12, md: -36 },
                  bottom: 28,
                  px: 2,
                  py: 1.25,
                  borderRadius: 3,
                  backgroundColor: alpha(colors.surface, 0.92),
                  border: `1px solid ${colors.border}`,
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                }}
              >
                <Typography sx={{ fontFamily: monoFont, fontSize: 12, color: colors.muted }}>currently @</Typography>
                <Typography sx={{ fontWeight: 600, fontSize: 14, color: colors.text }}>VisionFirst Technologies</Typography>
              </Box>
            </Box>
          </Reveal>
        </Box>
      </Box>

      <Reveal delay={400}>
        <Stack
          direction="row"
          flexWrap="wrap"
          useFlexGap
          spacing={1.25}
          sx={{ mt: { xs: 8, md: 10 }, color: colors.muted, fontFamily: monoFont, fontSize: 13 }}
        >
          <Box component="span" sx={{ color: colors.accent }}>
            stack:
          </Box>
          {profile.heroStack.map((t, i) => (
            <Box component="span" key={t}>
              {t}
              {i < profile.heroStack.length - 1 && <Box component="span" sx={{ ml: 1.25, opacity: 0.4 }}>/</Box>}
            </Box>
          ))}
        </Stack>
      </Reveal>
    </Container>
  </Box>
);

export default Hero;
