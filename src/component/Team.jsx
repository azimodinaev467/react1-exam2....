import { Box, Container, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

import pic0 from "../assets/Picture.png";
import pic1 from "../assets/Picture (1).png";
import pic2 from "../assets/Picture (2).png";
import pic3 from "../assets/Picture (3).png";
import pic4 from "../assets/Picture (4).png";
import pic5 from "../assets/Picture (5).png";
import socialIcon from "../assets/Social icon.png";

const members = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    photo: pic0,
    desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    photo: pic1,
    desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    photo: pic2,
    desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    photo: pic3,
    desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    photo: pic4,
    desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    photo: pic5,
    desc: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

function MemberCard({ name, role, desc, photo }) {
  return (
    <Box
      sx={{
        border: "1px solid #1a1a1a",
        borderRadius: "28px",
        p: { xs: 3, md: 3.5 },
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        bgcolor: "#fff",
        boxShadow: "4px 4px 0px #1a1a1a",
      }}>
      <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              flexShrink: 0,
              bgcolor: "#B9FF66",
              borderRadius: "42% 58% 55% 45% / 48% 42% 58% 52%",
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}>
            <Box
              component="img"
              src={photo}
              alt={name}
              sx={{
                width: "90%",
                height: "95%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
              }}
            />
          </Box>

          <Box>
            <Typography
              sx={{ fontWeight: 700, fontSize: "1rem", color: "#1a1a1a", lineHeight: 1.2 }}>
              {name}
            </Typography>
            <Typography sx={{ fontSize: "0.85rem", color: "#555", mt: 0.3 }}>{role}</Typography>
          </Box>
        </Box>

        {/* LinkedIn icon */}
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            bgcolor: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
          <Box
            component="img"
            src={socialIcon}
            alt="LinkedIn"
            sx={{ width: 18, height: 18, filter: "invert(1)" }}
          />
        </Box>
      </Box>

      {/* Divider */}
      <Box sx={{ borderTop: "1px solid #e0e0e0" }} />

      {/* Description */}
      <Typography sx={{ fontSize: "0.88rem", color: "#444", lineHeight: 1.6 }}>{desc}</Typography>
    </Box>
  );
}

export default function Team() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: 2, md: 4 },
          mb: { xs: 4, md: 6 },
        }}>
        <Box sx={{ bgcolor: "#B9FF66", px: 2, py: 0.5, borderRadius: "8px", flexShrink: 0 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#1a1a1a" }}>
            Team
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ color: "#555", maxWidth: 380, lineHeight: 1.6, fontSize: "0.95rem" }}>
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </Typography>
      </Box>

      {/* Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 3,
        }}>
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
        <CustomButton variant="contained">See all team</CustomButton>
      </Box>
    </Container>
  );
}
