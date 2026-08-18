import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    number: '02',
    title: 'Research and Strategy Development',
    description:
      'We conduct thorough research on your industry, competitors, and target audience. Based on this data, we develop a comprehensive strategy aligned with your business goals.',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Our team puts the strategy into action, executing campaigns across the most relevant channels. We focus on precision and quality at every step of the process.',
  },
  {
    number: '04',
    title: 'Monitoring and Optimization',
    description:
      'We continuously monitor campaign performance using real-time analytics. Our team makes data-driven adjustments to maximize results and improve ROI.',
  },
  {
    number: '05',
    title: 'Reporting and Communication',
    description:
      'You receive clear, transparent reports on a regular basis. We keep you informed about progress, results, and any changes to the strategy.',
  },
  {
    number: '06',
    title: 'Continual Improvement',
    description:
      'Digital marketing is always evolving. We continuously refine and improve our approach to stay ahead of trends and deliver lasting results for your business.',
  },
];

export default function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState(0);

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
        <Box sx={{ bgcolor: '#B9FF66', px: 2, py: 0.5, borderRadius: '8px', flexShrink: 0 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1a1a', whiteSpace: 'nowrap' }}>
            Our Working Process
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: '#555', maxWidth: 280, lineHeight: 1.5, fontSize: '0.9rem' }}>
          Step-by-Step Guide to Achieving Your Business Goals
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {steps.map((step, index) => {
          const isOpen = openIndex === index;
          return (
          <Box
            key={index}
            onClick={() => setOpenIndex(isOpen ? -1 : index)}
            sx={{
              border: '1px solid #1a1a1a',
              borderRadius: '28px',
              bgcolor: isOpen ? '#B9FF66' : '#f3f3f3',
              px: { xs: 3, md: 4 },
              py: { xs: 2.5, md: 3 },
              cursor: 'pointer',
              transition: 'background-color 0.25s ease',
              '&:hover': { bgcolor: isOpen ? '#B9FF66' : '#eaeaea' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 } }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    color: '#1a1a1a',
                    lineHeight: 1,
                    minWidth: { xs: 48, md: 60 },
                  }}
                >
                  {step.number}
                </Typography>
                <Typography sx={{ fontWeight: 600, fontSize: { xs: '1rem', md: '1.2rem' }, color: '#1a1a1a' }}>
                  {step.title}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: { xs: 34, md: 40 },
                  height: { xs: 34, md: 40 },
                  borderRadius: '50%',
                  border: '1px solid #1a1a1a',
                  bgcolor: isOpen ? '#1a1a1a' : '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.4rem',
                    fontWeight: 300,
                    color: isOpen ? '#fff' : '#1a1a1a',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {isOpen ? '−' : '+'}
                </Typography>
              </Box>
            </Box>

            {isOpen && step.description && (
              <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(0,0,0,0.2)' }}>
                <Typography variant="body1" sx={{ color: '#1a1a1a', lineHeight: 1.7, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  {step.description}
                </Typography>
              </Box>
            )}
          </Box>
          );
        })}
      </Box>
    </Container>
  );
}
