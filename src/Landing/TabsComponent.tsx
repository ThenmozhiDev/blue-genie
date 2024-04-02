import { Tab, Tabs, Typography } from '@mui/material';

import React from 'react';
interface TabProps {
    tabValue: number;
    handleChange: (e: any, newValue: any) => void;
}

const TabsComponent = ({ tabValue, handleChange }: TabProps) => {
    const tabs = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

    return (
        <Tabs value={tabValue} onChange={handleChange}>
            {tabs.map((tab, index) => (
                <Tab key={index} label={<Typography variant="body1">{tab}</Typography>} />
            ))}
        </Tabs>
    );
};

export default TabsComponent;