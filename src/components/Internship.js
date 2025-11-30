
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
//   // Timeline,
//   // TimelineItem,
//   // TimelineSeparator,
//   // TimelineConnector,
//   // TimelineContent,
//   // TimelineDot,
//   Button
// } from "@mui/material";


// import WorkIcon from "@mui/icons-material/Work";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import CodeIcon from "@mui/icons-material/Code";
// import GroupIcon from "@mui/icons-material/Group";
// import LaunchIcon from "@mui/icons-material/Launch";
// import BusinessIcon from "@mui/icons-material/Business";

// const Internship = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
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
//         background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Section Header */}
//         <Fade in={isVisible} timeout={800}>
//           <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
//             <Typography
//               variant="h3"
//               component="h2"
//               sx={{
//                 fontWeight: "bold",
//                 background: "linear-gradient(45deg, #3D4E4F, #415548)",
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//                 fontSize: { xs: "2rem", md: "2.5rem" },
//                 mb: 2,
//               }}
//             >
//               Professional Experience
//             </Typography>
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "#6b7c7d",
//                 maxWidth: 600,
//                 mx: "auto",
//                 lineHeight: 1.6,
//                 fontSize: { xs: "1rem", md: "1.1rem" },
//               }}
//             >
//               Hands-on industry experience working with modern technologies 
//               and real-world development workflows.
//             </Typography>
//           </Box>
//         </Fade>

//         <Grid container spacing={4}>
//           {/* Main Internship Card */}
//           <Grid item xs={12} lg={8}>
//             <Slide in={isVisible} direction="right" timeout={800}>
//               <Card
//                 sx={{
//                   background: "linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)",
//                   border: "1px solid rgba(61, 78, 79, 0.1)",
//                   boxShadow: "0 8px 32px rgba(61, 78, 79, 0.1)",
//                   borderRadius: 3,
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     transform: "translateY(-4px)",
//                     boxShadow: "0 16px 48px rgba(61, 78, 79, 0.15)",
//                   },
//                 }}
//               >
//                 <CardContent sx={{ p: 4 }}>
//                   {/* Header Section */}
//                   <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3, gap: 3 }}>
//                     <Box
//                       sx={{
//                         p: 2,
//                         borderRadius: 3,
//                         background: "linear-gradient(135deg, #3D4E4F, #415548)",
//                         color: "white",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: 60,
//                         minHeight: 60,
//                       }}
//                     >
//                       <WorkIcon sx={{ fontSize: 32 }} />
//                     </Box>
                    
//                     <Box sx={{ flex: 1 }}>
//                       <Typography
//                         variant="h4"
//                         sx={{
//                           fontWeight: "bold",
//                           color: "#3D4E4F",
//                           mb: 1,
//                           fontSize: { xs: "1.5rem", md: "2rem" },
//                         }}
//                       >
//                         Full Stack Developer Intern
//                       </Typography>
                      
//                       <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 2, mb: 2 }}>
//                         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                           <BusinessIcon sx={{ color: "#415548", fontSize: 20 }} />
//                           <Link
//                             href="https://www.iviewsense.com/"
//                             target="_blank"
//                             rel="noopener"
//                             underline="hover"
//                             sx={{
//                               fontWeight: "600",
//                               color: "#415548",
//                               fontSize: "1.1rem",
//                             }}
//                           >
//                             IVIEWSENSE Pvt Ltd
//                           </Link>
//                         </Box>
                        
//                         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                           <CalendarTodayIcon sx={{ color: "#3D4E4F", fontSize: 18 }} />
//                           <Typography
//                             variant="body1"
//                             sx={{
//                               color: "#5a6c6d",
//                               fontWeight: "500",
//                             }}
//                           >
//                             January 2024 – June 2024 (6 months)
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </Box>
//                   </Box>

//                   {/* Skills Learned */}
//                   <Box sx={{ mb: 4 }}>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: "600",
//                         color: "#3D4E4F",
//                         mb: 2,
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 1,
//                       }}
//                     >
//                       <CodeIcon />
//                       Technologies & Skills
//                     </Typography>
//                     <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                       {["React.js", "Node.js", "Express", "REST APIs", "MySQL", "Git", "Material-UI", "JavaScript", "HTML/CSS", "Postman"].map((skill, index) => (
//                         <Zoom key={skill} in={isVisible} timeout={1000 + index * 100}>
//                           <Chip
//                             label={skill}
//                             variant="outlined"
//                             sx={{
//                               borderColor: "rgba(61, 78, 79, 0.3)",
//                               background: "rgba(61, 78, 79, 0.05)",
//                               color: "#3D4E4F",
//                               fontWeight: "500",
//                               fontSize: "0.9rem",
//                               height: 32,
//                               transition: "all 0.3s ease",
//                               "&:hover": {
//                                 background: "rgba(61, 78, 79, 0.1)",
//                                 borderColor: "#3D4E4F",
//                                 transform: "scale(1.05)",
//                               },
//                             }}
//                           />
//                         </Zoom>
//                       ))}
//                     </Box>
//                   </Box>

                  
//                   <Box sx={{ mb: 4 }}>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: "600",
//                         color: "#3D4E4F",
//                         mb: 2,
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 1,
//                       }}
//                     >
//                       <GroupIcon />
//                       Key Responsibilities
//                     </Typography>
//                     <Grid container spacing={2}>
//                       {responsibilities.map((responsibility, index) => (
//                         <Grid item xs={12} md={6} key={index}>
//                           <Fade in={isVisible} timeout={1200 + index * 200}>
//                             <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
//                               <Box
//                                 sx={{
//                                   width: 8,
//                                   height: 8,
//                                   borderRadius: "50%",
//                                   background: "linear-gradient(135deg, #3D4E4F, #415548)",
//                                   mt: 0.8,
//                                   flexShrink: 0,
//                                 }}
//                               />
//                               <Typography
//                                 variant="body2"
//                                 sx={{
//                                   color: "#6b7c7d",
//                                   lineHeight: 1.6,
//                                 }}
//                               >
//                                 {responsibility}
//                               </Typography>
//                             </Box>
//                           </Fade>
//                         </Grid>
//                       ))}
//                     </Grid>
//                   </Box>

                
//                   <Fade in={isVisible} timeout={1600}>
//                     <Box
//                       sx={{
//                         p: 3,
//                         background: "linear-gradient(135deg, rgba(61, 78, 79, 0.03), rgba(65, 85, 72, 0.03))",
//                         borderRadius: 2,
//                         border: "1px solid rgba(61, 78, 79, 0.1)",
//                       }}
//                     >
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           color: "#5a6c6d",
//                           lineHeight: 1.7,
//                           textAlign: "center",
//                           fontStyle: "italic",
//                         }}
//                       >
//                         "During this intensive internship, I gained hands-on experience in full-stack development, 
//                         working on real-world projects and collaborating with experienced developers to deliver 
//                         high-quality software solutions."
//                       </Typography>
//                     </Box>
//                   </Fade>
//                 </CardContent>
//               </Card>
//             </Slide>
//           </Grid>



//           {/* <Grid item xs={12} lg={4}>
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
             
//               <Slide in={isVisible} direction="left" timeout={1000}>
//                 <Card
//                   sx={{
//                     background: "linear-gradient(135deg, #3D4E4F, #415548)",
//                     color: "white",
//                     borderRadius: 3,
//                     boxShadow: "0 8px 32px rgba(61, 78, 79, 0.2)",
//                   }}
//                 >
//                   <CardContent sx={{ p: 3 }}>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         fontWeight: "bold",
//                         mb: 3,
//                         textAlign: "center",
//                         background: "linear-gradient(45deg, #FFFFFF, #E8F4F8)",
//                         backgroundClip: "text",
//                         WebkitBackgroundClip: "text",
//                         color: "transparent",
//                       }}
//                     >
//                       Key Achievements
//                     </Typography>
                    
//                     <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                       {achievements.map((achievement, index) => (
//                         <Fade key={index} in={isVisible} timeout={1400 + index * 200}>
//                           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                             <Box
//                               sx={{
//                                 width: 6,
//                                 height: 6,
//                                 borderRadius: "50%",
//                                 background: "#FFD700",
//                                 flexShrink: 0,
//                               }}
//                             />
//                             <Typography
//                               variant="body2"
//                               sx={{
//                                 color: "rgba(255, 255, 255, 0.9)",
//                                 lineHeight: 1.5,
//                               }}
//                             >
//                               {achievement}
//                             </Typography>
//                           </Box>
//                         </Fade>
//                       ))}
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Slide>

//               <Slide in={isVisible} direction="left" timeout={1200}>
//                 <Card
//                   sx={{
//                     background: "linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)",
//                     border: "1px solid rgba(61, 78, 79, 0.1)",
//                     borderRadius: 3,
//                     boxShadow: "0 8px 32px rgba(61, 78, 79, 0.1)",
//                   }}
//                 >
//                   <CardContent sx={{ p: 3 }}>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: "600",
//                         color: "#3D4E4F",
//                         mb: 3,
//                         textAlign: "center",
//                       }}
//                     >
//                       Internship Timeline
//                     </Typography>
                    
//                     <Timeline position="right">
//                       <TimelineItem>
//                         <TimelineSeparator>
//                           <TimelineDot sx={{ background: "#3D4E4F" }} />
//                           <TimelineConnector sx={{ background: "rgba(61, 78, 79, 0.3)" }} />
//                         </TimelineSeparator>
//                         <TimelineContent>
//                           <Typography variant="body2" sx={{ fontWeight: "600", color: "#3D4E4F" }}>
//                             Onboarding & Training
//                           </Typography>
//                           <Typography variant="caption" sx={{ color: "#6b7c7d" }}>
//                             January 2024
//                           </Typography>
//                         </TimelineContent>
//                       </TimelineItem>
                      
//                       <TimelineItem>
//                         <TimelineSeparator>
//                           <TimelineDot sx={{ background: "#415548" }} />
//                           <TimelineConnector sx={{ background: "rgba(61, 78, 79, 0.3)" }} />
//                         </TimelineSeparator>
//                         <TimelineContent>
//                           <Typography variant="body2" sx={{ fontWeight: "600", color: "#3D4E4F" }}>
//                             Project Development
//                           </Typography>
//                           <Typography variant="caption" sx={{ color: "#6b7c7d" }}>
//                             February - May 2024
//                           </Typography>
//                         </TimelineContent>
//                       </TimelineItem>
                      
//                       <TimelineItem>
//                         <TimelineSeparator>
//                           <TimelineDot sx={{ background: "#3D4E4F" }} />
//                         </TimelineSeparator>
//                         <TimelineContent>
//                           <Typography variant="body2" sx={{ fontWeight: "600", color: "#3D4E4F" }}>
//                             Final Deployment & Review
//                           </Typography>
//                           <Typography variant="caption" sx={{ color: "#6b7c7d" }}>
//                             June 2024
//                           </Typography>
//                         </TimelineContent>
//                       </TimelineItem>
//                     </Timeline>
//                   </CardContent>
//                 </Card>
//               </Slide>

             
//               <Zoom in={isVisible} timeout={1600}>
//                 <Button
//                   variant="outlined"
//                   startIcon={<LaunchIcon />}
//                   fullWidth
//                   sx={{
//                     borderColor: "#3D4E4F",
//                     color: "#3D4E4F",
//                     py: 1.5,
//                     borderRadius: 2,
//                     fontWeight: "600",
//                     textTransform: "none",
//                     fontSize: "1rem",
//                     "&:hover": {
//                       borderColor: "#415548",
//                       background: "rgba(61, 78, 79, 0.04)",
//                       transform: "translateY(-2px)",
//                     },
//                   }}
//                 >
//                   View Internship Certificate
//                 </Button>
//               </Zoom>
//             </Box>
//           </Grid> */}
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
  Button
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CodeIcon from "@mui/icons-material/Code";
import GroupIcon from "@mui/icons-material/Group";
import LaunchIcon from "@mui/icons-material/Launch";
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

  const responsibilities = [
    "Developed responsive UI components using React.js and Material-UI",
    "Built RESTful APIs with Node.js and Express framework",
    "Designed and implemented database schemas using MySQL",
    "Collaborated with senior developers on feature implementation",
    "Participated in code reviews and agile development processes",
    "Debugged and resolved production issues across full stack"
  ];

  const achievements = [
    "Reduced API response time by 30% through optimization",
    "Implemented 15+ reusable React components",
    "Successfully deployed 3 major features to production"
  ];

  return (
    <Box
      id="internship"
      sx={{
        py: { xs: 6, md: 10 },
        background: `linear-gradient(135deg, #f7fafc 0%, #eef4f8 50%, #ffffff 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        
        {/* HEADER */}
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
            
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                background: `linear-gradient(45deg, ${PRIMARY}, ${SECONDARY})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontSize: { xs: "2rem", md: "2.6rem" },
                letterSpacing: 0.5,
              }}
            >
              Professional Experience
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#5b6f7f",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
                fontSize: { xs: "1rem", md: "1.15rem" },
                mt: 1,
              }}
            >
              Practical hands-on internship with real-world projects, modern tools, and full-stack development experience.
            </Typography>

          </Box>
        </Fade>

        <Grid container spacing={4}>
          
          {/* MAIN CARD */}
          <Grid item xs={12} lg={8}>
            <Slide in={isVisible} direction="right" timeout={800}>
              <Card
                sx={{
                  borderRadius: 4,
                  background: "white",
                  border: `1px solid rgba(27, 60, 83, 0.15)`,
                  boxShadow: "0 10px 40px rgba(27, 60, 83, 0.15)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 16px 60px rgba(27, 60, 83, 0.20)",
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  
                  {/* TITLE ROW */}
                  <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
                        color: "white",
                        minWidth: 65,
                        minHeight: 65,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <WorkIcon sx={{ fontSize: 34 }} />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "700",
                          color: PRIMARY,
                          fontSize: { xs: "1.5rem", md: "2rem" },
                        }}
                      >
                        Full Stack Developer Intern
                      </Typography>

                      {/* COMPANY & DATE */}
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mt: 1 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <BusinessIcon sx={{ color: SECONDARY, fontSize: 22 }} />
                          <Link
                            href="https://www.iviewsense.com/"
                            target="_blank"
                            underline="hover"
                            sx={{ color: SECONDARY, fontWeight: 600 }}
                          >
                            IVIEWSENSE Pvt Ltd
                          </Link>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <CalendarTodayIcon sx={{ color: PRIMARY, fontSize: 20 }} />
                          <Typography variant="body1" sx={{ color: "#446174", fontWeight: 500 }}>
                            January 2024 – June 2024 (6 months)
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* SKILLS */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: PRIMARY,
                        mb: 2,
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                      }}
                    >
                      <CodeIcon /> Technologies & Skills
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {["React.js", "Node.js", "Express", "REST APIs", "MySQL", "Git", "Material-UI", "JavaScript", "HTML/CSS", "Postman"].map((skill, i) => (
                        <Zoom key={skill} in={isVisible} timeout={900 + i * 120}>
                          <Chip
                            label={skill}
                            sx={{
                              background: `rgba(27, 60, 83, 0.08)`,
                              border: `1px solid rgba(27, 60, 83, 0.3)`,
                              color: PRIMARY,
                              fontWeight: 500,
                              "&:hover": {
                                background: `rgba(27, 60, 83, 0.14)`,
                                borderColor: PRIMARY,
                                transform: "scale(1.07)",
                              },
                            }}
                          />
                        </Zoom>
                      ))}
                    </Box>
                  </Box>

                  {/* RESPONSIBILITIES */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: PRIMARY,
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <GroupIcon /> Key Responsibilities
                    </Typography>

                    <Grid container spacing={2}>
                      {responsibilities.map((item, i) => (
                        <Grid item xs={12} md={6} key={i}>
                          <Fade in={isVisible} timeout={1100 + i * 200}>
                            <Box sx={{ display: "flex", gap: 2 }}>
                              <Box
                                sx={{
                                  width: 8,
                                  height: 8,
                                  borderRadius: "50%",
                                  background: PRIMARY,
                                  flexShrink: 0,
                                  mt: 0.7,
                                }}
                              />
                              <Typography sx={{ color: "#4c5f6c", lineHeight: 1.6 }}>
                                {item}
                              </Typography>
                            </Box>
                          </Fade>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* QUOTE */}
                  <Fade in={isVisible} timeout={1500}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, rgba(27,60,83,0.08), rgba(35,76,106,0.08))`,
                        border: `1px solid rgba(35, 76, 106, 0.18)`,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#3e5563",
                          fontStyle: "italic",
                          textAlign: "center",
                          lineHeight: 1.7,
                        }}
                      >
                        “This internship strengthened my full-stack development abilities and helped me solve real-world engineering problems with confidence.”
                      </Typography>
                    </Box>
                  </Fade>
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
