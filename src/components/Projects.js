

// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Chip,
//   Button,
//   Dialog,
//   DialogContent,
//   Tabs,
//   Tab,
//   IconButton,
//   Divider,
// } from "@mui/material";

// import CloseIcon from "@mui/icons-material/Close";
// import LaunchIcon from "@mui/icons-material/Launch";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import CodeIcon from "@mui/icons-material/Code";
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
// import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const themePrimary = "#1B3C53";
// const themeSecondary = "#234C6A";

// // ---------------- PROJECT DATA ----------------
// const projectsData = [
//   {
//     id: 1,
//     title: "MyKe Notes",
//     category: "Full Stack",
//     technologies: ["React", "MaterialUI", "Node.js", "Express", "SQL"],
//     description: "A real-time note-taking system with authentication.",
//     longDescription:
//       "MyKe Notes is a secure full-stack application with optimized database operations, smooth UI, instant setup, and personalized link customization.",
//     liveUrl: "https://my-ke-front-end.vercel.app/",
//     githubUrl: "https://github.com/DeepaselvakumarM/MyKe_FrontEnd.git",
//     features: ["Authentication", "Customization", "Quick Access", "Real-time Sync"],
//     type: "fullstack",
//   },
//   {
//     id: 2,
//     title: "Library Management System",
//     category: "Full Stack",
//     technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
//     description: "Modern LMS with admin tools and reservations.",
//     longDescription:
//       "Secure book tracking, admin dashboard, reservations, analytics, and smooth performance.",
//     liveUrl: "https://github.com/DeepaselvakumarM/LMS.git",
//     githubUrl: "https://github.com/DeepaselvakumarM/LMS.git",
//     features: ["Dashboard", "Reservations", "Book Suggestions"],
//     type: "fullstack",
//   },
//   {
//     id: 3,
//     title: "Food Menu System",
//     category: "Front End",
//     technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
//     description: "Restaurant menu UI + filtering + cart feature.",
//     longDescription:
//       "Dynamic food UI with filters, cart system, persistence, and smooth animations.",
//     liveUrl: "https://github.com/DeepaselvakumarM/FoodOrder.git",
//     githubUrl: "https://github.com/DeepaselvakumarM/FoodOrder.git",
//     features: ["Menu Filter", "Cart System", "Local Storage"],
//     type: "frontend",
//   },
//   {
//     id: 4,
//     title: "ECOMAADI - Client Project",
//     technologies: ["HTML", "CSS", "JavaScript", "React"],
//     description: "Professional gardening services website.",
//     longDescription:
//       "Responsive React website for gardening services with WhatsApp enquiry.",
//     liveUrl: "https://ecomaadi-fe.vercel.app/",
//     githubUrl: "https://github.com/DeepaselvakumarM/Ecomaadi_FE.git",
//     features: ["Responsive UI", "Services Page", "Modern Layout"],
//     type: "frontend",
//   },
// ];

// // ---------------- PAGE START ----------------
// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [activeTab, setActiveTab] = useState("all");

//   const filtered =
//     activeTab === "all"
//       ? projectsData
//       : projectsData.filter((p) => p.type === activeTab);

//   return (
//     <Box
//       id="projects"
//       sx={{
//         py: 10,
//         background: `linear-gradient(135deg, ${themePrimary}, ${themeSecondary})`,
//       }}
//     >
//       {/* HEADING */}
//       <Typography
//         variant="h3"
//         align="center"
//         sx={{
//           mb: 3,
//           fontWeight: "bold",
//           color: "#fff",
//           letterSpacing: 1,
//         }}
//       >
//         My Projects
//       </Typography>

//       <Typography
//         variant="h6"
//         align="center"
//         sx={{ color: "#d1e4f2", mb: 5 }}
//       >
//         A premium showcase of my technical work
//       </Typography>

//       {/* FILTER TABS */}
//       <Box display="flex" justifyContent="center" mb={4}>
//         <Tabs
//           value={activeTab}
//           onChange={(e, val) => setActiveTab(val)}
//           textColor="inherit"
//           indicatorColor="#FFD700"
//           sx={{
//             "& .MuiTab-root": { color: "white", fontWeight: 600 },
//             "& .Mui-selected": { color: "#d1e4f2" },
//           }}
//         >
//           <Tab value="all" icon={<AllInclusiveIcon />} label="All" />
//           <Tab value="fullstack" icon={<CodeIcon />} label="Full Stack" />
//           <Tab value="frontend" icon={<DesignServicesIcon />} label="Front End" />
//         </Tabs>
//       </Box>

//       {/* SWIPER: 2 CARDS PER SLIDE */}
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={40}            // 🔥 GAP BETWEEN LEFT/RIGHT CARDS
//         slidesPerView={2}
//         autoplay={{ delay: 2800 }}
//         navigation
//         pagination={{ clickable: true }}
//         style={{
//           padding: "0 30px 60px 30px",   // 🔥 SIDE PADDING LOOKS CLEAN
//         }}
//       >
//         {filtered.map((p) => (
//           <SwiperSlide key={p.id}>
//             <Box
//               sx={{
//                 p: 3,
//                 borderRadius: 4,
//                 background: "rgba(255,255,255,0.15)",
//                 backdropFilter: "blur(10px)",
//                 border: "1px solid rgba(255,255,255,0.25)",
//                 color: "white",
//                 transition: "0.3s",
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 "&:hover": {
//                   transform: "translateY(-8px)",
//                   boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
//                 },
//               }}
//             >
//               {/* TITLE */}
//               <Typography variant="h6" fontWeight="bold" mb={1}>
//                 {p.title}
//               </Typography>

//               {/* DESCRIPTION */}
//               <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
//                 {p.description}
//               </Typography>

//               {/* TECHNOLOGIES */}
//               <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
//                 {p.technologies.map((tech) => (
//                   <Chip
//                     key={tech}
//                     label={tech}
//                     size="small"
//                     sx={{
//                       background: "rgba(255,255,255,0.25)",
//                       color: "white",
//                       fontWeight: 600,
//                     }}
//                   />
//                 ))}
//               </Box>

//               {/* BUTTONS */}
//               <Box mt={3} sx={{ display: "flex", gap: 1 }}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<LaunchIcon />}
//                   onClick={() => window.open(p.liveUrl, "_blank")}
//                   sx={{
//                     background: themePrimary,
//                     fontWeight: 600,
//                     "&:hover": { background: themeSecondary },
//                   }}
//                 >
//                   Live
//                 </Button>

//                 <Button
//                   fullWidth
//                   variant="outlined"
//                   startIcon={<GitHubIcon />}
//                   onClick={() => window.open(p.githubUrl, "_blank")}
//                   sx={{
//                     borderColor: "#fff",
//                     color: "#fff",
//                     fontWeight: 600,
//                     "&:hover": { background: "rgba(255,255,255,0.15)" },
//                   }}
//                 >
//                   Code
//                 </Button>
//               </Box>

//               {/* MODAL OPEN */}
//               <Box
//                 onClick={() => setSelectedProject(p)}
//                 sx={{
//                   mt: 2,
//                   cursor: "pointer",
//                   textAlign: "center",
//                   opacity: 0.8,
//                   "&:hover": { opacity: 1 },
//                 }}
//               >
//                 <Typography variant="body2">View Details →</Typography>
//               </Box>
//             </Box>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* MODAL */}
//       <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)}>
//         {selectedProject && (
//           <DialogContent sx={{ p: 3 }}>
//             <Typography variant="h4" fontWeight="bold">
//               {selectedProject.title}
//             </Typography>

//             <Typography sx={{ mb: 2, mt: 1 }}>
//               {selectedProject.longDescription}
//             </Typography>

//             <Divider sx={{ my: 2 }} />

//             <Typography variant="h6">Features</Typography>
//             {selectedProject.features.map((f, i) => (
//               <Typography key={i}>• {f}</Typography>
//             ))}

//             <Box mt={3} display="flex" gap={2}>
//               <Button
//                 variant="contained"
//                 startIcon={<LaunchIcon />}
//                 onClick={() => window.open(selectedProject.liveUrl, "_blank")}
//                 sx={{ background: themePrimary }}
//               >
//                 Live Demo
//               </Button>

//               <Button
//                 variant="outlined"
//                 startIcon={<GitHubIcon />}
//                 onClick={() => window.open(selectedProject.githubUrl, "_blank")}
//                 sx={{ borderColor: themePrimary, color: themePrimary }}
//               >
//                 GitHub
//               </Button>
//             </Box>

//             <IconButton
//               onClick={() => setSelectedProject(null)}
//               sx={{ position: "absolute", top: 10, right: 10 }}
//             >
//               <CloseIcon />
//             </IconButton>
//           </DialogContent>
//         )}
//       </Dialog>
//     </Box>
//   );
// };

// export default Projects;




import React, { useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Button,
  Dialog,
  DialogContent,
  Tabs,
  Tab,
  IconButton,
  Divider,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const themePrimary = "#1B3C53";
const themeSecondary = "#234C6A";

// ---------------- PROJECT DATA ----------------
const projectsData = [
  {
    id: 1,
    title: "MyKe Notes",
    category: "Full Stack",
    technologies: ["React", "MaterialUI", "Node.js", "Express", "SQL"],
    description: "A real-time note-taking system with authentication.",
    longDescription:
      "MyKe Notes is a secure full-stack application with optimized database operations, smooth UI, instant setup, and personalized link customization.",
    liveUrl: "https://my-ke-front-end.vercel.app/",
    githubUrl: "https://github.com/DeepaselvakumarM/MyKe_FrontEnd.git",
    features: ["Authentication", "Customization", "Quick Access", "Real-time Sync"],
    type: "fullstack",
  },
  {
    id: 2,
    title: "Library Management System",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    description: "Modern LMS with admin tools and reservations.",
    longDescription:
      "Secure book tracking, admin dashboard, reservations, analytics, and smooth performance.",
    liveUrl: "https://github.com/DeepaselvakumarM/LMS.git",
    githubUrl: "https://github.com/DeepaselvakumarM/LMS.git",
    features: ["Dashboard", "Reservations", "Book Suggestions"],
    type: "fullstack",
  },
  {
    id: 3,
    title: "Food Menu System",
    category: "Front End",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    description: "Restaurant menu UI + filtering + cart feature.",
    longDescription:
      "Dynamic food UI with filters, cart system, persistence, and smooth animations.",
    liveUrl: "https://food-order-sable-nine.vercel.app/",
    githubUrl: "https://github.com/DeepaselvakumarM/FoodOrder.git",
    features: ["Menu Filter", "Cart System", "Local Storage"],
    type: "frontend",
  },
  {
    id: 4,
    title: "ECOMAADI - Client Project",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    description: "Professional gardening services website.",
    longDescription:
      "Responsive React website for gardening services with WhatsApp enquiry.",
    liveUrl: "https://ecomaadi-fe.vercel.app/",
    githubUrl: "https://github.com/DeepaselvakumarM/Ecomaadi_FE.git",
    features: ["Responsive UI", "Services Page", "Modern Layout"],
    type: "frontend",
  },
];

// ---------------- PAGE START ----------------
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.type === activeTab);

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        background: `linear-gradient(135deg, ${themePrimary}, ${themeSecondary})`,
        position: "relative",
      }}
    >
      {/* HEADING */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: 3,
          fontWeight: "bold",
          color: "#fff",
          letterSpacing: 1,
        }}
      >
        My Projects
      </Typography>

      <Typography
        variant="h6"
        align="center"
        sx={{ color: "#d1e4f2", mb: 5 }}
      >
        A premium showcase of my technical work
      </Typography>

      {/* FILTER TABS */}
      <Box display="flex" justifyContent="center" mb={4}>
        <Tabs
          value={activeTab}
          onChange={(e, val) => setActiveTab(val)}
          textColor="inherit"
          indicatorColor=""
          sx={{
            "& .MuiTab-root": { color: "white", fontWeight: 600 },
            "& .Mui-selected": { color: "#FFD700" },
          }}
        >
          <Tab value="all" icon={<AllInclusiveIcon />} label="All" />
          <Tab value="fullstack" icon={<CodeIcon />} label="Full Stack" />
          <Tab value="frontend" icon={<DesignServicesIcon />} label="Front End" />
        </Tabs>
      </Box>

      {/* ---- CUSTOM ARROWS ---- */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #FFD700 !important;
          background: rgba(0,0,0,0.3);
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
        }
      `}</style>

      {/* SWIPER: 2 CARDS PER SLIDE */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}   // 👉 Extra gap between slides
        slidesPerView={2}
        autoplay={{ delay: 2500 }}
        navigation
        pagination={{ clickable: true }}
        // style={{ paddingBottom: "60px" }}
         style={{
          padding: "0 30px 60px 30px",           }}
      >
        {filtered.map((p) => (
          <SwiperSlide key={p.id}>
            <Box
              sx={{
                p: 3,
                borderRadius: 4,
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "white",
                transition: "0.3s",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
                },
              }}
            >
              {/* TITLE */}
              <Typography variant="h6" fontWeight="bold" mb={1}>
                {p.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                {p.description}
              </Typography>

              {/* TECHNOLOGIES */}
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                {p.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      background: "rgba(255,255,255,0.25)",
                      color: "white",
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Box>

              {/* BUTTONS */}
              <Box mt={3} sx={{ display: "flex", gap: 1 }}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<LaunchIcon />}
                  onClick={() => window.open(p.liveUrl, "_blank")}
                  sx={{
                    background: themePrimary,
                    fontWeight: 600,
                    "&:hover": { background: themeSecondary },
                  }}
                >
                  Live
                </Button>

                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  onClick={() => window.open(p.githubUrl, "_blank")}
                  sx={{
                    borderColor: "#fff",
                    color: "#fff",
                    fontWeight: 600,
                    "&:hover": { background: "rgba(255,255,255,0.15)" },
                  }}
                >
                  Code
                </Button>
              </Box>

              {/* MODAL OPEN */}
              <Box
                onClick={() => setSelectedProject(p)}
                sx={{
                  mt: 2,
                  cursor: "pointer",
                  textAlign: "center",
                  opacity: 0.8,
                  "&:hover": { opacity: 1 },
                }}
              >
                <Typography variant="body2" sx={{ color: "#FFD700" }}>
                  View Details →
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MODAL */}
      <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent sx={{ p: 3 }}>
            <Typography variant="h4" fontWeight="bold">
              {selectedProject.title}
            </Typography>

            <Typography sx={{ mb: 2, mt: 1 }}>
              {selectedProject.longDescription}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6">Features</Typography>
            {selectedProject.features.map((f, i) => (
              <Typography key={i}>• {f}</Typography>
            ))}

            <Box mt={3} display="flex" gap={2}>
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                sx={{ background: themePrimary }}
              >
                Live Demo
              </Button>

              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                sx={{ borderColor: themePrimary, color: themePrimary }}
              >
                GitHub
              </Button>
            </Box>

            <IconButton
              onClick={() => setSelectedProject(null)}
              sx={{ position: "absolute", top: 10, right: 10 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;
