

// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Link,
//   Grid,
//   Card,
//   CardContent,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import ContactMailIcon from "@mui/icons-material/ContactMail";

// const Contact = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.2 }
//     );

//     const section = document.getElementById("contact");
//     if (section) observer.observe(section);

//     return () => observer.disconnect();
//   }, []);

//   const contactMethods = [
//     {
//       icon: <EmailIcon sx={{ fontSize: 32 }} />,
//       title: "Email",
//       value: "sdeepa0711@gmail.com",
//       link: "mailto:sdeepa0711@gmail.com",
//       color: "#3D4E4F",
//     },
//     {
//       icon: <PhoneIcon sx={{ fontSize: 32 }} />,
//       title: "Phone",
//       value: "+91 9791672016",
//       link: "tel:+919791672016",
//       color: "#415548",
//     },
//     {
//       icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
//       title: "LinkedIn",
//       value: "linkedin.com/in/deepas7113",
//       link: "https://www.linkedin.com/in/deepas7113",
//       color: "#3D4E4F",
//     },
//     {
//       icon: <GitHubIcon sx={{ fontSize: 32 }} />,
//       title: "GitHub",
//       value: "github.com/DeepaselvakumarM",
//       link: "https://github.com/DeepaselvakumarM",
//       color: "#415548",
//     },
//   ];

//   const ContactCard = ({ method }) => (
//     <Grid item xs={12} sm={6}>
//       <Card
//         sx={{
//           background: "linear-gradient(135deg,#fff,#fafbfc)",
//           border: "1px solid rgba(61,78,79,0.1)",
//           boxShadow: "0 8px 32px rgba(61,78,79,0.1)",
//           borderRadius: 3,
//           transition: "0.3s",
//           "&:hover": {
//             transform: "translateY(-8px)",
//             boxShadow: "0 16px 48px rgba(61,78,79,0.2)",
//           },
//         }}
//       >
//         <CardContent sx={{ p: 4, textAlign: "center" }}>
//           <Box
//             sx={{
//               width: 80,
//               height: 80,
//               borderRadius: "50%",
//               background: method.color,
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "white",
//               mx: "auto",
//               mb: 3,
//             }}
//           >
//             {method.icon}
//           </Box>

//           <Typography variant="h6" sx={{ fontWeight: 600, color: "#3D4E4F", mb: 1 }}>
//             {method.title}
//           </Typography>

//           <Link
//             href={method.link}
//             target={
//               method.title === "Email" || method.title === "Phone" ? "_self" : "_blank"
//             }
//             underline="hover"
//             sx={{
//               color: "#6b7c7d",
//               fontWeight: 500,
//               transition: "0.3s",
//               "&:hover": { color: method.color },
//             }}
//           >
//             {method.value}
//           </Link>
//         </CardContent>
//       </Card>
//     </Grid>
//   );

//   return (
//     <Box
//       id="contact"
//       sx={{
//         py: { xs: 6, md: 10 },
//         background: "linear-gradient(135deg,#f8f9fa,#ffffff,#f1f3f4)",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box sx={{ textAlign: "center", mb: 8 }}>
//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: "bold",
//               background: "linear-gradient(45deg,#3D4E4F,#415548)",
//               backgroundClip: "text",
//               WebkitBackgroundClip: "text",
//               color: "transparent",
//               mb: 2,
//             }}
//           >
//             Let's Connect
//           </Typography>

//           <Typography sx={{ color: "#6b7c7d", maxWidth: 600, mx: "auto", lineHeight: 1.6 }}>
//             I'm always open to discussing new opportunities or ideas.
//           </Typography>
//         </Box>

//         <Grid container spacing={6}>
//           <Grid item xs={12} md={6}>
//             <Typography
//               variant="h4"
//               sx={{
//                 fontWeight: 600,
//                 color: "#3D4E4F",
//                 mb: 4,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 1,
//               }}
//             >
//               <ContactMailIcon />
//               Get In Touch
//             </Typography>

//             <Typography sx={{ color: "#6b7c7d", mb: 4 }}>
//               Whether you want to collaborate or just say hello, feel free to reach out.
//             </Typography>

//             <Grid container spacing={3}>
//               {contactMethods.map((method) => (
//                 <ContactCard key={method.title} method={method} />
//               ))}
//             </Grid>

//             <Box
//               sx={{
//                 mt: 4,
//                 p: 3,
//                 borderRadius: 3,
//                 border: "1px solid rgba(61,78,79,0.1)",
//                 display: "flex",
//                 gap: 2,
//                 alignItems: "center",
//               }}
//             >
//               <Box
//                 sx={{
//                   p: 1.5,
//                   borderRadius: "50%",
//                   background: "linear-gradient(135deg,#3D4E4F,#415548)",
//                   color: "white",
//                 }}
//               >
//                 <LocationOnIcon />
//               </Box>

//               <Box>
//                 <Typography variant="h6" sx={{ color: "#3D4E4F", fontWeight: 600 }}>
//                   Based in India
//                 </Typography>
//                 <Typography sx={{ color: "#6b7c7d" }}>
//                   Open to relocation
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Contact;



import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const PRIMARY = "#1B3C53";
const SECONDARY = "#234C6A";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      title: "Email",
      value: "sdeepa0711@gmail.com",
      link: "mailto:sdeepa0711@gmail.com",
      color: PRIMARY,
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 32 }} />,
      title: "Phone",
      value: "+91 9791672016",
      link: "tel:+919791672016",
      color: SECONDARY,
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
      title: "LinkedIn",
      value: "linkedin.com/in/deepas7113",
      link: "https://www.linkedin.com/in/deepas7113",
      color: PRIMARY,
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 32 }} />,
      title: "GitHub",
      value: "github.com/DeepaselvakumarM",
      link: "https://github.com/DeepaselvakumarM",
      color: SECONDARY,
    },
  ];

  const ContactCard = ({ method }) => (
    <Grid item xs={12} sm={6}>
      <Card
        sx={{
          background: "#ffffff",
          borderRadius: 4,
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          transition: "all 0.35s ease",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
          },
        }}
      >
        <CardContent sx={{ p: 4, textAlign: "center" }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: method.color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              mx: "auto",
              mb: 3,
            }}
          >
            {method.icon}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 600, color: PRIMARY }}>
            {method.title}
          </Typography>

          <Link
            href={method.link}
            target={
              method.title === "Email" || method.title === "Phone" ? "_self" : "_blank"
            }
            underline="hover"
            sx={{
              color: "#4f5d6a",
              fontWeight: 500,
              mt: 1,
              display: "inline-block",
              transition: "0.3s",
              "&:hover": { color: method.color },
            }}
          >
            {method.value}
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 10 },
        background: `linear-gradient(135deg, ${PRIMARY}10, ${SECONDARY}10, #ffffff)`,
      }}
    >
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              background: `linear-gradient(45deg, ${PRIMARY}, ${SECONDARY})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
              mb: 2,
            }}
          >
            Let’s Connect
          </Typography>

          <Typography sx={{ color: "#5f6f7a", maxWidth: 600, mx: "auto" }}>
            Feel free to reach out for exciting opportunities or collaborations.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Left side content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                color: PRIMARY,
                mb: 4,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <ContactMailIcon />
              Get In Touch
            </Typography>

            <Typography sx={{ color: "#5a6a75", mb: 4 }}>
              Whether you want to collaborate, hire, or discuss ideas — I’d love to talk.
            </Typography>

            {/* Contact Cards */}
            <Grid container spacing={3}>
              {contactMethods.map((method) => (
                <ContactCard key={method.title} method={method} />
              ))}
            </Grid>

            {/* Location box */}
            <Box
              sx={{
                mt: 4,
                p: 3,
                borderRadius: 3,
                border: "1px solid rgba(0,0,0,0.1)",
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  p: 1.8,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
                  color: "white",
                }}
              >
                <LocationOnIcon />
              </Box>

              <Box>
                <Typography variant="h6" sx={{ color: PRIMARY, fontWeight: 600 }}>
                  Based in India
                </Typography>
                <Typography sx={{ color: "#5f6f7a" }}>
                  Open to relocation
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
