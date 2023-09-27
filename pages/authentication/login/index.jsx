import Link  from 'next/link';
import { Grid, Box, Card, Stack, Typography } from '@mui/material';
import BlankLayout from '../../../components/layouts/blank/BlankLayout';
// components
import PageContainer from '../../../components/container/PageContainer';
import Logo from '../../../components/layouts/full/shared/logo/Logo';
import AuthLogin from '../auth/AuthLogin';

const Login2 = () => {  
  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
              <Box className="pb-7" display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin                
                subtitle={
                  <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                    <Typography color="textSecondary" variant="h6" fontWeight="500">
                      New to Admin?
                    </Typography>
                    <Typography
                      component={Link}
                      className="text-primary-color"
                      href="/authentication/register"
                      fontWeight="500"
                      sx={{
                        textDecoration: 'none',                        
                      }}
                    >
                      Create an account
                    </Typography>
                  </Stack>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};
export default Login2;

