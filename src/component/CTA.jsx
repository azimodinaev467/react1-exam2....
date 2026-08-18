import { Box, Container, Typography } from '@mui/material';
import CustomButton from './CustomButton';
import frame19 from '../assets/Frame 19.png';

export default function CTA() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          bgcolor: '#f3f3f3',
          borderRadius: '28px',
          p: { xs: 4, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 4, md: 6 },
          overflow: 'hidden',
        }}
      >
        <Box sx={{ flex: 1, maxWidth: { md: 480 } }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: '#1a1a1a', mb: 2, fontSize: { xs: '1.6rem', md: '2rem' } }}
          >
            Let's make things happen
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: '#555', lineHeight: 1.7, mb: 4, fontSize: { xs: '0.9rem', md: '1rem' } }}
          >
            Contact us today to learn more about how our digital marketing services can help your
            business grow and succeed online.
          </Typography>

          <CustomButton variant="contained">
            Get your free proposal
          </CustomButton>
        </Box>

        {/* Illustration */}
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={frame19}
            alt="CTA illustration"
            sx={{
              width: { xs: 200, md: 280 },
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
