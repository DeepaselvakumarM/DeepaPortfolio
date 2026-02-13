// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Link,
//   Chip,
//   Box,
//   Grid,
//   Fade,
//   Slide,
//   Zoom,
//   useTheme,
//   useMediaQuery,
//   Button
// } from "@mui/material";

// import WorkIcon from "@mui/icons-material/Work";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import CodeIcon from "@mui/icons-material/Code";
// import GroupIcon from "@mui/icons-material/Group";
// import LaunchIcon from "@mui/icons-material/Launch";
// import BusinessIcon from "@mui/icons-material/Business";

// const PRIMARY = "#1B3C53";
// const SECONDARY = "#234C6A";

// const Internship = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.2 }
//     );

//     const section = document.getElementById("internship");
//     if (section) observer.observe(section);

//     return () => observer.disconnect();
//   }, []);

//   const responsibilities = [
//     "Developed responsive UI components using React.js and Material-UI",
//     "Built RESTful APIs with Node.js and Express framework",
//     "Designed and implemented database schemas using MySQL",
//     "Collaborated with senior developers on feature implementation",
//     "Participated in code reviews and agile development processes",
//     "Debugged and resolved production issues across full stack"
//   ];

//   const achievements = [
//     "Reduced API response time by 30% through optimization",
//     "Implemented 15+ reusable React components",
//     "Successfully deployed 3 major features to production"
//   ];

//   return (
//     <Box
//       id="internship"
//       sx={{
//         py: { xs: 6, md: 10 },
//         background: `linear-gradient(135deg, #f7fafc 0%, #eef4f8 50%, #ffffff 100%)`,
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <Container maxWidth="lg">
        
//         {/* HEADER */}
//         <Fade in={isVisible} timeout={800}>
//           <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
            
//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: "bold",
//                 background: `linear-gradient(45deg, ${PRIMARY}, ${SECONDARY})`,
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//                 fontSize: { xs: "2rem", md: "2.6rem" },
//                 letterSpacing: 0.5,
//               }}
//             >
//               Professional Experience
//             </Typography>

//             <Typography
//               variant="h6"
//               sx={{
//                 color: "#5b6f7f",
//                 maxWidth: 600,
//                 mx: "auto",
//                 lineHeight: 1.6,
//                 fontSize: { xs: "1rem", md: "1.15rem" },
//                 mt: 1,
//               }}
//             >
//               Practical hands-on internship with real-world projects, modern tools, and full-stack development experience.
//             </Typography>

//           </Box>
//         </Fade>

//         <Grid container spacing={4}>
          
//           {/* MAIN CARD */}
//           <Grid item xs={12} lg={8}>
//             <Slide in={isVisible} direction="right" timeout={800}>
//               <Card
//                 sx={{
//                   borderRadius: 4,
//                   background: "white",
//                   border: `1px solid rgba(27, 60, 83, 0.15)`,
//                   boxShadow: "0 10px 40px rgba(27, 60, 83, 0.15)",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     transform: "translateY(-6px)",
//                     boxShadow: "0 16px 60px rgba(27, 60, 83, 0.20)",
//                   },
//                 }}
//               >
//                 <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  
//                   {/* TITLE ROW */}
//                   <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
//                     <Box
//                       sx={{
//                         p: 2,
//                         borderRadius: 3,
//                         background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
//                         color: "white",
//                         minWidth: 65,
//                         minHeight: 65,
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <WorkIcon sx={{ fontSize: 34 }} />
//                     </Box>

//                     <Box sx={{ flex: 1 }}>
//                       <Typography
//                         variant="h4"
//                         sx={{
//                           fontWeight: "700",
//                           color: PRIMARY,
//                           fontSize: { xs: "1.5rem", md: "2rem" },
//                         }}
//                       >
//                         Full Stack Developer Intern
//                       </Typography>

//                       {/* COMPANY & DATE */}
//                       <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mt: 1 }}>
//                         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                           <BusinessIcon sx={{ color: SECONDARY, fontSize: 22 }} />
//                           <Link
//                             href="https://www.iviewsense.com/"
//                             target="_blank"
//                             underline="hover"
//                             sx={{ color: SECONDARY, fontWeight: 600 }}
//                           >
//                             IVIEWSENSE Pvt Ltd
//                           </Link>
//                         </Box>

//                         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                           <CalendarTodayIcon sx={{ color: PRIMARY, fontSize: 20 }} />
//                           <Typography variant="body1" sx={{ color: "#446174", fontWeight: 500 }}>
//                             January 2024 – June 2024 (6 months)
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </Box>
//                   </Box>

//                   {/* SKILLS */}
//                   <Box sx={{ mb: 4 }}>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: 600,
//                         color: PRIMARY,
//                         mb: 2,
//                         display: "flex",
//                         gap: 1,
//                         alignItems: "center",
//                       }}
//                     >
//                       <CodeIcon /> Technologies & Skills
//                     </Typography>

//                     <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                       {["React.js", "Node.js", "Express", "REST APIs", "MySQL", "Git", "Material-UI", "JavaScript", "HTML/CSS", "Postman"].map((skill, i) => (
//                         <Zoom key={skill} in={isVisible} timeout={900 + i * 120}>
//                           <Chip
//                             label={skill}
//                             sx={{
//                               background: `rgba(27, 60, 83, 0.08)`,
//                               border: `1px solid rgba(27, 60, 83, 0.3)`,
//                               color: PRIMARY,
//                               fontWeight: 500,
//                               "&:hover": {
//                                 background: `rgba(27, 60, 83, 0.14)`,
//                                 borderColor: PRIMARY,
//                                 transform: "scale(1.07)",
//                               },
//                             }}
//                           />
//                         </Zoom>
//                       ))}
//                     </Box>
//                   </Box>

//                   {/* RESPONSIBILITIES */}
//                   <Box sx={{ mb: 4 }}>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: 600,
//                         color: PRIMARY,
//                         mb: 2,
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 1,
//                       }}
//                     >
//                       <GroupIcon /> Key Responsibilities
//                     </Typography>

//                     <Grid container spacing={2}>
//                       {responsibilities.map((item, i) => (
//                         <Grid item xs={12} md={6} key={i}>
//                           <Fade in={isVisible} timeout={1100 + i * 200}>
//                             <Box sx={{ display: "flex", gap: 2 }}>
//                               <Box
//                                 sx={{
//                                   width: 8,
//                                   height: 8,
//                                   borderRadius: "50%",
//                                   background: PRIMARY,
//                                   flexShrink: 0,
//                                   mt: 0.7,
//                                 }}
//                               />
//                               <Typography sx={{ color: "#4c5f6c", lineHeight: 1.6 }}>
//                                 {item}
//                               </Typography>
//                             </Box>
//                           </Fade>
//                         </Grid>
//                       ))}
//                     </Grid>
//                   </Box>

//                   {/* QUOTE */}
//                   <Fade in={isVisible} timeout={1500}>
//                     <Box
//                       sx={{
//                         p: 3,
//                         borderRadius: 3,
//                         background: `linear-gradient(135deg, rgba(27,60,83,0.08), rgba(35,76,106,0.08))`,
//                         border: `1px solid rgba(35, 76, 106, 0.18)`,
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           color: "#3e5563",
//                           fontStyle: "italic",
//                           textAlign: "center",
//                           lineHeight: 1.7,
//                         }}
//                       >
//                         “This internship strengthened my full-stack development abilities and helped me solve real-world engineering problems with confidence.”
//                       </Typography>
//                     </Box>
//                   </Fade>
//                 </CardContent>
//               </Card>
//             </Slide>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Internship;

import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Link,
  Chip,
  Box,
  Grid,
  Fade,
  Slide,
  Zoom,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CodeIcon from "@mui/icons-material/Code";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";

const PRIMARY = "#1B3C53";
const SECONDARY = "#234C6A";

const Internship = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    const section = document.getElementById("internship");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const currentResponsibilities = [
    "Developing scalable full-stack applications using React and Node.js",
    "Designing optimized database schemas in MySQL",
    "Implementing secure REST APIs",
    "Collaborating with cross-functional teams",
    "Improving UI performance and responsiveness",
  ];

  const internshipResponsibilities = [
    "Developed responsive UI components using React.js and Material-UI",
    "Built RESTful APIs with Node.js and Express",
    "Designed and implemented database schemas using MySQL",
    "Collaborated with senior developers on feature implementation",
    "Debugged and resolved full-stack issues",
  ];

  return (
    <Box
      id="internship"
      sx={{
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(135deg, #f7fafc 0%, #eef4f8 50%, #ffffff 100%)",
      }}
    >
      <Container maxWidth="lg">
        
        {/* HEADER */}
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                background: `linear-gradient(45deg, ${PRIMARY}, ${SECONDARY})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Professional Experience
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>

          {/* ================= CURRENT JOB ================= */}
          <Grid item xs={12} lg={6}>
            <Slide in={isVisible} direction="left" timeout={800}>
              <Card
                sx={{
                  borderRadius: 4,
                  border: `1px solid rgba(27,60,83,0.15)`,
                  boxShadow: "0 10px 40px rgba(27,60,83,0.15)",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 16px 60px rgba(27,60,83,0.20)",
                  },
                  transition: "0.3s",
                }}
              >
                <CardContent sx={{ p: 4 }}>

                  <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <WorkIcon sx={{ color: PRIMARY, fontSize: 32 }} />
                    <Box>
                      <Typography variant="h5" fontWeight={700}>
                        Full Stack Developer
                      </Typography>

                      <Chip
                        label="Currently Working"
                        size="small"
                        sx={{
                          mt: 1,
                          backgroundColor: "#E6F4EA",
                          color: "#1E7E34",
                          fontWeight: 600,
                        }}
                      />

                      <Box mt={2}>
                        <BusinessIcon
                          sx={{ color: SECONDARY, fontSize: 18, mr: 1 }}
                        />
                        <Link
                          href="https://vfirstt.com/"
                          target="_blank"
                          underline="hover"
                          sx={{ fontWeight: 600 }}
                        >
                       VisionFirst Technologies Private Limited
                        </Link>
                      </Box>

                      <Box mt={1}>
                        <CalendarTodayIcon
                          sx={{ color: PRIMARY, fontSize: 18, mr: 1 }}
                        />
                        Jan 2026 – Present
                      </Box>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 2, color: PRIMARY }}
                  >
                    Responsibilities
                  </Typography>

                  {currentResponsibilities.map((item, i) => (
                    <Fade in={isVisible} timeout={1000 + i * 200} key={i}>
                      <Typography sx={{ mb: 1, color: "#4c5f6c" }}>
                        • {item}
                      </Typography>
                    </Fade>
                  ))}
                </CardContent>
              </Card>
            </Slide>
          </Grid>

          {/* ================= INTERNSHIP ================= */}
          <Grid item xs={12} lg={6}>
            <Slide in={isVisible} direction="right" timeout={800}>
              <Card
                sx={{
                  borderRadius: 4,
                  border: `1px solid rgba(27,60,83,0.15)`,
                  boxShadow: "0 10px 40px rgba(27,60,83,0.15)",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 16px 60px rgba(27,60,83,0.20)",
                  },
                  transition: "0.3s",
                }}
              >
                <CardContent sx={{ p: 4 }}>

                  <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <WorkIcon sx={{ color: PRIMARY, fontSize: 32 }} />
                    <Box>
                      <Typography variant="h5" fontWeight={700}>
                        Full Stack Developer Intern
                      </Typography>

                      <Box mt={2}>
                        <BusinessIcon
                          sx={{ color: SECONDARY, fontSize: 18, mr: 1 }}
                        />
                        <Link
                          href="https://www.iviewsense.com/"
                          target="_blank"
                          underline="hover"
                          sx={{ fontWeight: 600 }}
                        >
                          IVIEWSENSE Pvt Ltd
                        </Link>
                      </Box>

                      <Box mt={1}>
                        <CalendarTodayIcon
                          sx={{ color: PRIMARY, fontSize: 18, mr: 1 }}
                        />
                        January 2024 – June 2024
                      </Box>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 2, color: PRIMARY }}
                  >
                    Responsibilities
                  </Typography>

                  {internshipResponsibilities.map((item, i) => (
                    <Fade in={isVisible} timeout={1000 + i * 200} key={i}>
                      <Typography sx={{ mb: 1, color: "#4c5f6c" }}>
                        • {item}
                      </Typography>
                    </Fade>
                  ))}
                </CardContent>
              </Card>
            </Slide>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Internship;
