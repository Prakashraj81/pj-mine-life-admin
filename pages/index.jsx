import React, { useState, useEffect } from "react";
import { Grid, Box, Card, Stack, Typography } from '@mui/material';
import PageContainer from '../components/container/PageContainer';
import AuthLogin from "./authentication/auth/AuthLogin";
import Login2 from './authentication/login/index';

// components
import Dashboard from "./dashboard";
import FullLayout from '../components/layouts/full/FullLayout';
import BlankLayout from '../components/layouts/blank/BlankLayout';

export default function Home() {
  let [Authkey, setAuthkey] = useState(0);
  let sessionValue = 1;

  useEffect(() => {
    setAuthkey(sessionValue);
  }, [sessionValue]);

  return (
    <>
      {Authkey ?
        <>
          <FullLayout>
            <PageContainer title="Dashboard" description="Dashboard">
              <Dashboard />
            </PageContainer>
          </FullLayout>
        </>
        :
        <>
          <BlankLayout>
            <PageContainer title="Login" description="Login">
              <Box>
                <Login2 />
              </Box>
            </PageContainer>
          </BlankLayout>
        </>
      }
    </>
  );
}
