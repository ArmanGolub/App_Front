import { Link as RouterLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Checkbox, FormControlLabel, Link, Stack, TextField, Typography } from '@mui/material';

import { Cridentials } from '@/types';
import { useAuth } from '@/providers';

const LoginForm = () => {
  const { login, isLoading } = useAuth();

  const { values, touched, errors, handleChange, handleSubmit } = useFormik<Cridentials>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Обязательное поле').email('Введите корректный e-mail'),
      password: yup.string().required('Обязательное поле'),
    }),
    onSubmit: login,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3} sx={{ width: 345, textAlign: 'center' }}>
        <Typography component="h1" variant="h1">
          Вход в учетную запись
        </Typography>

        <TextField
          name="email"
          label="E-mail"
          value={values.email}
          autoComplete="email"
          placeholder="Введите e-mail"
          onChange={handleChange}
          disabled={isLoading}
          error={Boolean(touched.email && errors.email)}
          helperText={touched.email && errors.email}
          fullWidth
        />

        <TextField
          name="password"
          label="Пароль"
          type="password"
          value={values.password}
          autoComplete="current-password"
          onChange={handleChange}
          disabled={isLoading}
          error={Boolean(touched.password && errors.password)}
          helperText={touched.password && errors.password}
          placeholder="Введите пароль"
          fullWidth
        />

        <Button type="submit" variant="contained" size="large" disabled={isLoading} fullWidth>
          Войти
        </Button>

        <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between', px: 1 }}>
          <FormControlLabel label="Запомнить меня" control={<Checkbox size="small" />} />

          <Link component={RouterLink} to="/">
            Забыли пароль?
          </Link>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;
