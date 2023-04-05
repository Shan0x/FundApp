import { forwardRef, other } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Stack, Typography, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import React from 'react';
import PrettyNumber from 'react-pretty-numbers';

const Iconify = forwardRef((
  { icon, width = 20, sx, ...other }, ref) => (
  <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
));

const IconStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));


export function FundSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Stack sx={{
      py: 5,
      textAlign: 'center',
      color: (theme) => theme.palette[color].darker,
      bgcolor: (theme) => theme.palette[color].lighter,
      ...sx,
    }}
      {...other}
    >
      <IconStyle sx={{
        color: (theme) => theme.palette[color].dark,
        backgroundImage: (theme) =>
          `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
            theme.palette[color].dark,
            0.24
          )} 100%)`,
      }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </IconStyle>
      <Typography variant="h3">
        <PrettyNumber precision={2}>{total}</PrettyNumber>
      </Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>

    </Stack>
  );
}