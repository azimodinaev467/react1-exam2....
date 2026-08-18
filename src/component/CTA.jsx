import { Box, Container, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

export default function CTA() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          bgcolor: "#f3f3f3",
          borderRadius: "28px",
          p: { xs: 4, md: 6 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 6 },
          overflow: "hidden",
        }}>
        <Box sx={{ flex: 1, maxWidth: { md: 480 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: 2,
              fontSize: { xs: "1.6rem", md: "2rem" },
            }}>
            Let's make things happen
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#555", lineHeight: 1.7, mb: 4, fontSize: { xs: "0.9rem", md: "1rem" } }}>
            Contact us today to learn more about how our digital marketing services can help your
            business grow and succeed online.
          </Typography>

          <CustomButton variant="contained">Get your free proposal</CustomButton>
        </Box>

        <svg viewBox="0 0 160 120" width="160" height="120" fill="none">
          <circle cx="80" cy="50" r="28" fill="#1a1a1a" />
          <circle cx="71" cy="44" r="4" fill="white" />
          <circle cx="89" cy="44" r="4" fill="white" />
          <path
            d="M71 58 Q80 66 89 58"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M40 15 L44 30 L55 22 L48 37 L63 36 L50 46 L63 52 L50 55 L58 68 L45 62 L42 77 L35 62 L22 68 L28 55 L15 52 L28 46 L15 36 L30 37 L22 22 L34 30 Z"
            stroke="#1a1a1a"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M120 90 L123 82 L126 90 L134 93 L126 96 L123 104 L120 96 L112 93 Z"
            fill="#B9FF66"
          />
        </svg>
      </Box>
    </Container>
  );
}
