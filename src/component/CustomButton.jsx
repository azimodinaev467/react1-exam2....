import { Button } from '@mui/material';

export default function CustomButton({
  children,
  variant = 'contained',
  onClick,
  fullWidth = false,
  sx = {},
}) {
  const baseStyles = {
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    borderRadius: '8px',
    px: 4,
    py: 1.8,
  };

  const variantStyles = {
    contained: {
      bgcolor: '#1a1a1a',
      color: '#fff',
      '&:hover': { bgcolor: '#333' },
    },
    outlined: {
      color: '#1a1a1a',
      borderColor: '#1a1a1a',
      '&:hover': { bgcolor: '#1a1a1a', color: '#fff' },
    },
    green: {
      bgcolor: '#B9FF66',
      color: '#1a1a1a',
      '&:hover': { bgcolor: '#a8ef55' },
    },
  };

  return (
    <Button
      variant={variant === 'green' ? 'contained' : variant}
      fullWidth={fullWidth}
      onClick={onClick}
      size="large"
      sx={{ ...baseStyles, ...(variantStyles[variant] || {}), ...sx }}
    >
      {children}
    </Button>
  );
}
