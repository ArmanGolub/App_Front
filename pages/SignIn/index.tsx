import { Box } from '@mui/material';

import { useTitle } from '@/providers';
import theme from '@/theme';

import { LoginForm } from './components';

const SignInPage = () => {
  useTitle({ title: 'Авторизация' });

  return (
    <Box
      sx={{
        minWidth: '100vh',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        m: 'auto',
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Box sx={{ mb: 10 }}>
        <img src="/primary-logo.png" alt="primary-logo" />
      </Box>

      <LoginForm />
    </Box>
  );
};

export default SignInPage;
