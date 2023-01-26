import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Card, Grid, Paper, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectMyUC } from '../features/auth/authSlice'



const UcMgmt = () => {
    const myUCs = useSelector(selectMyUC)
    const [value, setValue] = useState(myUCs[0]._id);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log(myUCs)
    return (
        <React.Fragment>
            <Paper sx={{ padding: 1, minHeight: '50%', maxWidth: "90%", margin: "5px auto", justifyContent: "center" }}>
                <Typography textAlign={'center'} variant="h4" color="text.primary" >
                    UC Management
                </Typography>
                <Box sx={{ bgcolor: 'background.paper', maxWidth: '100%' }}>
                    <TabContext value={value}>
                        <TabList
                            variant="scrollable"
                            scrollButtons={false}
                            allowScrollButtonsMobile
                            onChange={handleChange}>
                            {myUCs.map((myUC) => {
                                return <Tab key={myUC._id} label={myUC.survUC} value={myUC._id} />
                            })}
                        </TabList>
                        {myUCs.map((myUC) => {
                            return <TabPanel index={myUC._id} value={myUC._id}>{myUC.survUC}</TabPanel>
                        })}

                    </TabContext>
                </Box>
            </Paper>
        </React.Fragment >
    )
}

export default UcMgmt