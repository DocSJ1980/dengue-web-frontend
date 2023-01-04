import React, { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom'
import { Avatar, Box, Button, Grid, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Modal, Paper, TextField, Typography } from '@mui/material'
// import { green } from '@mui/material/colors'
// import { useSelector } from 'react-redux'
// import { selectAuth } from '../services/authSlice'
// import { useGetMyUCsMutation } from '../services/authApi'
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
// // import DatePicker from 'sassy-datepicker'
// import moment from 'moment/moment'
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
// import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import CameraButton from './camera'

// const style = { position: 'absolute', top: '50%', left: '50%' }

const Issues = () => {
    //     // const onSubmit = data => console.log(JSON.stringify(data, null, 2));
    //     const [getMyUCs, myUCInfo] = useGetMyUCsMutation()

    //     const paperStyle = { minHeight: '50%', width: "100%", marginRight: "auto", maxWidth: "100%", align: "center" }
    //     useEffect(() => {
    //         async function getMyUCDetails() {
    //             await getMyUCs()
    //         }
    //         getMyUCDetails()
    //     }, [])

    return (
        <React.Fragment>
            <Box flex={6} p={{ xs: 0, md: 2 }}>
                <Paper sx={{ padding: 1, minHeight: '50%', width: "90%", margin: "5px auto", justifyContent: "center" }}>
                    <Grid container spacing="20px" sx={{ display: "flex", justifyContent: "flex-start", padding: 1, margin: 1, width: "98%", }}>
                        <Grid item xs={12} md={12}>
                            <Typography textAlign={'center'} variant="h4" sx={{ textColor: "#006600" }}>
                                Issue Reporting Form
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>

            </Box>
        </React.Fragment >
    )
}

export default Issues