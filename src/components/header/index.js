import { useNavigate } from 'react-router-dom';
import { ContainerHeader } from './style';
import {
    goToAbout,
    goToContact,
    goToHome,
    goToProjects,
} from '../../routes/coordinator';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import { TabContext, TabList } from '@mui/lab';
// import { TabContext, TabList, TabPanel } from '@mui/lab';

import { useState } from 'react';

export const Header = () => {
    const navigator = useNavigate();

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ContainerHeader>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label='lab API tabs example'
                        >
                            <Tab
                                label='Home'
                                value='1'
                                onClick={(e) => {
                                    goToHome(navigator);
                                }}
                            />
                            <Tab
                                label='Projects'
                                value='2'
                                onClick={(e) => {
                                    goToProjects(navigator);
                                }}
                            />
                            <Tab
                                label='About'
                                value='3'
                                onClick={(e) => {
                                    goToAbout(navigator);
                                }}
                            />
                            <Tab
                                label='Contact'
                                value='4'
                                onClick={(e) => {
                                    goToContact(navigator);
                                }}
                            />
                        </TabList>
                    </Box>
                    {/*
                    <TabPanel value='1'>Home</TabPanel>
                    <TabPanel value='2'>Projects</TabPanel>
                    <TabPanel value='3'>About</TabPanel> 
                    <TabPanel value='3'>Contact</TabPanel> 
                    */}
                </TabContext>
            </Box>
        </ContainerHeader>
    );
};
