import React from 'react';
import { Button, ButtonGroup, Paper } from '@mui/material';

const ReportActions: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        background: '#fff',
        p: 2,
        width: '100%',
        my: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <ButtonGroup fullWidth={true} variant="contained" color="inherit">
        <Button sx={{ flex: 1 }}>
          📝 Ny tilstandsrapport
        </Button>
        <Button sx={{ flex: 1 }}>
          🔄 Alle Rapporter
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default ReportActions;
