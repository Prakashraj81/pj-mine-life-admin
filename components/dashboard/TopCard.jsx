import React from 'react';
import { Box } from '@mui/material';
import CardDataStats from './CardDataStats';
import { IconUsers, IconTicket, IconAddressBook, IconAtom } from '@tabler/icons-react';

const TopCards = () => {
    return (
        <Box>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <CardDataStats title="Total Users" total="1,500" bgColorClass="success.main">
                    <div className="">
                        <IconUsers />
                    </div>
                </CardDataStats>
                <CardDataStats title="Support Tickets" total="2,500" bgColorClass="secondary.main">
                    <div className="">
                        <IconTicket />
                    </div>
                </CardDataStats>
                <CardDataStats title="Contact us" total="2.450" bgColorClass="error.main">
                    <div className="">
                        <IconAddressBook />
                    </div>
                </CardDataStats>
                <CardDataStats title="Consultations" total="3.456" bgColorClass="primary.main">
                    <div className="">
                        <IconAtom />
                    </div>
                </CardDataStats>
            </div>
        </Box>
    );
};

export default TopCards;
