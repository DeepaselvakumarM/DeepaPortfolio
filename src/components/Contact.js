import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { colors, gradient } from "../theme/theme";
import { profile } from "../data/profile";
import Section, { Reveal } from "./Section";

const methods = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <EmailOutlinedIcon /> },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: <PhoneOutlinedIcon /> },
  { label: "LinkedIn", value: "in/deepas7113", href: profile.linkedin, icon: <LinkedInIcon /> },
  { label: "GitHub", value: "DeepaselvakumarM", href: profile.github, icon: <GitHubIcon /> },
];

const Contact = () => (
  <Section id="contact" index="06" eyebrow="contact" title="Let's Work Together" alt>
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr" }, gap: { xs: 5, md: 8 } }}>
      <Reveal>
        <Typography sx={{ color: colors.muted, fontSize: { xs: "1.05rem", md: "1.15rem" }, maxWidth: 480 }}>
          Have a project in mind, a role to discuss, or just want to say hello? My inbox is always open and I'll do my
          best to get back to you quickly.
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 3, color: colors.muted }}>
          <LocationOnOutlinedIcon fontSize="small" sx={{ color: colors.accent }} />
          <Typography>{profile.location}</Typography>
        </Stack>
        <Button
          variant="contained"
          size="large"
          href={`mailto:${profile.email}`}
          startIcon={<SendOutlinedIcon />}
          sx={{ mt: 4, background: gradient, color: "#04201C", px: 3.5, py: 1.5 }}
        >
          Say Hello
        </Button>
      </Reveal>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
        {methods.map((m, i) => (
          <Reveal key={m.label} delay={i * 80}>
            <Box
              component="a"
              href={m.href}
              target={m.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2.5,
                height: "100%",
                borderRadius: 3,
                textDecoration: "none",
                color: "inherit",
                backgroundColor: colors.surface,
                border: `1px solid ${colors.border}`,
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: colors.accent,
                  transform: "translateY(-3px)",
                  "& .contact-icon": { backgroundColor: colors.accent, color: "#04201C" },
                },
              }}
            >
              <Box
                className="contact-icon"
                sx={{
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  borderRadius: 2,
                  display: "grid",
                  placeItems: "center",
                  color: colors.accent,
                  backgroundColor: alpha(colors.accent, 0.1),
                  transition: "all 0.2s ease",
                }}
              >
                {m.icon}
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="body2" sx={{ color: colors.muted }}>
                  {m.label}
                </Typography>
                <Typography sx={{ fontWeight: 600, overflowWrap: "anywhere", lineHeight: 1.4 }}>{m.value}</Typography>
              </Box>
            </Box>
          </Reveal>
        ))}
      </Box>
    </Box>
  </Section>
);

export default Contact;
