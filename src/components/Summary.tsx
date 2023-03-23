import { ThemeProvider } from '@emotion/react';
import { createTheme, Box, Typography, Container } from '@mui/material';

const SummaryTheme = createTheme({
  typography: {
    body1: {
      fontFamily: 'Helvetica',
      fontSize: '2rem',
      fontWeight: 350,
      letterSpacing: '0.1rem',
    },
  },
});

const Summary = () => {
  return (
    <ThemeProvider theme={SummaryTheme}>
      <Box
        sx={{
          pt: 5,
          pb: 5,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="primary"
            fontWeight="350"
            gutterBottom
          >
            사용방법
          </Typography>
          <Typography variant="h5" align="center" color="primary" paragraph>
            인터넷 속도, 현재위치 속도 지도를 제공합니다.
            <br />
            층수, 호수, 위치 설정후 시작 버튼을 눌러주세요.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Summary;
