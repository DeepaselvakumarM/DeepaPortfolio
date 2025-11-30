


// import React, { useEffect, useRef, useState } from "react";
// import { 
//   Box, 
//   Typography, 
//   Container, 
//   Button, 
//   Avatar, 
//   Card,
//   useTheme,
//   useMediaQuery,
//   Fade,
//   Slide,
//   Zoom,
//   Grow
// } from "@mui/material";
// import DeepaProfile from "../assets/images/Deepa.jpg"
// import DownloadIcon from "@mui/icons-material/Download";
// import PersonIcon from "@mui/icons-material/Person";

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <Box
//       id="about"
//       ref={sectionRef}
//       sx={{
//         py: { xs: 6, md: 10 },
//         background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%)",
//         position: "relative",
//         overflow: "hidden",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           height: "2px",
//           background: "linear-gradient(90deg, transparent, #3D4E4F, transparent)",
//         }
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Section Title */}
//         <Fade in={isVisible} timeout={800}>
//           <Typography
//             variant="h3"
//             component="h2"
//             sx={{
//               textAlign: "center",
//               mb: { xs: 4, md: 6 },
//               fontWeight: "bold",
//               background: "linear-gradient(45deg, #3D4E4F, #415548)",
//               backgroundClip: "text",
//               WebkitBackgroundClip: "text",
//               color: "transparent",
//               fontSize: { xs: "2rem", md: "2.5rem" },
//               position: "relative",
//               "&::after": {
//                 content: '""',
//                 position: "absolute",
//                 bottom: -8,
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 width: 60,
//                 height: 3,
//                 background: "linear-gradient(90deg, #3D4E4F, #415548)",
//                 borderRadius: 2,
//               }
//             }}
//           >
//             About Me
//           </Typography>
//         </Fade>

//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             gap: { xs: 4, md: 6 },
//             justifyContent: "center",
//           }}
//         >
//           {/* Profile Image with Enhanced Styling */}
//           <Slide in={isVisible} direction="right" timeout={800}>
//             <Box
//               sx={{
//                 position: "relative",
//                 "&::before": {
//                   content: '""',
//                   position: "absolute",
//                   top: -10,
//                   left: -10,
//                   right: 10,
//                   bottom: 10,
//                   background: "linear-gradient(135deg, #3D4E4F, #415548)",
//                   borderRadius: "50%",
//                   zIndex: 0,
//                   transition: "all 0.3s ease",
//                 },
//                 "&:hover::before": {
//                   top: -15,
//                   left: -15,
//                   right: 15,
//                   bottom: 15,
//                 }
//               }}
//             >
//               <Card
//                 sx={{
//                   p: 2,
//                   borderRadius: "50%",
//                   background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
//                   boxShadow: "0 10px 30px rgba(61, 78, 79, 0.2)",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                     boxShadow: "0 15px 40px rgba(61, 78, 79, 0.3)",
//                   }
//                 }}
//               >
//                 <Avatar
//                   src={DeepaProfile}
//                   alt="Deepa Selvakumar"
//                   sx={{
//                     width: { xs: 200, md: 240 },
//                     height: { xs: 200, md: 240 },
//                     border: "4px solid white",
//                     boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
//                     transition: "all 0.3s ease",
//                   }}
//                 />
//               </Card>
//             </Box>
//           </Slide>

//           {/* Text Content */}
//           <Box sx={{ maxWidth: 600, flex: 1 }}>
//             <Slide in={isVisible} direction="left" timeout={800}>
//               <Box>
//                 <Grow in={isVisible} timeout={1200}>
//                   <Card
//                     sx={{
//                       p: { xs: 3, md: 4 },
//                       background: "linear-gradient(135deg, #ffffff, #fafbfc)",
//                       boxShadow: "0 8px 32px rgba(61, 78, 79, 0.1)",
//                       borderRadius: 3,
//                       border: "1px solid rgba(61, 78, 79, 0.1)",
//                       mb: 3,
//                     }}
//                   >
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         mb: 2,
//                         fontWeight: "600",
//                         color: "#3D4E4F",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 1,
//                       }}
//                     >
//                       <PersonIcon sx={{ color: "#415548" }} />
//                       Full Stack Developer & IT Engineering Graduate
//                     </Typography>

//                     <Typography
//                       variant="body1"
//                       sx={{
//                         mb: 2,
//                         lineHeight: 1.8,
//                         color: "#5a6c6d",
//                         fontSize: { xs: "1rem", md: "1.1rem" },
//                       }}
//                     >
//                     I’m Deepa Selvakumar, an Information Technology graduate from the 2025 batch with a strong passion for building efficient, user-centric digital solutions. As a JavaScript Full-Stack Developer, I enjoy transforming ideas into real-world applications using modern technologies across both frontend and backend.
//                     </Typography>

//                     <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.8,
//                         color: "#5a6c6d",
//                         fontSize: { xs: "1rem", md: "1.1rem" },
//                       }}
//                     >
//                      I’m an eager and continuous learner who actively explores latest tools, frameworks, and industry best practices to stay aligned with evolving tech trends. I strongly believe in writing clean, maintainable, and scalable code while delivering seamless and impactful user experiences.
//                     </Typography>

//  <Typography
//                       variant="body1"
//                       sx={{
//                         lineHeight: 1.8,
//                         color: "#5a6c6d",
//                         fontSize: { xs: "1rem", md: "1.1rem" },
//                       }}
//                     >
//                      With a mindset focused on growth, curiosity, and problem-solving, I aim to contribute to innovative projects and build solutions that make a meaningful impact.
//                     </Typography>



//                   </Card>
//                 </Grow>

//                 {/* Enhanced Action Buttons */}
//                 <Fade in={isVisible} timeout={1600}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       gap: 2,
//                       flexWrap: "wrap",
//                       justifyContent: { xs: "center", md: "flex-start" },
//                     }}
//                   >
//                     <Zoom in={isVisible} timeout={1800}>
//                       <Button
//                         variant="contained"
//                         size="large"
//                         startIcon={<DownloadIcon />}
//                         onClick={() => window.open("/Deepa_Resume.pdf", "_blank")}
//                         sx={{
//                           background: "linear-gradient(135deg, #3D4E4F, #415548)",
//                           color: "white",
//                           px: 4,
//                           py: 1.5,
//                           borderRadius: 2,
//                           fontWeight: "600",
//                           textTransform: "none",
//                           fontSize: "1rem",
//                           boxShadow: "0 4px 15px rgba(61, 78, 79, 0.3)",
//                           transition: "all 0.3s ease",
//                           "&:hover": {
//                             transform: "translateY(-2px)",
//                             boxShadow: "0 8px 25px rgba(61, 78, 79, 0.4)",
//                             background: "linear-gradient(135deg, #415548, #3D4E4F)",
//                           },
//                         }}
//                       >
//                         View Resume
//                       </Button>
//                     </Zoom>

//                     <Zoom in={isVisible} timeout={2000}>
//                       <Button
//                         variant="outlined"
//                         size="large"
//                         onClick={() => {
//                           const element = document.getElementById("contact");
//                           if (element) {
//                             element.scrollIntoView({ behavior: "smooth" });
//                           }
//                         }}
//                         sx={{
//                           borderColor: "#3D4E4F",
//                           color: "#3D4E4F",
//                           px: 4,
//                           py: 1.5,
//                           borderRadius: 2,
//                           fontWeight: "600",
//                           textTransform: "none",
//                           fontSize: "1rem",
//                           transition: "all 0.3s ease",
//                           "&:hover": {
//                             backgroundColor: "rgba(61, 78, 79, 0.04)",
//                             borderColor: "#415548",
//                             transform: "translateY(-2px)",
//                             boxShadow: "0 4px 15px rgba(61, 78, 79, 0.2)",
//                           },
//                         }}
//                       >
//                         Get In Touch
//                       </Button>
//                     </Zoom>
//                   </Box>
//                 </Fade>
//               </Box>
//             </Slide>
//           </Box>
//         </Box>

//         {/* Decorative Elements */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "20%",
//             left: "5%",
//             width: 100,
//             height: 100,
//             background: "linear-gradient(135deg, rgba(61, 78, 79, 0.05), rgba(65, 85, 72, 0.05))",
//             borderRadius: "50%",
//             animation: "float 6s ease-in-out infinite",
//             display: { xs: "none", md: "block" },
//           }}
//         />
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: "10%",
//             right: "5%",
//             width: 80,
//             height: 80,
//             background: "linear-gradient(135deg, rgba(61, 78, 79, 0.03), rgba(65, 85, 72, 0.03))",
//             borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
//             animation: "float 8s ease-in-out infinite 1s",
//             display: { xs: "none", md: "block" },
//           }}
//         />
//       </Container>

//       {/* CSS Animation */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default About;



import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Avatar,
  Card,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Zoom,
  Grow
} from "@mui/material";

import DeepaProfile from "../assets/images/Deepa.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import PersonIcon from "@mui/icons-material/Person";

const primary = "#1B3C53";
const secondary = "#234C6A";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="about"
      ref={sectionRef}
      sx={{
        py: { xs: 6, md: 10 },
        background: `linear-gradient(135deg, ${primary}10 0%, ${secondary}10 50%, #ffffff 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">

        {/* Section Title */}
        <Fade in={isVisible} timeout={800}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: "center",
              mb: { xs: 4, md: 6 },
              fontWeight: "bold",
              background: `linear-gradient(90deg, ${primary}, ${secondary})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: { xs: "2rem", md: "2.5rem" },
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: 70,
                height: 4,
                background: `linear-gradient(90deg, ${primary}, ${secondary})`,
                borderRadius: 10,
              }
            }}
          >
            About Me
          </Typography>
        </Fade>

        {/* Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
            justifyContent: "center",
          }}
        >

          {/* Profile Image */}
          <Slide in={isVisible} direction="right" timeout={800}>
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -12,
                  left: -12,
                  right: 12,
                  bottom: 12,
                  background: `linear-gradient(135deg, ${primary}, ${secondary})`,
                  borderRadius: "50%",
                  zIndex: 0,
                  transition: "0.3s ease",
                  opacity: 0.9
                },
                "&:hover::before": {
                  top: -18,
                  left: -18,
                  right: 18,
                  bottom: 18,
                }
              }}
            >
              <Card
                sx={{
                  p: 2,
                  borderRadius: "50%",
                  background: "#ffffff",
                  boxShadow: `0 10px 30px ${primary}40`,
                  transition: "0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: `0 15px 50px ${secondary}40`,
                  }
                }}
              >
                <Avatar
                  src={DeepaProfile}
                  alt="Deepa Selvakumar"
                  sx={{
                    width: { xs: 200, md: 240 },
                    height: { xs: 200, md: 240 },
                    border: `4px solid ${primary}`,
                    boxShadow: `0 5px 15px ${primary}40`,
                  }}
                />
              </Card>
            </Box>
          </Slide>

          {/* Text Content */}
          <Box sx={{ maxWidth: 600, flex: 1 }}>
            <Slide in={isVisible} direction="left" timeout={800}>
              <Box>
                <Grow in={isVisible} timeout={1200}>
                  <Card
                    sx={{
                      p: { xs: 3, md: 4 },
                      background: "#ffffff",
                      boxShadow: `0 8px 32px ${primary}15`,
                      borderRadius: 3,
                      border: `1px solid ${primary}20`,
                      mb: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: "600",
                        color: primary,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <PersonIcon sx={{ color: secondary }} />
                      Full Stack Developer & IT Graduate
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        mb: 2,
                        lineHeight: 1.8,
                        color: `${secondary}cc`,
                        fontSize: { xs: "1rem", md: "1.1rem" }
                      }}
                    >
                      I’m Deepa Selvakumar, an Information Technology graduate from the 2025 batch with a strong passion for building efficient, user-centric digital solutions. As a JavaScript Full-Stack Developer, I transform ideas into real-world applications across both frontend and backend.
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.8,
                        color: `${secondary}cc`,
                        fontSize: { xs: "1rem", md: "1.1rem" }
                      }}
                    >
                      I actively explore modern tools and frameworks, follow industry best practices, and strongly believe in writing clean, maintainable, and scalable code.
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        mt: 2,
                        lineHeight: 1.8,
                        color: `${secondary}cc`,
                        fontSize: { xs: "1rem", md: "1.1rem" }
                      }}
                    >
                      With a mindset driven by curiosity and problem-solving, I aim to contribute to innovative projects that bring real impact.
                    </Typography>
                  </Card>
                </Grow>

                {/* Buttons */}
                <Fade in={isVisible} timeout={1600}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >

                    {/* Resume Button */}
                    <Zoom in={isVisible} timeout={1800}>
                      <Button
                        variant="contained"
                        size="large"
                        startIcon={<DownloadIcon />}
                        onClick={() => window.open("/Deepa_Resume.pdf", "_blank")}
                        sx={{
                          background: `linear-gradient(135deg, ${primary}, ${secondary})`,
                          color: "white",
                          px: 4,
                          py: 1.6,
                          borderRadius: 2,
                          fontWeight: "600",
                          boxShadow: `0 4px 15px ${primary}50`,
                          "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: `0 8px 25px ${secondary}60`,
                          },
                        }}
                      >
                        View Resume
                      </Button>
                    </Zoom>

                    {/* Contact Button */}
                    <Zoom in={isVisible} timeout={2000}>
                      <Button
                        variant="outlined"
                        size="large"
                        onClick={() =>
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        }
                        sx={{
                          borderColor: primary,
                          color: primary,
                          px: 4,
                          py: 1.6,
                          borderRadius: 2,
                          fontWeight: "600",
                          "&:hover": {
                            backgroundColor: `${primary}10`,
                            borderColor: secondary,
                            transform: "translateY(-2px)",
                            boxShadow: `0 4px 15px ${primary}25`,
                          },
                        }}
                      >
                        Get In Touch
                      </Button>
                    </Zoom>
                  </Box>
                </Fade>
              </Box>
            </Slide>
          </Box>
        </Box>

        {/* Decorative Floating Shapes */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "5%",
            width: 100,
            height: 100,
            background: `${primary}10`,
            borderRadius: "50%",
            animation: "float 6s infinite ease-in-out",
            display: { xs: "none", md: "block" },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: 85,
            height: 85,
            background: `${secondary}10`,
            borderRadius: "30% 70% 70% 30% / 40% 30% 70% 60%",
            animation: "float 8s infinite ease-in-out 1s",
            display: { xs: "none", md: "block" },
          }}
        />
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </Box>
  );
};

export default About;
