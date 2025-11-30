


// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useTheme,
//   useMediaQuery,
//   Fade,
//   Slide,
//   Zoom,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("about");
  
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   // Scroll effect for header
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Section observer for active navigation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     // Observe all sections
//     document.querySelectorAll("section").forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const navItems = ["About", "Skills", "Projects", "Internship", "Education", "Contact"];

//   const handleNavClick = (item) => {
//     const sectionId = item.toLowerCase();
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setMobileDrawerOpen(false);
//   };

//   const drawer = (
//     <Box
//       sx={{
//         width: 250,
//         height: "100%",
//         background: "linear-gradient(135deg, #3D4E4F 0%, #415548 100%)",
//         color: "white",
//       }}
//     >
//       <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
//         <IconButton onClick={() => setMobileDrawerOpen(false)} sx={{ color: "white" }}>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <List>
//         {navItems.map((item) => (
//           <ListItem
//             key={item}
//             onClick={() => handleNavClick(item)}
//             sx={{
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               "&:hover": {
//                 backgroundColor: "rgba(255, 255, 255, 0.1)",
//                 transform: "translateX(8px)",
//               },
//             }}
//           >
//             <ListItemText
//               primary={
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: activeSection === item.toLowerCase() ? "bold" : "normal",
//                     color: activeSection === item.toLowerCase() ? "#FFD700" : "white",
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   {item}
//                 </Typography>
//               }
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       {/* <Slide direction="down" in={!scrolled} timeout={500}> */}
//       <Slide direction="down" in={true} mountOnEnter unmountOnExit>

//         <AppBar
//           position="fixed"
//           sx={{
//             background: scrolled
//               ? "rgba(61, 78, 79, 0.95)"
//               : "linear-gradient(135deg, #3D4E4F 0%, #415548 100%)",
//             backdropFilter: scrolled ? "blur(10px)" : "none",
//             boxShadow: scrolled ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "none",
//             transition: "all 0.3s ease-in-out",
//             padding: { xs: "0.5rem 0", md: "0" },
//           }}
//         >
//           <Toolbar sx={{ justifyContent: "space-between" }}>
//             {/* Logo/Name with animation */}
//             <Fade in timeout={1000}>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   flexGrow: { xs: 1, md: 0 },
//                   fontWeight: "bold",
//                   background: "linear-gradient(45deg, #FFFFFF, #E8F4F8)",
//                   backgroundClip: "text",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                   fontSize: { xs: "1.2rem", md: "1.5rem" },
//                   cursor: "pointer",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                     transition: "transform 0.3s ease",
//                   },
//                 }}
//                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               >
//                 Deepa Selvakumar
//               </Typography>
//             </Fade>

//             {/* Desktop Navigation */}
//             {!isMobile && (
//               <Fade in timeout={1500}>
//                 <Box sx={{ display: "flex", gap: 1 }}>
//                   {navItems.map((item) => (
//                     <Button
//                       key={item}
//                       color="inherit"
//                       onClick={() => handleNavClick(item)}
//                       sx={{
//                         position: "relative",
//                         fontWeight: activeSection === item.toLowerCase() ? "bold" : "normal",
//                         color: activeSection === item.toLowerCase() ? "#FFD700" : "white",
//                         transition: "all 0.3s ease",
//                         "&::after": {
//                           content: '""',
//                           position: "absolute",
//                           bottom: 0,
//                           left: "50%",
//                           width: activeSection === item.toLowerCase() ? "100%" : "0%",
//                           height: "2px",
//                           backgroundColor: "#FFD700",
//                           transition: "all 0.3s ease",
//                           transform: "translateX(-50%)",
//                         },
//                         "&:hover": {
//                           color: "#FFD700",
//                           transform: "translateY(-2px)",
//                           "&::after": {
//                             width: "100%",
//                           },
//                         },
//                       }}
//                     >
//                       {item}
//                     </Button>
//                   ))}
//                 </Box>
//               </Fade>
//             )}

//             {/* Mobile Menu Button */}
//             {isMobile && (
//               <Zoom in timeout={500}>
//                 <IconButton
//                   color="inherit"
//                   onClick={() => setMobileDrawerOpen(true)}
//                   sx={{
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       transform: "rotate(90deg)",
//                       backgroundColor: "rgba(255, 255, 255, 0.1)",
//                     },
//                   }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </Zoom>
//             )}
//           </Toolbar>
//         </AppBar>
//       </Slide>

//       {/* Mobile Drawer */}
//       <Drawer
//         anchor="right"
//         open={mobileDrawerOpen}
//         onClose={() => setMobileDrawerOpen(false)}
//         sx={{
//           "& .MuiDrawer-paper": {
//             boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.2)",
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>

//       {/* Add some spacing below header */}
//       <Toolbar />
//     </>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Zoom,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const PRIMARY = "#1B3C53";
const SECONDARY = "#234C6A";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll("section").forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const navItems = ["About", "Skills", "Projects", "Internship", "Education", "Contact"];

  const handleNavClick = (item) => {
    const id = item.toLowerCase();
    const div = document.getElementById(id);
    if (div) div.scrollIntoView({ behavior: "smooth" });
    setMobileDrawerOpen(false);
  };

  // Mobile drawer content
  const drawer = (
    <Box
      sx={{
        width: 260,
        height: "100%",
        background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
        color: "white",
      }}
    >
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={() => setMobileDrawerOpen(false)} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            onClick={() => handleNavClick(item)}
            sx={{
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
                transform: "translateX(10px)",
              },
            }}
          >
            <ListItemText
              primary={
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: activeSection === item.toLowerCase() ? "bold" : "normal",
                    color: activeSection === item.toLowerCase() ? "#FFD700" : "white",
                    letterSpacing: activeSection === item.toLowerCase() ? "1px" : "0px",
                  }}
                >
                  {item}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Slide down on mount */}
      <Slide in direction="down">
        <AppBar
          position="fixed"
          sx={{
            background: scrolled
              ? `rgba(27, 60, 83, 0.9)`
              : `linear-gradient(120deg, ${PRIMARY}, ${SECONDARY})`,
            backdropFilter: scrolled ? "blur(10px)" : "none",
            transition: "0.35s ease",
            boxShadow: scrolled ? "0 8px 20px rgba(0,0,0,0.25)" : "none",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            
            {/* Portfolio Name */}
            <Fade in timeout={900}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: "1px",
                  background: "linear-gradient(45deg, #EAF6FF, #D8ECF6)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  "&:hover": { transform: "scale(1.05)" },
                  transition: "0.3s",
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Deepa Selvakumar
              </Typography>
            </Fade>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Fade in timeout={1200}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  {navItems.map((item) => (
                    <Button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      sx={{
                        color: activeSection === item.toLowerCase() ? "#FFD700" : "#EAF6FF",
                        fontWeight: activeSection === item.toLowerCase() ? 700 : 500,
                        transition: "0.3s",
                        position: "relative",
                        textTransform: "none",

                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: activeSection === item.toLowerCase() ? "100%" : "0%",
                          height: "2px",
                          background: "#FFD700",
                          bottom: 0,
                          left: 0,
                          borderRadius: 10,
                          transition: "0.3s",
                        },

                        "&:hover": {
                          color: "#FFD700",
                          "&::after": { width: "100%" },
                        },
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              </Fade>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <Zoom in timeout={500}>
                <IconButton
                  onClick={() => setMobileDrawerOpen(true)}
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      transform: "rotate(90deg)",
                    },
                    transition: "0.3s",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Zoom>
            )}
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileDrawerOpen} onClose={() => setMobileDrawerOpen(false)}>
        {drawer}
      </Drawer>

      {/* Push content down */}
      <Toolbar />
    </>
  );
};

export default Header;
