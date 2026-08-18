import { Box, Container, Typography } from '@mui/material';

import arrow from '../assets/Arrow 1.png';
import ill3 from '../assets/Illustration (3).png';
import ill4 from '../assets/Illustration (4).png';
import ill5 from '../assets/Illustration (5).png';
import ill6 from '../assets/Illustration (6).png';
import illEmail from '../assets/tokyo-sending-messages-from-one-place-to-another 1.png';
import icon9 from '../assets/Icon (9).png';

const services = [
  {
    title: 'Search engine optimization',
    bg: '#f3f3f3',
    titleBg: '#B9FF66',
    titleColor: '#1a1a1a',
    textColor: '#1a1a1a',
    arrowInvert: false,
    img: ill3,
  },
  {
    title: 'Pay-per-click advertising',
    bg: '#B9FF66',
    titleBg: '#fff',
    titleColor: '#1a1a1a',
    textColor: '#1a1a1a',
    arrowInvert: false,
    img: ill4,
  },
  {
    title: 'Social Media Marketing',
    bg: '#1a1a1a',
    titleBg: '#fff',
    titleColor: '#1a1a1a',
    textColor: '#fff',
    arrowInvert: true,
    img: ill5,
  },
  {
    title: 'Email\nMarketing',
    bg: '#f3f3f3',
    titleBg: '#B9FF66',
    titleColor: '#1a1a1a',
    textColor: '#1a1a1a',
    arrowInvert: false,
    img: illEmail,
  },
  {
    title: 'Content\nCreation',
    bg: '#B9FF66',
    titleBg: '#fff',
    titleColor: '#1a1a1a',
    textColor: '#1a1a1a',
    arrowInvert: false,
    img: ill6,
  },
  {
    title: 'Analytics and Tracking',
    bg: '#1a1a1a',
    titleBg: '#B9FF66',
    titleColor: '#1a1a1a',
    textColor: '#fff',
    arrowInvert: true,
    img: icon9,
  },
];

export default function Services() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: { xs: 2, md: 4 },
          mb: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            bgcolor: '#B9FF66',
            px: 2,
            py: 0.5,
            borderRadius: '8px',
            flexShrink: 0,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
            Services
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{ color: '#555', maxWidth: 420, lineHeight: 1.7, fontSize: '0.95rem' }}
        >
          At our digital marketing agency, we offer a range of services to help businesses grow and
          succeed online. These services include:
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: service.bg,
              borderRadius: '28px',
              border: '1px solid #1a1a1a',
              p: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: { xs: 200, md: 240 },
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-4px)' },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box
                sx={{
                  bgcolor: service.titleBg,
                  px: 1.5,
                  py: 0.8,
                  borderRadius: '8px',
                  maxWidth: '48%',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.15rem', md: '1.35rem' },
                    color: service.titleColor,
                    lineHeight: 1.25,
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {service.title}
                </Typography>
              </Box>

              <Box
                component="img"
                src={service.img}
                alt={service.title}
                sx={{
                  width: { xs: 100, md: 130 },
                  height: { xs: 100, md: 130 },
                  objectFit: 'contain',
                }}
              />
            </Box>

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    bgcolor: service.arrowInvert ? '#fff' : '#1a1a1a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >

                  <Box
                    component="img"
                    src={arrow}
                    alt="arrow"
                    sx={{
                      width: 18,
                      height: 18,
                      filter: service.arrowInvert ? 'invert(1)' : 'invert(1)',
                    }}
                  />
                </Box>
                <Typography sx={{ color: service.textColor, fontWeight: 500, fontSize: '1rem' }}>
                  Learn more
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}