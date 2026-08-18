import { useCallback, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const testimonials = [
  {
    quote: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
  },
  {
    quote: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'Jane Doe',
    role: 'CEO at ABC Ltd',
  },
  {
    quote: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'Michael Brown',
    role: 'Founder at Acme Inc',
  },
];

export default function Testimonials() {
  const railRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = useCallback((index) => {
    const rail = railRef.current;
    const card = rail?.querySelector(`[data-card-index="${index}"]`);
    if (!rail || !card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    setActiveIndex(index);
  }, []);

  const handleRailScroll = useCallback((event) => {
    const rail = event.currentTarget;
    const cards = Array.from(rail.querySelectorAll('[data-card-index]'));
    const railCenter = rail.scrollLeft + rail.clientWidth / 2;

    const closestCard = cards.reduce(
      (closest, card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - railCenter);
        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );

    if (closestCard.index !== activeIndex) {
      setActiveIndex(closestCard.index);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (!window.matchMedia('(min-width: 600px)').matches) return undefined;

    const frame = window.requestAnimationFrame(() => {
      const card = railRef.current?.querySelector('[data-card-index="1"]');
      card?.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });
      setActiveIndex(1);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const goToPrevious = () => scrollToCard(Math.max(0, activeIndex - 1));
  const goToNext = () => scrollToCard(Math.min(testimonials.length - 1, activeIndex + 1));

  return (
    <Box sx={{ width: '100%', maxWidth: 1120, mx: 'auto', px: { xs: 2.5, sm: 2.5 }, py: { xs: 4, sm: 6 } }}>

      <Box
        component="header"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', sm: 'baseline' },
          justifyContent: { xs: 'center', sm: 'flex-start' },
          gap: { xs: 1.5, sm: 3.5 },
          mb: { xs: 4.5, sm: 5.5 },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <Typography
          component="h2"
          sx={{
            display: 'inline-block',
            bgcolor: '#B9FF66',
            borderRadius: '8px',
            px: 0.6,
            py: 0.15,
            fontSize: { xs: '1.8rem', sm: '2rem' },
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: '-0.035em',
            whiteSpace: 'nowrap',
          }}
        >
          Testimonials
        </Typography>
        <Typography sx={{ maxWidth: 300, fontSize: { xs: '0.78rem', sm: '0.85rem' }, lineHeight: 1.25 }}>
          Hear from Our Satisfied Clients: Read Our Testimonials
          <br />
          to Learn More about Our Digital Marketing Services
        </Typography>
      </Box>

      <Box
        component="section"
        aria-label="Client testimonials"
        sx={{
          bgcolor: '#191a22',
          borderRadius: { xs: '25px', sm: '26px' },
          overflow: 'hidden',
          py: { xs: 4.5, sm: 5.75 },
        }}
      >
        <Box
          ref={railRef}
          onScroll={handleRailScroll}
          role="region"
          aria-label="Testimonials carousel"
          tabIndex={0}
          sx={{
            display: 'flex',
            gap: { xs: 2, sm: 3.5 },
            overflowX: 'auto',
            px: { xs: 2.5, sm: 3.5 },
            pb: 1,
            scrollSnapType: 'x mandatory',
            scrollPaddingInline: { xs: 20, sm: 28 },
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            '&:focus-visible': { outline: '2px solid #B9FF66', outlineOffset: '-2px' },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={testimonial.name}
              data-card-index={index}
              component="article"
              sx={{
                flex: { xs: '0 0 calc(100vw - 76px)', sm: '0 0 342px' },
                minWidth: 0,
                scrollSnapAlign: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  minHeight: { xs: 214, sm: 132 },
                  display: 'flex',
                  alignItems: 'center',
                  p: { xs: 2.5, sm: 3.5 },
                  border: '1px solid #B9FF66',
                  borderRadius: '27px 27px 27px 0',
                  color: '#f5f5f5',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: { xs: 38, sm: 44 },
                    bottom: -11,
                    width: 20,
                    height: 20,
                    bgcolor: '#191a22',
                    borderLeft: '1px solid #B9FF66',
                    borderBottom: '1px solid #B9FF66',
                    transform: 'rotate(-45deg)',
                  },
                }}
              >
                <Typography
                  component="p"
                  sx={{ position: 'relative', zIndex: 1, m: 0, fontSize: { xs: '0.76rem', sm: '0.72rem' }, lineHeight: 1.32 }}
                >
                  "{testimonial.quote}"
                </Typography>
              </Box>
              <Box sx={{ pl: { xs: 6.5, sm: 5.5 }, pt: 3.1 }}>
                <Typography sx={{ color: '#B9FF66', fontSize: '0.76rem', lineHeight: 1.2, fontWeight: 500 }}>
                  {testimonial.name}
                </Typography>
                <Typography sx={{ color: '#f3f3f3', fontSize: '0.7rem', lineHeight: 1.25, mt: 0.25, whiteSpace: 'nowrap' }}>
                  {testimonial.role}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Navigation */}
        <Box
          component="nav"
          aria-label="Testimonial navigation"
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            maxWidth: { xs: 360, sm: 390 },
            mx: 'auto',
            mt: { xs: 5.5, sm: 6.25 },
            px: { xs: 2.5, sm: 0 },
          }}
        >
          <IconButton
            aria-label="Previous testimonial"
            onClick={goToPrevious}
            disabled={activeIndex === 0}
            sx={{
              justifySelf: 'start',
              color: '#777982',
              p: 0.5,
              '&:hover': { color: '#B9FF66', bgcolor: 'transparent' },
              '&.Mui-disabled': { color: '#555761' },
            }}
          >
            <ArrowBackRoundedIcon sx={{ fontSize: 21 }} />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
            {testimonials.map((testimonial, index) => (
              <Box
                key={testimonial.name}
                component="button"
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => scrollToCard(index)}
                sx={{
                  width: 8,
                  height: 8,
                  p: 0,
                  border: 0,
                  borderRadius: '50%',
                  bgcolor: activeIndex === index ? '#B9FF66' : '#f5f5f5',
                  cursor: 'pointer',
                  transition: 'transform 160ms ease, background-color 160ms ease',
                  '&:hover': { transform: 'scale(1.35)' },
                }}
              />
            ))}
          </Box>

          <IconButton
            aria-label="Next testimonial"
            onClick={goToNext}
            disabled={activeIndex === testimonials.length - 1}
            sx={{
              justifySelf: 'end',
              color: '#f5f5f5',
              p: 0.5,
              '&:hover': { color: '#B9FF66', bgcolor: 'transparent' },
              '&.Mui-disabled': { color: '#555761' },
            }}
          >
            <ArrowForwardRoundedIcon sx={{ fontSize: 21 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
