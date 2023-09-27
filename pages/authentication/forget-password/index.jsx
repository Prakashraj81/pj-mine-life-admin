import React, { useState } from 'react';
import Link from 'next/link';
import { Grid, Box, Card, Stack, Typography, Button } from '@mui/material';
import BlankLayout from '../../../components/layouts/blank/BlankLayout';
// components
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import PageContainer from '../../../components/container/PageContainer';
import Logo from '../../../components/layouts/full/shared/logo/Logo';
import AuthLogin from '../auth/AuthLogin';

const ForgetPassword = () => {
    let [Email, setEmail] = useState("");
    let [NewPassword, setNewPassword] = useState("");
    let [ConfirmPassword, setConfirmPassword] = useState("");

    let [isValid, setIsValid] = useState(null);
    let [showEmptyEmailNotification, setShowEmptyEmailNotification] = useState(false);

    const onChange = (event) => {
        let Id = event.currentTarget.id;
        let value = event.target.value;
        if (Id === "Email") {
            if (value === "") {
                setIsValid(null);
                setShowEmptyEmailNotification(true);
            }
            setEmail(value);
        }
        else if (Id === "NewPassword") {
            setNewPassword(value);
        }
        else {
            setConfirmPassword(value);
        }
    }

    const validateEmail = () => {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if (emailRegex.test(Email)) {
            setShowEmptyEmailNotification(false);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    const onSubmit = () => {
        validateEmail();
        if(isValid === true){
            if(NewPassword === ConfirmPassword){
                console.log("Successful");
            }
            else{
                console.log("Check your password");
            }
        }      
        else{
            console.log("Check your email address");
        }  
    }
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
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Logo />
                            </Box>
                            <Box className="py-5">
                                {showEmptyEmailNotification && (
                                    <p className='text-black'>Email is empty. Please enter a email address.</p>
                                )}                                
                                {isValid === false && <p className='text-black pt-2'>Email is not valid!</p>}
                            </Box>
                            <Box className="py-4">
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    component="label"
                                    mb="5px"
                                >
                                    Email
                                </Typography>
                                <CustomTextField id="Email" onChange={onChange} variant="outlined" fullWidth />
                            </Box>
                            {isValid && (
                                <Box>
                                    <Box className="py-4">
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight={600}
                                            component="label"
                                            mb="5px"
                                        >
                                            New Password
                                        </Typography>
                                        <CustomTextField id='NewPassword' onChange={onChange} variant="outlined" fullWidth />
                                    </Box>
                                    <Box className="py-4">
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight={600}
                                            component="label"
                                            mb="5px"
                                        >
                                            Confirm password
                                        </Typography>
                                        <CustomTextField id='ConfirmPassword' onChange={onChange} variant="outlined" fullWidth />
                                    </Box>
                                </Box>
                            )}

                            <Box className="py-4">
                                <Button
                                    className="bg-primary-color border border-primary-color text-white hover:border-primary-color hover:bg-white hover:text-primary-color"
                                    size="medium"
                                    fullWidth
                                    onClick={onSubmit}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </PageContainer >
    );
};
export default ForgetPassword;

