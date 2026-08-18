import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const caseStudies = [
  {
    description:
      'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  },
  {
    description:
      'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  },
  {
    description:
      'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
  },
];

function CaseStudyCard({ description }) {
  return (
    <Box
      component="article"
      sx={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: { xs: 232, sm: 111 },
        width: { xs: 'calc(100vw - 84px)', sm: 'auto' },
        flex: { xs: '0 0 calc(100vw - 84px)', sm: '1 1 0' },
        px: { xs: 3.5, sm: 0 },
        py: { xs: 3.75, sm: 0 },
        '&:not(:last-child)': {
          borderRight: { xs: 'none', sm: '1px solid rgba(255, 255, 255, 0.65)' },
          pr: { xs: 3.5, sm: 4.75 },
        },
        
        '&:not(:first-of-type)': {
          pl: { xs: 3.5, sm: 4.75 },
        },
      }}
    >
      <Typography
        component="p"
        sx={{
          maxWidth: { xs: 245, sm: 190 },
          color: '#f4f4f5',
          fontSize: { xs: 13, sm: 11.5 },
          fontWeight: 400,
          lineHeight: 1.24,
          letterSpacing: '0.005em',
          m: 0,
        }}
      >
        {description}
      </Typography>

      <Link
        href="#contact"
        underline="none"
        aria-label="Learn more about this case study"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          alignSelf: 'flex-start',
          gap: 0.75,
          mt: { xs: 2.5, sm: 1.25 },
          color: '#a8ff4f',
          fontSize: { xs: 14, sm: 13 },
          lineHeight: 1,
          transition: 'color 160ms ease, transform 160ms ease',
          '&:hover': {
            color: '#d0ff9b',
            transform: 'translateX(2px)',
          },
          '&:focus-visible': {
            outline: '2px solid #a8ff4f',
            outlineOffset: 4,
            borderRadius: 1,
          },
        }}
      >
        Learn more
        <ArrowOutwardRoundedIcon sx={{ fontSize: { xs: 19, sm: 18 } }} aria-hidden="true" />
      </Link>
    </Box>
  );
}

export default function CaseStudies() {
  return (
    <Box
      component="section"
      aria-labelledby="case-studies-title"
      sx={{
        width: '100%',
        maxWidth: 1160,
        mx: 'auto',
        px: { xs: 2.5, sm: 2.5 },
        py: { xs: 4, sm: 6 },
      }}
    >
      <Box
        component="header"
        sx={{
          display: 'flex',
          alignItems: { xs: 'center', sm: 'flex-start' },
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2.75, sm: 3 },
        }}
      >
        <Typography
          id="case-studies-title"
          component="h2"
          sx={{
            display: 'inline-block',
            m: 0,
            px: 0.5,
            py: 0.15,
            borderRadius: '8px',
            bgcolor: '#B9FF66',
            color: '#101116',
            fontSize: { xs: 28, sm: 24 },
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
          }}
        >
          Case Studies
        </Typography>

        <Typography
          component="p"
          sx={{
            maxWidth: { xs: 325, sm: 330 },
            m: 0,
            color: '#171820',
            fontSize: { xs: 13, sm: 11.5 },
            fontWeight: 400,
            lineHeight: 1.25,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Explore Real-Life Examples of Our Proven Digital Marketing
          <br />
          Success through Our Case Studies
        </Typography>
      </Box>
      <Box
        aria-label="Case studies carousel"
        sx={{
          mt: { xs: 7.75, sm: 7.5 },
          mr: { xs: -2.5, sm: 0 },
          width: { xs: 'calc(100% + 20px)', sm: '100%' },
          overflowX: { xs: 'auto', sm: 'visible' },
          overflowY: 'hidden',
          scrollSnapType: { xs: 'x mandatory', sm: 'none' },
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >

        <Box 
          sx={{
            boxSizing: 'border-box',
            display: { xs: 'flex', sm: 'grid' },
            gridTemplateColumns: { sm: 'repeat(3, minmax(0, 1fr))' },
            gap: { xs: 2.5, sm: 0 },
            minWidth: { xs: 'max-content', sm: 0 },
            px: { xs: 0.875, sm: 4.5 },
            py: { xs: 0, sm: 5.25 },
            minHeight: { xs: 232, sm: 196 },
            borderRadius: { xs: 0, sm: '26px' },
            bgcolor: { xs: 'transparent', sm: '#191a22' },
            '& > article': {
              scrollSnapAlign: 'start',
              borderRadius: { xs: '25px', sm: 0 },
              bgcolor: { xs: '#191a22', sm: 'transparent' },
              color: '#f4f4f5',
            },
          }}
        >
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.description} {...caseStudy} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
