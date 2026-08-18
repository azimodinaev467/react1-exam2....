import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import CustomButton from "./CustomButton";
import Services from "./Services";
import CTA from "./CTA";
import CaseStudies from "./CaseStudies";
import WorkingProcess from "./WorkingProcess";
import Team from "./Team";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import UserTable from "./UserTable";
import Footer from "./Footer";

import illustration from "../assets/Illustration (1).png";
import logo1 from "../assets/Company logo.png";
import logo2 from "../assets/Company logo (1).png";
import logo3 from "../assets/Company logo (2).png";
import logo4 from "../assets/Company logo (3).png";
import logo5 from "../assets/Company logo (4).png";
import logo6 from "../assets/Company logo (5).png";

const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];
const partnerLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function Hider() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ bgcolor: "#fff", borderBottom: "1px solid #e0e0e0" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 5 }, py: 1 }}>
       
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 28,
                height: 28,
                bgcolor: "#1a1a1a",
                clipPath: "polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)",
              }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#1a1a1a", fontWeight: 700, letterSpacing: "-0.5px" }}>
              Positivus
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {navLinks.map((link) => (
                <Button
                  key={link}
                  sx={{
                    color: "#1a1a1a",
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 400,
                    "&:hover": {
                      color: "#000",
                      bgcolor: "transparent",
                      textDecoration: "underline",
                    },
                  }}>
                  {link}
                </Button>
              ))}
              <CustomButton variant="outlined" sx={{ px: 3, py: 1 }}>
                Request a quote
              </CustomButton>
            </Box>
          )}

          {isMobile && (
            <IconButton onClick={toggleDrawer(true)} sx={{ color: "#1a1a1a" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: 280, bgcolor: "#1a1a1a", color: "#fff", px: 2, py: 3 },
        }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#B9FF66" }}>
            Positivus
          </Typography>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ bgcolor: "#333", mb: 2 }} />

        <List>
          {navLinks.map((link) => (
            <ListItem key={link} disablePadding>
              <ListItemButton
                onClick={toggleDrawer(false)}
                sx={{
                  borderRadius: "8px",
                  mb: 0.5,
                  "&:hover": { bgcolor: "#B9FF66", color: "#1a1a1a" },
                }}>
                <ListItemText
                  primary={link}
                  primaryTypographyProps={{ fontSize: "1.1rem", fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ bgcolor: "#333", my: 2 }} />

        <CustomButton variant="green" fullWidth>
          Request a quote
        </CustomButton>
      </Drawer>

      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
          }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
                color: "#1a1a1a",
                lineHeight: 1.2,
                mb: 3,
              }}>
              Navigating the digital landscape for success
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#555",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                mb: 4,
                lineHeight: 1.7,
                maxWidth: 460,
              }}>
              Our digital marketing agency helps businesses grow and succeed online through a range
              of services including SEO, PPC, social media marketing, and content creation.
            </Typography>

            <CustomButton variant="contained">Book a consultation</CustomButton>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box
              component="img"
              src={illustration}
              alt="Digital marketing illustration"
              sx={{
                width: "100%",
                maxWidth: { xs: 320, md: 520 },
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Container>

      <Box sx={{ py: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "space-between" },
              flexWrap: "wrap",
              gap: { xs: 3, md: 2 },
            }}>
            {partnerLogos.map((logo, index) => (
              <Box
                component="img"
                key={index}
                src={logo}
                alt={`Partner logo ${index + 1}`}
                sx={{
                  height: { xs: 28, md: 36 },
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  opacity: 0.75,
                  transition: "opacity 0.2s, filter 0.2s",
                  "&:hover": { opacity: 1, filter: "grayscale(0%)" },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Services />

      {/* CTA SECTION */}
      <CTA />

      {/* CASE STUDIES SECTION */}
      <CaseStudies />

      {/* WORKING PROCESS SECTION */}
      <WorkingProcess />

      {/* TEAM SECTION */}
      <Team />

      <Testimonials />

      {/* CONTACT US SECTION */}
      <ContactUs />

      {/* USER TABLE SECTION */}
      <UserTable />

      {/* FOOTER SECTION */}
      <Footer />

    </Box>
  );
}
