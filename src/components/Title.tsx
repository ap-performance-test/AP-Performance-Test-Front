import { ThemeProvider } from '@emotion/react';
import { createTheme, AppBar, Toolbar, Typography } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';

const TitleTheme = createTheme({
  typography: {
    body1: {
      fontFamily: 'Helvetica',
      fontSize: '2rem',
      fontWeight: 350,
      letterSpacing: '0.1rem',
    },
  },
});

const Title = () => {
  return (
    <ThemeProvider theme={TitleTheme}>
      <AppBar
        position="relative"
        color="primary"
        sx={{ boxShadow: 'none', mt: 0, mb: 0 }}
      >
        <Toolbar sx={{ justifyContent: 'center', pt: 2, pb: 2 }}>
          <FiberManualRecord sx={{ mr: 2 }} />
          <Typography variant="body1" color="default">
            CNU WIFI 속도측정
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Title;
