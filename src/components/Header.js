import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { colors, gradient, monoFont } from "../theme/theme";
import { navItems, RESUME_URL } from "../data/profile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? alpha(colors.bg, 0.8) : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: `1px solid ${scrolled ? colors.border : "transparent"}`,
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, justifyContent: "space-between" }}>
            <Box
              component="a"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              sx={{ display: "flex", alignItems: "center", gap: 1.5, textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  background: gradient,
                  display: "grid",
                  placeItems: "center",
                  fontFamily: monoFont,
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#04201C",
                }}
              >
                DS
              </Box>
              <Typography sx={{ fontWeight: 700, display: { xs: "none", sm: "block" } }}>
                Deepa Selvakumar
              </Typography>
            </Box>

            <Box component="nav" sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
              {navItems.map(({ id, label }) => (
                <Button
                  key={id}
                  onClick={() => goTo(id)}
                  sx={{
                    color: active === id ? colors.accent : colors.muted,
                    px: 1.75,
                    fontWeight: 500,
                    "&:hover": { color: colors.text, backgroundColor: "transparent" },
                  }}
                >
                  {label}
                </Button>
              ))}
              <Button
                variant="outlined"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DescriptionOutlinedIcon />}
                sx={{
                  ml: 1.5,
                  color: colors.accent,
                  borderColor: alpha(colors.accent, 0.5),
                  "&:hover": { borderColor: colors.accent, backgroundColor: alpha(colors.accent, 0.08) },
                }}
              >
                Resume
              </Button>
            </Box>

            <IconButton
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { md: "none" }, color: colors.text }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 280, backgroundColor: colors.bgAlt, borderLeft: `1px solid ${colors.border}` } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1.5 }}>
          <IconButton aria-label="Close menu" onClick={() => setDrawerOpen(false)} sx={{ color: colors.text }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 1.5 }}>
          {navItems.map(({ id, label }) => (
            <ListItemButton key={id} onClick={() => goTo(id)} sx={{ borderRadius: 2 }}>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontWeight: 600,
                  color: active === id ? colors.accent : colors.text,
                }}
              />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            variant="contained"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<DescriptionOutlinedIcon />}
          >
            View Resume
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
