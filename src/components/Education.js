
// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Box,
//   Grid,
//   Fade,
//   Slide,
//   Chip,
//   LinearProgress,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import {
//   Timeline,
//   TimelineItem,
//   TimelineSeparator,
//   TimelineConnector,
//   TimelineContent,
//   TimelineDot,
// } from "@mui/lab";
// import SchoolIcon from "@mui/icons-material/School";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import GradeIcon from "@mui/icons-material/Grade";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// const Education = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.2 }
//     );

//     const section = document.getElementById("education");
//     if (section) observer.observe(section);

//     return () => observer.disconnect();
//   }, []);

//   const educationData = [
//     {
//       id: 1,
//       degree: "B.Tech – Information Technology",
//       institution: "Sri Shanmugha College of Engineering and Technology",
//       duration: "2021 – 2025",
//       cgpa: 8.1,
//       board: "Anna University",
//       location: "Salem, Tamil Nadu",
//       status: "Completed",
//       achievements: [
//         "Specialized in Full Stack Development",
//         "Active participant in coding competitions",
//         "Coursework in AI/ML and Web Technologies",
//       ],
//       courses: [
//         "Web Development",
//         "Database Systems",
//         "Algorithms",
//         "Software Engineering",
//         "Cloud Computing",
//       ],
//     },
//     {
//       id: 2,
//       degree: "Higher Secondary (12th Grade)",
//       institution: "Government Higher Secondary School",
//       duration: "2020 – 2021",
//       marks: 91,
//       board: "State Board",
//       location: "Tamil Nadu",
//       status: "Completed",
//       achievements: [
//         "School Topper in Computer Science",
//         "Participated in Science Exhibitions",
//         "Member of Computer Club",
//       ],
//     },
//     {
//       id: 3,
//       degree: "SSLC (10th Grade)",
//       institution: "Government Higher Secondary School",
//       duration: "2018 – 2019",
//       marks: 92,
//       board: "State Board",
//       location: "Tamil Nadu",
//       status: "Completed",
//       achievements: [
//         "District Level Rank Holder",
//         "Perfect Attendance Award",
//         "Active in Extracurricular Activities",
//       ],
//     },
//   ];

//   const EducationCard = ({ education, index }) => (
//     <Grid item xs={12} md={6} lg={4}>
//       <Slide in={isVisible} direction="up" timeout={800 + index * 200}>
//         <Card
//           sx={{
//             height: "100%",
//             borderRadius: 3,
//             position: "relative",
//             overflow: "hidden",
//             transition: "all 0.4s ease",
//             "&:hover": {
//               transform: "translateY(-8px)",
//               boxShadow: "0 16px 48px rgba(61,78,79,0.15)",
//             },
//           }}
//         >
//           <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", gap: 2 }}>
//             {/* Header */}
//             <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   width: 60,
//                   height: 60,
//                   borderRadius: "50%",
//                   background: "linear-gradient(135deg, #3D4E4F, #415548)",
//                   color: "white",
//                   mb: 1,
//                 }}
//               >
//                 <SchoolIcon />
//               </Box>

//               <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
//                 {education.degree}
//               </Typography>

//               <Chip
//                 label={education.status}
//                 size="small"
//                 sx={{
//                   background:
//                     education.status === "Pursuing"
//                       ? "linear-gradient(135deg, #FFD700, #FFEC8B)"
//                       : "linear-gradient(135deg, #4CAF50, #66BB6A)",
//                   color: education.status === "Pursuing" ? "#3D4E4F" : "white",
//                   fontWeight: "600",
//                   fontSize: "0.7rem",
//                 }}
//               />
//             </Box>

//             {/* Institution */}
//             <Typography variant="body1" sx={{ fontWeight: 600, textAlign: "center" }}>
//               {education.institution}
//             </Typography>

//             {/* Details */}
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, alignItems: "center" }}>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <CalendarTodayIcon sx={{ fontSize: 16 }} />
//                 <Typography variant="body2">{education.duration}</Typography>
//               </Box>

//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <LocationOnIcon sx={{ fontSize: 16 }} />
//                 <Typography variant="body2">{education.location}</Typography>
//               </Box>

//               {education.board && (
//                 <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                   <GradeIcon sx={{ fontSize: 16 }} />
//                   <Typography variant="body2">Board: {education.board}</Typography>
//                 </Box>
//               )}
//             </Box>

//             {/* Performance */}
//             <Box sx={{ mt: 1, width: "100%" }}>
//               <LinearProgress
//                 variant="determinate"
//                 value={education.cgpa ? (education.cgpa / 10) * 100 : education.marks}
//                 sx={{
//                   height: 8,
//                   borderRadius: 4,
//                   background: "rgba(61,78,79,0.1)",
//                   "& .MuiLinearProgress-bar": {
//                     background: "linear-gradient(90deg, #3D4E4F, #415548)",
//                   },
//                 }}
//               />
//               <Typography variant="caption" sx={{ textAlign: "center", display: "block", mt: 0.5 }}>
//                 {education.cgpa ? `CGPA: ${education.cgpa}/10` : `Percentage: ${education.marks}%`}
//               </Typography>
//             </Box>

//             {/* Achievements */}
//             {/* {education.achievements && (
//               <Box sx={{ mt: 1 }}>
//                 <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, display: "flex", alignItems: "center", gap: 0.5 }}>
//                   <EmojiEventsIcon sx={{ fontSize: 16 }} /> Highlights
//                 </Typography>
//                 <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
//                   {education.achievements.map((ach, idx) => (
//                     <Typography key={idx} variant="caption" sx={{ color: "#6b7c7d" }}>
//                       • {ach}
//                     </Typography>
//                   ))}
//                 </Box>
//               </Box>
//             )} */}

//             {/* Courses */}
//             {/* {education.courses && (
//               <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//                 {education.courses.map((course, idx) => (
//                   <Chip key={idx} label={course} size="small" variant="outlined" sx={{ fontSize: "0.65rem" }} />
//                 ))}
//               </Box>
//             )} */}
//           </CardContent>
//         </Card>
//       </Slide>
//     </Grid>
//   );

//   return (
//     <Box id="education" sx={{ py: 10, background: "#f8f9fa" }}>
//       <Container maxWidth="lg">
//         {/* Section Header */}
//         <Fade in={isVisible} timeout={800}>
//           <Box sx={{ textAlign: "center", mb: 6 }}>
//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: "bold",
//                 background: "linear-gradient(45deg, #3D4E4F, #415548)",
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//               }}
//             >
//               Education Journey
//             </Typography>
//             <Typography variant="body1" sx={{ color: "#6b7c7d", mt: 1, maxWidth: 600, mx: "auto" }}>
//               Building a strong academic foundation with consistent performance and continuous learning.
//             </Typography>
//           </Box>
//         </Fade>

//         {/* Education Cards */}
//         <Grid container spacing={3}>
//           {educationData.map((edu, index) => (
//             <EducationCard key={edu.id} education={edu} index={index} />
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Education;




import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  Fade,
  Slide,
  Chip,
  LinearProgress,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GradeIcon from "@mui/icons-material/Grade";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// Theme Colors
const PRIMARY = "#1B3C53";
const SECONDARY = "#234C6A";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    const section = document.getElementById("education");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      id: 1,
      degree: "B.Tech – Information Technology",
      institution: "Sri Shanmugha College of Engineering and Technology",
      duration: "2021 – 2025",
      cgpa: 8.1,
      board: "Anna University",
      location: "Salem, Tamil Nadu",
      status: "Completed",
      achievements: [
        "Specialized in Full Stack Development",
        "Active participant in coding competitions",
        "Coursework in AI/ML and Web Technologies",
      ],
    },
    {
      id: 2,
      degree: "Higher Secondary (12th Grade)",
      institution: "Government Higher Secondary School",
      duration: "2020 – 2021",
      marks: 91,
      board: "State Board",
      location: "Tamil Nadu",
      status: "Completed",
      achievements: [
        "School Topper in Computer Science",
        "Participated in Science Exhibitions",
        "Member of Computer Club",
      ],
    },
    {
      id: 3,
      degree: "SSLC (10th Grade)",
      institution: "Government Higher Secondary School",
      duration: "2018 – 2019",
      marks: 92,
      board: "State Board",
      location: "Tamil Nadu",
      status: "Completed",
      achievements: [
        "District Level Rank Holder",
        "Perfect Attendance Award",
        "Active in Extracurricular Activities",
      ],
    },
  ];

  const EducationCard = ({ education, index }) => (
    <Grid item xs={12} md={6} lg={4}>
      <Slide in={isVisible} direction="up" timeout={800 + index * 150}>
        <Card
          sx={{
            height: "100%",
            borderRadius: 4,
            overflow: "hidden",
            background: "#ffffffcc",
            backdropFilter: "blur(10px)",
            border: `1px solid ${PRIMARY}20`,
            transition: "0.35s",
            boxShadow: `0 10px 30px ${PRIMARY}20`,
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: `0 16px 50px ${SECONDARY}30`,
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            {/* Icon */}
            <Box
              sx={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
                color: "#fff",
                mx: "auto",
                mb: 2,
                boxShadow: `0 4px 15px ${SECONDARY}40`,
              }}
            >
              <SchoolIcon sx={{ fontSize: 35 }} />
            </Box>

            {/* Degree */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                color: PRIMARY,
              }}
            >
              {education.degree}
            </Typography>

            {/* Status */}
            <Chip
              label={education.status}
              size="small"
              sx={{
                mt: 1,
                mx: "auto",
                display: "block",
                background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
                color: "white",
                fontWeight: 600,
                fontSize: "0.75rem",
              }}
            />

            {/* Institution */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                textAlign: "center",
                mt: 2,
                color: SECONDARY,
              }}
            >
              {education.institution}
            </Typography>

            <Box
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <CalendarTodayIcon sx={{ fontSize: 17, color: PRIMARY }} />
                <Typography variant="body2">{education.duration}</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <LocationOnIcon sx={{ fontSize: 17, color: PRIMARY }} />
                <Typography variant="body2">{education.location}</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <GradeIcon sx={{ fontSize: 17, color: PRIMARY }} />
                <Typography variant="body2">Board: {education.board}</Typography>
              </Box>
            </Box>

            {/* Progress */}
            <Box sx={{ mt: 3 }}>
              <LinearProgress
                variant="determinate"
                value={education.cgpa ? (education.cgpa / 10) * 100 : education.marks}
                sx={{
                  height: 10,
                  borderRadius: 3,
                  backgroundColor: `${SECONDARY}20`,
                  "& .MuiLinearProgress-bar": {
                    background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
                  },
                }}
              />
              <Typography
                variant="caption"
                sx={{ mt: 1, textAlign: "center", display: "block", color: PRIMARY }}
              >
                {education.cgpa
                  ? `CGPA: ${education.cgpa}/10`
                  : `Percentage: ${education.marks}%`}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Slide>
    </Grid>
  );

  return (
    <Box
      id="education"
      sx={{
        py: 10,
        background: `linear-gradient(135deg, ${PRIMARY}05, ${SECONDARY}10)`,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                background: `linear-gradient(45deg, ${PRIMARY}, ${SECONDARY})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Education Journey
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 1,
                maxWidth: 650,
                mx: "auto",
                color: `${PRIMARY}90`,
              }}
            >
              Building a strong academic foundation with consistency, discipline, and continuous learning.
            </Typography>
          </Box>
        </Fade>

        {/* Grid */}
        <Grid container spacing={4}>
          {educationData.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
