import React from "react";
import TopCards from "../../components/dashboard/TopCard";
import CustomerTickets from "../../components/dashboard/CustomerTickets";
import SalesOverview from './../../components/dashboard/SalesOverview';
import YearlyBreakup from './../../components/dashboard/YearlyBreakup';
import MonthlyEarnings from './../../components/dashboard/MonthlyEarnings';
import FullLayout from './../../components/layouts/full/FullLayout';
import { Grid, Box, Card, Stacck, Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TopCards />
          </Grid>          
          <Grid item xs={12} lg={12}>
            <CustomerTickets />
          </Grid> 
        </Grid>
      </Box>
    </>
  )
}

Dashboard.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};