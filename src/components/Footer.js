import React from "react";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { colors, monoFont } from "../theme/theme";
import { profile } from "../data/profile";

const links = [
  { label: "LinkedIn", href: profile.linkedin, icon: <LinkedInIcon fontSize="small" /> },
  { label: "GitHub", href: profile.github, icon: <GitHubIcon fontSize="small" /> },
  { label: "Email", href: `mailto:${profile.email}`, icon: <EmailOutlinedIcon fontSize="small" /> },
];

const Footer = () => (
  <Box component="footer" sx={{ py: 4, backgroundColor: colors.bg, borderTop: `1px solid ${colors.border}` }}>
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="body2" sx={{ color: colors.muted, fontFamily: monoFont, fontSize: 13 }}>
          © {new Date().getFullYear()} {profile.name} · Built with React & MUI
        </Typography>
        <Stack direction="row" spacing={0.5}>
          {links.map((l) => (
            <IconButton
              key={l.label}
              component="a"
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={l.label}
              sx={{ color: colors.muted, "&:hover": { color: colors.accent } }}
            >
              {l.icon}
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
