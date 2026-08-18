import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from '@mui/material';
import CustomButton from './CustomButton';

export default function ContactUs() {
  const [inquiryType, setInquiryType] = useState('say_hi');

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
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
            Contact Us
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: '#555', maxWidth: 350, lineHeight: 1.5, fontSize: '0.9rem' }}>
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: '#f3f3f3',
          borderRadius: '35px',
          p: { xs: 4, md: 6 },
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 500, zIndex: 1 }}>
          <form 
            noValidate 
            autoComplete="off" 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message Sent!");
            }}
          >
            {/* Radio Group */}
            <RadioGroup
              row
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              sx={{ mb: 4 }}
            >
              <FormControlLabel
                value="say_hi"
                control={
                  <Radio
                    sx={{
                      color: '#1a1a1a',
                      '&.Mui-checked': { color: '#B9FF66' },
                      '& .MuiSvgIcon-root': { fontSize: 24 },
                    }}
                  />
                }
                label="Say Hi"
                sx={{ mr: 4 }}
              />
              <FormControlLabel
                value="get_quote"
                control={
                  <Radio
                    sx={{
                      color: '#1a1a1a',
                      '&.Mui-checked': { color: '#B9FF66' },
                      '& .MuiSvgIcon-root': { fontSize: 24 },
                    }}
                  />
                }
                label="Get a Quote"
              />
            </RadioGroup>

            {/* Name Field */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ color: '#1a1a1a', mb: 1, fontSize: '0.9rem', fontWeight: 500 }}>
                Name
              </Typography>
              <TextField
                fullWidth
                placeholder="Name"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: '#fff',
                    borderRadius: '14px',
                    '& fieldset': { borderColor: '#1a1a1a' },
                    '&:hover fieldset': { borderColor: '#1a1a1a' },
                    '&.Mui-focused fieldset': { borderColor: '#B9FF66', borderWidth: 2 },
                  },
                }}
              />
            </Box>

            {/* Email Field */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ color: '#1a1a1a', mb: 1, fontSize: '0.9rem', fontWeight: 500 }}>
                Email*
              </Typography>
              <TextField
                fullWidth
                placeholder="Email"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: '#fff',
                    borderRadius: '14px',
                    '& fieldset': { borderColor: '#1a1a1a' },
                    '&:hover fieldset': { borderColor: '#1a1a1a' },
                    '&.Mui-focused fieldset': { borderColor: '#B9FF66', borderWidth: 2 },
                  },
                }}
              />
            </Box>

            {/* Message Field */}
            <Box sx={{ mb: 4 }}>
              <Typography sx={{ color: '#1a1a1a', mb: 1, fontSize: '0.9rem', fontWeight: 500 }}>
                Message*
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={5}
                placeholder="Message"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: '#fff',
                    borderRadius: '14px',
                    '& fieldset': { borderColor: '#1a1a1a' },
                    '&:hover fieldset': { borderColor: '#1a1a1a' },
                    '&.Mui-focused fieldset': { borderColor: '#B9FF66', borderWidth: 2 },
                  },
                }}
              />
            </Box>

            {/* Submit Button */}
            <CustomButton type="submit" variant="contained" fullWidth>
              Send Message
            </CustomButton>
          </form>
        </Box>

        {/* Right side illustration space (hidden on mobile) */}
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            right: '-10%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '40%',
            opacity: 0.1,
          }}
        >
          {/* Placeholder for a potential illustration to match Positivus style */}
          <Box
            sx={{
              width: '100%',
              aspectRatio: '1',
              bgcolor: '#1a1a1a',
              clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
