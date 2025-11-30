
// import React, { useEffect, useState } from "react";
// import { 
//   Box, 
//   Chip, 
//   Container, 
//   Typography, 
//   Divider,
//   Card,
//   CardContent,
//   Grid,
//   Fade,
//   Slide,
//   Zoom,
//   useTheme,
//   useMediaQuery
// } from "@mui/material";
// import CodeIcon from "@mui/icons-material/Code";
// import BuildIcon from "@mui/icons-material/Build";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// const technicalSkills = [
//   "HTML", "CSS", "JavaScript", "React js", "Node js", "Type Script", "SQL", "Java", "Spring Boot", "Python","Full Stack"
// ];

// const tools = [
//   "VS Code", "Eclipse", "IntelliJ IDEA", "SQL Workbench", "GitHub","Postman"
// ];

// const interests = [
//   "Artificial Intelligence", "Development", "DevOps" ,"Latest Technologies"
// ];

// const Skills = () => {
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

//     const section = document.getElementById("skills");
//     if (section) observer.observe(section);

//     return () => observer.disconnect();
//   }, []);

//   const SkillCategory = ({ title, skills, icon, color, delay }) => (
//     <Slide in={isVisible} direction="up" timeout={800 + delay}>
//       <Card
//         sx={{
//           height: "100%",
//           background: "linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)",
//           border: "1px solid rgba(61, 78, 79, 0.1)",
//           boxShadow: "0 8px 32px rgba(61, 78, 79, 0.1)",
//           borderRadius: 3,
//           transition: "all 0.3s ease",
//           "&:hover": {
//             transform: "translateY(-8px)",
//             boxShadow: "0 16px 48px rgba(61, 78, 79, 0.15)",
//           },
//         }}
//       >
//         <CardContent sx={{ p: 4 }}>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               mb: 3,
//               gap: 2,
//             }}
//           >
//             <Box
//               sx={{
//                 p: 1.5,
//                 borderRadius: "50%",
//                 background: `linear-gradient(135deg, ${color}20, ${color}40)`,
//                 color: color,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               {icon}
//             </Box>
//             <Typography
//               variant="h5"
//               sx={{
//                 fontWeight: "600",
//                 background: `linear-gradient(45deg, ${color}, ${color}CC)`,
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//               }}
//             >
//               {title}
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               flexWrap: "wrap",
//               gap: 1.5,
//             }}
//           >
//             {skills.map((skill, index) => (
//               <Zoom
//                 key={skill}
//                 in={isVisible}
//                 timeout={1000 + index * 100}
//                 style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
//               >
//                 <Chip
//                   label={skill}
//                   variant="outlined"
//                   sx={{
//                     borderColor: `${color}40`,
//                     background: `${color}08`,
//                     color: color,
//                     fontWeight: "500",
//                     fontSize: "0.9rem",
//                     height: 32,
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       background: `${color}15`,
//                       borderColor: color,
//                       transform: "scale(1.05)",
//                       boxShadow: `0 4px 12px ${color}20`,
//                     },
//                     "& .MuiChip-label": {
//                       px: 1.5,
//                     },
//                   }}
//                 />
//               </Zoom>
//             ))}
//           </Box>
//         </CardContent>
//       </Card>
//     </Slide>
//   );

//   return (
//     <Box
//       id="skills"
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
//               Skills & Expertise
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
//               A comprehensive overview of my technical skills, tools I work with, 
//               and areas that spark my curiosity and drive for innovation.
//             </Typography>
//           </Box>
//         </Fade>

//         {/* Skills Grid */}
//         <Grid container spacing={3}>
//           {/* Technical Skills */}
//           <Grid item xs={12} md={4}>
//             <SkillCategory
//               title="Technical Skills"
//               skills={technicalSkills}
//               icon={<CodeIcon />}
//               color="#3D4E4F"
//               delay={0}
//             />
//           </Grid>

//           {/* Tools & Technologies */}
//           <Grid item xs={12} md={4}>
//             <SkillCategory
//               title="Tools & Technologies"
//               skills={tools}
//               icon={<BuildIcon />}
//               color="#415548"
//               delay={200}
//             />
//           </Grid>

//           {/* Areas of Interest */}
//           <Grid item xs={12} md={4}>
//             <SkillCategory
//               title="Areas of Interest"
//               skills={interests}
//               icon={<PsychologyIcon />}
//               color="#2C5530"
//               delay={400}
//             />
//           </Grid>
//         </Grid>

//         {/* Progress Stats */}
//         <Fade in={isVisible} timeout={1600}>
//           <Box
//             sx={{
//               mt: 8,
//               p: 4,
//               background: "linear-gradient(135deg, rgba(61, 78, 79, 0.03), rgba(65, 85, 72, 0.03))",
//               borderRadius: 3,
//               border: "1px solid rgba(61, 78, 79, 0.1)",
//             }}
//           >
//             <Grid container spacing={3} alignItems="center">
//               <Grid item xs={12} md={8}>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: "600",
//                     color: "#3D4E4F",
//                     mb: 1,
//                   }}
//                 >
//                   Continuous Learning & Growth
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     color: "#6b7c7d",
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   I'm passionate about staying updated with the latest technologies 
//                   and continuously expanding my skill set through projects, courses, 
//                   and hands-on experience.
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} md={4}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: { xs: "flex-start", md: "flex-end" },
//                     gap: 1,
//                     color: "#415548",
//                   }}
//                 >
//                   {/* <TrendingUpIcon sx={{ fontSize: 32 }} /> */}
//                   {/* <Box>
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         fontWeight: "bold",
//                         background: "linear-gradient(45deg, #3D4E4F, #415548)",
//                         backgroundClip: "text",
//                         WebkitBackgroundClip: "text",
//                         color: "transparent",
//                       }}
//                     >
//                       5+
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: "#6b7c7d",
//                         fontWeight: "500",
//                       }}
//                     >
//                       Technologies
//                     </Typography>
//                   </Box> */}
//                 </Box>
//               </Grid>
//             </Grid>
//           </Box>
//         </Fade>

//         {/* Decorative Elements */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "10%",
//             right: "5%",
//             width: 120,
//             height: 120,
//             background: "linear-gradient(135deg, rgba(61, 78, 79, 0.03), rgba(65, 85, 72, 0.03))",
//             borderRadius: "50%",
//             animation: "float 8s ease-in-out infinite",
//             display: { xs: "none", lg: "block" },
//           }}
//         />
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: "20%",
//             left: "3%",
//             width: 80,
//             height: 80,
//             background: "linear-gradient(135deg, rgba(61, 78, 79, 0.02), rgba(65, 85, 72, 0.02))",
//             borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
//             animation: "float 6s ease-in-out infinite 2s",
//             display: { xs: "none", lg: "block" },
//           }}
//         />
//       </Container>

//       {/* CSS Animation */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(180deg); }
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default Skills;



import React, { useEffect, useState } from "react";
import { 
  Box, 
  Chip, 
  Container, 
  Typography, 
  Card,
  CardContent,
  Grid,
  Fade,
  Slide,
  Zoom,
  useTheme,
  useMediaQuery,
  alpha,
  Stack
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const technicalSkills = [
  "HTML", "CSS", "JavaScript", "React js", "Node js", "Type Script", "SQL", "Java", "Spring Boot", "Python", "Full Stack"
];

const tools = [
  "VS Code", "Eclipse", "IntelliJ IDEA", "SQL Workbench", "GitHub", "Postman"
];

const interests = [
  "Artificial Intelligence", "Development", "DevOps", "Latest Technologies"
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Color palette
  const colors = {
    primary: "#1B3C53",
    secondary: "#234C6A",
    accent: "#2A5C8A",
    lightBg: "#F8FAFC",
    textPrimary: "#1A202C",
    textSecondary: "#4A5568"
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const SkillCategory = ({ title, skills, icon, delay, description }) => (
    <Slide in={isVisible} direction="up" timeout={800 + delay}>
      <Card
        sx={{
          height: "100%",
          background: `linear-gradient(145deg, #ffffff 0%, ${colors.lightBg} 100%)`,
          border: `1px solid ${alpha(colors.primary, 0.1)}`,
          boxShadow: `
            0 4px 24px ${alpha(colors.primary, 0.06)},
            0 1px 4px ${alpha(colors.primary, 0.04)}
          `,
          borderRadius: 3,
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: `
              0 20px 40px ${alpha(colors.primary, 0.15)},
              0 8px 20px ${alpha(colors.primary, 0.1)}
            `,
            border: `1px solid ${alpha(colors.primary, 0.2)}`,
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
          }
        }}
      >
        <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              mb: 3,
              gap: 2.5,
            }}
          >
            <Box
              sx={{
                p: 2,
                borderRadius: "12px",
                background: `linear-gradient(135deg, ${alpha(colors.primary, 0.08)} 0%, ${alpha(colors.secondary, 0.08)} 100%)`,
                color: colors.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.3s ease",
              }}
            >
              {icon}
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                  color: colors.primary,
                  fontSize: "1.3rem",
                  letterSpacing: "-0.01em",
                  mb: 0.5,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: colors.textSecondary,
                  lineHeight: 1.5,
                  fontSize: "0.9rem",
                }}
              >
                {description}
              </Typography>
            </Box>
          </Box>

          {/* Skills Grid */}
          <Box sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                mt: 2,
              }}
            >
              {skills.map((skill, index) => (
                <Zoom
                  key={skill}
                  in={isVisible}
                  timeout={1000 + index * 100}
                  style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
                >
                  <Chip
                    label={skill}
                    variant="filled"
                    sx={{
                      background: `linear-gradient(135deg, ${alpha(colors.primary, 0.06)} 0%, ${alpha(colors.secondary, 0.06)} 100%)`,
                      color: colors.primary,
                      fontWeight: "600",
                      fontSize: "0.82rem",
                      height: 34,
                      borderRadius: "10px",
                      border: `1px solid ${alpha(colors.primary, 0.12)}`,
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        background: `linear-gradient(135deg, ${alpha(colors.primary, 0.12)} 0%, ${alpha(colors.secondary, 0.12)} 100%)`,
                        border: `1px solid ${alpha(colors.primary, 0.2)}`,
                        transform: "translateY(-2px)",
                        boxShadow: `0 4px 12px ${alpha(colors.primary, 0.15)}`,
                        color: colors.secondary,
                      },
                      "& .MuiChip-label": {
                        px: 2,
                        py: 0.5,
                      },
                    }}
                  />
                </Zoom>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Slide>
  );

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${colors.lightBg} 0%, #ffffff 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: "800",
                color: colors.primary,
                fontSize: { xs: "2.25rem", md: "3rem" },
                mb: 2,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Skills & Expertise
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: colors.textSecondary,
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.7,
                fontSize: { xs: "1.05rem", md: "1.15rem" },
                fontWeight: "400",
              }}
            >
              A comprehensive showcase of my technical capabilities and areas of specialization
            </Typography>
          </Box>
        </Fade>

        {/* Skills Cards Grid */}
        <Grid container spacing={3}>
          {/* Technical Skills Card */}
          <Grid item xs={12} md={4}>
            <SkillCategory
              title="Technical Skills"
              skills={technicalSkills}
              icon={<CodeIcon sx={{ fontSize: 26 }} />}
              delay={0}
              description="Core programming languages and frameworks I specialize in"
            />
          </Grid>

          {/* Tools & Technologies Card */}
          <Grid item xs={12} md={4}>
            <SkillCategory
              title="Tools & Technologies"
              skills={tools}
              icon={<BuildIcon sx={{ fontSize: 26 }} />}
              delay={200}
              description="Development tools and platforms I use daily"
            />
          </Grid>

          {/* Areas of Interest Card */}
          <Grid item xs={12} md={4}>
            <SkillCategory
              title="Areas of Interest"
              skills={interests}
              icon={<PsychologyIcon sx={{ fontSize: 26 }} />}
              delay={400}
              description="Emerging technologies and fields I'm passionate about"
            />
          </Grid>
        </Grid>

        {/* Bottom Stats Card */}
        <Fade in={isVisible} timeout={1600}>
          <Card
            sx={{
              mt: 8,
              p: { xs: 3, md: 4 },
              background: `linear-gradient(135deg, ${alpha(colors.primary, 0.02)} 0%, ${alpha(colors.secondary, 0.02)} 100%)`,
              border: `1px solid ${alpha(colors.primary, 0.1)}`,
              borderRadius: 3,
              boxShadow: `0 8px 32px ${alpha(colors.primary, 0.08)}`,
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
              }
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    color: colors.primary,
                    mb: 2,
                    fontSize: { xs: "1.4rem", md: "1.5rem" },
                  }}
                >
                  Continuous Learning Journey
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.textSecondary,
                    lineHeight: 1.7,
                    fontSize: "1.05rem",
                  }}
                >
                  Dedicated to continuous improvement and staying updated with the latest 
                  technologies through hands-on projects, courses, and industry best practices.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "flex-start", md: "center" },
                    gap: 2,
                  }}
                >
                  {/* <Box
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${alpha(colors.primary, 0.08)} 0%, ${alpha(colors.secondary, 0.08)} 100%)`,
                      border: `1px solid ${alpha(colors.primary, 0.15)}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  > */}
                    {/* <TrendingUpIcon 
                      sx={{ 
                        fontSize: 36, 
                        color: colors.primary,
                      }} 
                    /> */}
                  {/* </Box> */}
                  {/* <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "800",
                        color: colors.primary,
                        lineHeight: 1,
                      }}
                    >
                      10+
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: colors.textSecondary,
                        fontWeight: "600",
                      }}
                    >
                      Technologies
                    </Typography>
                  </Box> */}
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Fade>

        {/* Enhanced Decorative Elements */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: 120,
            height: 120,
            background: `linear-gradient(135deg, ${alpha(colors.primary, 0.03)} 0%, ${alpha(colors.secondary, 0.03)} 100%)`,
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite",
            display: { xs: "none", xl: "block" },
            border: `1px solid ${alpha(colors.primary, 0.05)}`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "15%",
            left: "3%",
            width: 80,
            height: 80,
            background: `linear-gradient(135deg, ${alpha(colors.secondary, 0.02)} 0%, ${alpha(colors.primary, 0.02)} 100%)`,
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            animation: "float 6s ease-in-out infinite 1s",
            display: { xs: "none", xl: "block" },
            border: `1px solid ${alpha(colors.primary, 0.04)}`,
          }}
        />
      </Container>

      {/* Enhanced CSS Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-15px) rotate(180deg); 
          }
        }
      `}</style>
    </Box>
  );
};

export default Skills;