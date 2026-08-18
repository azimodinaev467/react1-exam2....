import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Facebook, LinkedIn, Star, Twitter } from '@mui/icons-material';

const navigationLinks = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'];

const socialLinks = [
  { label: 'LinkedIn', icon: LinkedIn, href: 'https://www.linkedin.com' },
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com' },
  { label: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#fff',
        color: '#fff',
      }}
    >
      <Box
        component="footer"
        sx={{
          width: { xs: '100%', sm: 'calc(100% - 48px)', md: 'calc(100% - 80px)' },
          maxWidth: 1200,
          mx: 'auto',
          mb: { xs: 0, sm: 3.5 },
          px: { xs: 3, sm: 4, md: 5 },
          pt: { xs: 4, sm: 4.5, md: 4.25 },
          pb: { xs: 3.5, sm: 4, md: 3.75 },
          borderRadius: { xs: '26px 26px 0 0', sm: '30px 30px 0 0' },
          bgcolor: '#191a22',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'auto 1fr auto' },
            alignItems: 'center',
            columnGap: { md: 7, lg: 11 },
            rowGap: { xs: 3.25, md: 0 },
          }}
        >
          {/* Logo */}
          <Box
            component="a"
            href="#top"
            aria-label="Positivus home"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              gap: 0.55,
              width: '100%',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Star sx={{ fontSize: { xs: 24, sm: 28 }, transform: 'rotate(-18deg)' }} />
            <Typography
              component="span"
              sx={{
                fontSize: { xs: 24, sm: 28 },
                fontWeight: 600,
                letterSpacing: '-0.6px',
                lineHeight: 1,
              }}
            >
              Positivus
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box
            component="nav"
            aria-label="Footer navigation"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'center' },
              gap: { xs: 2, sm: 2.5, md: 3.75 },
            }}
          >
            {navigationLinks.map((link) => (
              <Typography
                key={link}
                component="a"
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                sx={{
                  color: '#f4f4f5',
                  fontSize: { xs: 15, sm: 15 },
                  lineHeight: 1.4,
                  textDecoration: 'underline',
                  textUnderlineOffset: '2px',
                  transition: 'color 160ms ease',
                  '&:hover': { color: '#B9FF66' },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          {/* Social Links (Mobile goes below newsletter, but desktop here) */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: { xs: 'center', md: 'flex-end' },
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {socialLinks.map(({ label, icon: SocialIcon, href }) => (
              <IconButton
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                sx={{
                  width: 30,
                  height: 30,
                  p: 0.5,
                  color: '#191a22',
                  bgcolor: '#fff',
                  '& svg': { fontSize: 18 },
                  '&:hover': { bgcolor: '#B9FF66' },
                }}
              >
                <SocialIcon />
              </IconButton>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(250px, 1fr) minmax(390px, 1.12fr)' },
            gap: { xs: 4, sm: 5, md: 7 },
            alignItems: 'center',
            mt: { xs: 4.5, sm: 5, md: 6 },
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              component="h2"
              sx={{
                display: 'inline-block',
                px: 1,
                py: 0.3,
                mb: 2,
                borderRadius: '8px',
                bgcolor: '#B9FF66',
                color: '#101116',
                fontSize: 16,
                fontWeight: 600,
                lineHeight: 1.25,
              }}
            >
              Contact us:
            </Typography>
            <Stack spacing={1.5} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography sx={{ color: '#f0f0f2', fontSize: { xs: 15, sm: 15 }, lineHeight: 1.45 }}>
                Email: info@positivus.com
              </Typography>
              <Typography sx={{ color: '#f0f0f2', fontSize: { xs: 15, sm: 15 }, lineHeight: 1.45 }}>
                Phone: 555-567-8901
              </Typography>
              <Typography sx={{ color: '#f0f0f2', fontSize: { xs: 15, sm: 15 }, lineHeight: 1.45 }}>
                Address: 1234 Main St
              </Typography>
              <Typography sx={{ color: '#f0f0f2', fontSize: { xs: 15, sm: 15 }, lineHeight: 1.45 }}>
                Moonstone City, Stardust State 12345
              </Typography>
            </Stack>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            aria-label="Newsletter subscription"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'stretch',
              gap: { xs: 2, sm: 2.5 },
              p: { xs: 3, sm: 5 },
              borderRadius: '14px',
              bgcolor: '#292a32',
            }}
          >
            <InputBase
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setIsSubscribed(false);
              }}
              type="email"
              required
              placeholder="Email"
              inputProps={{ 'aria-label': 'Email address' }}
              sx={{
                flex: 1,
                minWidth: 0,
                height: 55,
                px: 2.5,
                border: '1px solid #d7d7db',
                borderRadius: '14px',
                color: '#fff',
                fontSize: 15,
                '& input::placeholder': { color: '#e8e8eb', opacity: 1 },
                '&:focus-within': { borderColor: '#B9FF66' },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                minWidth: { xs: '100%', sm: 180 },
                height: 55,
                px: 3,
                borderRadius: '14px',
                bgcolor: '#B9FF66',
                color: '#101116',
                fontSize: 16,
                fontWeight: 500,
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': { bgcolor: '#c7ff70', boxShadow: 'none' },
              }}
            >
              {isSubscribed ? 'Subscribed!' : 'Subscribe to news'}
            </Button>
          </Box>
        </Box>

        {/* Social Links (Mobile layout only) */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: 'center',
            display: { xs: 'flex', md: 'none' },
            mt: 4,
          }}
        >
          {socialLinks.map(({ label, icon: SocialIcon, href }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              sx={{
                width: 36,
                height: 36,
                p: 1,
                color: '#191a22',
                bgcolor: '#fff',
                '& svg': { fontSize: 20 },
                '&:hover': { bgcolor: '#B9FF66' },
              }}
            >
              <SocialIcon />
            </IconButton>
          ))}
        </Stack>

        <Box
          sx={{
            mt: { xs: 4, sm: 5, md: 5 },
            pt: { xs: 3, sm: 3.5, md: 4 },
            borderTop: '1px solid rgba(255, 255, 255, 0.3)',
            display: 'flex',
            alignItems: { xs: 'center', md: 'center' },
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2, sm: 3 },
          }}
        >
          <Typography sx={{ color: '#f0f0f2', fontSize: { xs: 14, sm: 14 }, lineHeight: 1.5 }}>
            © 2023 Positivus. All Rights Reserved.
          </Typography>
          <Typography
            component="a"
            href="#privacy-policy"
            sx={{
              color: '#f0f0f2',
              fontSize: { xs: 14, sm: 14 },
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              '&:hover': { color: '#B9FF66' },
            }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
