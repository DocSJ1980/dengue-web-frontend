import React, { useEffect, useState } from 'react'
// import * as ReactDOM from 'react-dom'
// import { Avatar, Box, Button, Grid, IconButton, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Modal, Paper, TextField, Typography } from '@mui/material'
// import { green } from '@mui/material/colors'
// import { useSelector } from 'react-redux'
// import { selectAuth } from '../services/authSlice'
// import { useUserProfileMutation, useGetTownsMutation, useGetUCsMutation } from '../services/authApi'
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
// // import DatePicker from 'sassy-datepicker'
// import moment from 'moment/moment'
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
// import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
// import { useForm } from "react-hook-form"
// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup';

// const schema = yup.object({
//     fatherName: yup.string("Name needs to be text").required("Father Name is required"),
//     husbandName: yup.string(),
//     contactNo: yup.string().required("Contact No is required"),
//     dob: yup.date("Date of Birth needs to be a date").required("Date of Birth is required"),
//     doa: yup.date("Date of appointment needs to be a date"),
//     address: yup.string("Address needs to be text").required("Complete street address is required"),
//     distList: yup.string("District needs to be text").required("District is required"),
//     townList: yup.string("Town needs to be text"),
//     ucList: yup.string("UC needs to be text"),
//     other_district_name: yup.string("Other district name needs to be text"),
//     other_town_uc: yup.string("Other district's UC and Town name needs to be text"),

//     // husbandName: yup.number().positive().integer().required(),
// }).required();
// const style = { position: 'absolute', top: '50%', left: '50%' }
// const dobMaxDate = new Date("2000-01-01")
// const doaMaxDate = new Date()

const UpdateProfile = () => {
    return (
        <React.Fragment>
            <Box flex={6} p={{ xs: 0, md: 2 }}>
                <Paper sx={{ padding: 1, minHeight: '50%', width: "90%", margin: "5px auto", justifyContent: "center" }}>
                    <Grid container spacing="20px" sx={{ display: "flex", justifyContent: "flex-start", padding: 1, margin: 1, width: "98%", }}>
                        <Grid item xs={12} md={12}>
                            <Typography textAlign={'center'} variant="h4" sx={{ color: "#006600" }}>
                                Update Profile
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </React.Fragment>

    )
}

//     const { register, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(schema)
//     });
//     const onSubmit = data => console.log(JSON.stringify(data, null, 2));
//     console.log(errors)
//     const [dobVisible, setDobVisible] = useState(false)
//     const [doaVisible, setDoaVisible] = useState(false)
//     const toggleDobPicker = () => setDobVisible((v) => !v)
//     const toggleDoaPicker = () => setDoaVisible((v) => !v)
//     const [dob, setDob] = useState(dobMaxDate)
//     const [doa, setDoa] = useState(doaMaxDate)
//     const [district, setDistrict] = useState('')
//     const [townID, setTownID] = useState('')
//     const [ucID, setUcID] = useState('')
//     const handleDobClose = () => setDobVisible(false)
//     const handleDoaClose = () => setDoaVisible(false)
//     const handleDob = (newDate) => {
//         setDob(newDate?.value)
//         setDobVisible(false)
//     }
//     const handleDoa = (newDate) => {
//         setDoa(newDate?.value)
//         setDoaVisible(false)
//     }
//     const formatedDob = moment(dob, 'ddd, dd MMM yyyy HH:mm:ss PKT').format('Do MMM YYYY')
//     const formatedDoa = moment(doa, 'ddd, dd MMM yyyy HH:mm:ss PKT').format('Do MMM YYYY')

//     const [userProfile, userInfo] = useUserProfileMutation()
//     const [getTowns, townInfo] = useGetTownsMutation()
//     const [getUCs, UCInfo] = useGetUCsMutation()
//     const [showEditBox, setShowEditBox] = useState(false)
//     useEffect(() => {
//         async function getUserProfile() {
//             await userProfile()
//         }
//         getUserProfile()
//     }, [])
//     useEffect(() => {
//         async function getTownDetails() {
//             await getTowns()
//         }
//         getTownDetails()
//     }, [district])
//     useEffect(() => {
//         async function getUCDetails(townID) {
//             await getUCs(townID)
//         }
//         getUCDetails(townID)
//     }, [townID])
//     const handleDistChange = (e) => {
//         console.log(district)
//         setDistrict(e.target.value)
//         console.log(district)
//     }
//     const handleTownChange = (e) => {
//         setTownID(e.target.value)
//     }
//     const handleUCChange = (e) => {
//         setUcID(e.target.value)
//     }

//     const paperStyle = { minHeight: '50%', width: "100%", marginRight: "auto", maxWidth: "100%", align: "center" }
//     const { name } = useSelector(selectAuth)
//     const splitName = name.trim().split(' ')
//     let showName = ''
//     for (const split of splitName) {
//         showName = showName.concat(split.charAt(0), " ")
//     }

//     return (
//         <React.Fragment>
//             <Grid>
//                 <Paper style={paperStyle}>
//                     <Grid container justify="center">
//                         <Grid item xs={1}></Grid>
//                         <Grid item xs={10}>
//                             <img src="/src/assets/banner.png" style={{ width: "100%" }} />
//                         </Grid>
//                         <Grid item xs={1}></Grid>
//                     </Grid>
//                     <Grid container justify="center">
//                         <Grid item xs={2}></Grid>
//                         <Grid item xs={3}>
//                             <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//                                 <ListItem>
//                                     <ListItemAvatar>
//                                         <Avatar sx={{ bgcolor: green[800], height: "50px", width: "50px" }}>
//                                             <Typography variant='h6'>
//                                                 {showName}
//                                             </Typography>
//                                         </Avatar>
//                                     </ListItemAvatar>
//                                     <ListItemText primary={name.trim()} secondary={userInfo.isSuccess === true ? ("Phone: " + userInfo.data.user.contactNo) : (null)} />
//                                 </ListItem></List>
//                         </Grid>
//                         <Grid item xs={4}>
//                         </Grid>
//                         <Grid item xs={1}>
//                             <Button variant="contained" disabled={userInfo.isSuccess === true ? (false) : (true)} fullWidth size="large" sx={{ marginTop: 2 }} onClick={() => (setShowEditBox(!showEditBox))}>
//                                 Edit
//                             </Button>
//                         </Grid>
//                         <Grid item xs={2}>
//                         </Grid>
//                     </Grid>
//                 </Paper>
//             </Grid>
//             {showEditBox !== false ? (
//                 // <Grid>
//                 <Paper sx={{ padding: 1, minHeight: '50%', width: "90%", margin: "5px auto", justifyContent: "center" }}>
//                     <Grid container spacing="20px" sx={{ display: "flex", justifyContent: "flex-start", padding: 1, margin: 1, width: "98%", }}>
//                         <Grid item xs={6} md={6} >
//                             <TextField autoComplete="given-name" name="name" disabled fullWidth id="name" label="Name"
//                                 defaultValue={userInfo?.data?.user?.name}
//                             />
//                         </Grid>
//                         <Grid item xs={6} md={6} >
//                             <TextField autoComplete="given-name" name="name" disabled fullWidth id="gender" label="Gender"
//                                 defaultValue={userInfo?.data?.user?.gender}
//                             />
//                         </Grid>
//                         <Grid item xs={6} md={6} >
//                             <TextField autoComplete="given-name" name="desig" disabled fullWidth id="desig" label="Designation"
//                                 defaultValue={userInfo?.data?.user?.desig}
//                             />
//                         </Grid>
//                         <Grid item xs={6} md={6} >
//                             <TextField autoComplete="given-name" name="jobType" disabled fullWidth id="jobType" label="JobType"
//                                 defaultValue={userInfo?.data?.user?.jobType}
//                             />
//                         </Grid>
//                         <Grid item xs={6} md={6} >
//                             <TextField autoComplete="given-name" name="fatherName" required fullWidth id="fatherName" label="Father Name" {...register('fatherName')} error={errors.fatherName ? true : false} helperText={errors.fatherName?.message} />
//                         </Grid>
//                         {userInfo?.data?.user?.gender === 'Female' ? (
//                             <Grid item xs={6} md={6} >
//                                 <TextField autoComplete="given-name" name="husbandName" fullWidth id="husbandName" label="Husband Name" />
//                             </Grid>
//                         ) : (null)}
//                         <Grid item xs={6} md={6}>
//                             <TextField autoComplete="given-name" name="contactNo" required fullWidth id="contactNo" label="Phone Number" defaultValue={userInfo?.data?.user?.contactNo} {...register('contactNo')} error={errors.contactNo ? true : false} helperText={errors.contactNo?.message} />
//                         </Grid>
//                         <Grid item xs={6} md={6}>
//                             <TextField autoComplete="given-name" name="dob" fullWidth id="dob" label="Date of Birth" value={formatedDob} {...register('dob')} error={errors.dob ? true : false} helperText={errors.dob?.message}
//                                 InputProps={{
//                                     endAdornment:
//                                         < InputAdornment position="end" >
//                                             <IconButton aria-label="toggle calender visibility" onClick={() => toggleDobPicker()}>
//                                                 <CalendarMonthIcon />
//                                             </IconButton>
//                                         </InputAdornment >,
//                                 }}
//                             />
//                             <Modal open={dobVisible}
//                                 onClose={handleDobClose}><Box sx={style}>
//                                     {dobVisible ? (
//                                         <CalendarComponent id="calendar" minDate={dobMaxDate} change={handleDob} value={dob} />) : null}
//                                 </Box></Modal>
//                         </Grid>
//                         {userInfo?.data?.user?.jobType === 'Regular' || userInfo?.data?.user?.jobType === 'Contract' ? (
//                             <Grid item xs={6} md={6}>
//                                 <TextField autoComplete="given-name" name="doa" fullWidth id="doa" label="Date of Appointment" value={formatedDoa} {...register('doa')} error={errors.doa ? true : false} helperText={errors.doa?.message}
//                                     InputProps={{
//                                         endAdornment:
//                                             < InputAdornment position="end" >
//                                                 <IconButton aria-label="toggle calender visibility" onClick={() => toggleDoaPicker()}>
//                                                     <CalendarMonthIcon />
//                                                 </IconButton>
//                                             </InputAdornment >,
//                                     }} />
//                                 <Modal open={doaVisible} onClose={handleDoaClose}>
//                                     <Box sx={style}>
//                                         {doaVisible ? (
//                                             <CalendarComponent id="calendar" minDate={doaMaxDate} change={handleDoa} value={doa} />) : null}
//                                     </Box></Modal>
//                             </Grid>
//                         ) : (null)}
//                     </Grid>
//                     {/* Residential Address of sanitary Patrols component */}
//                     <Grid container spacing="20px" sx={{ width: "90%", paddingBottom: 2, paddingRight: 2, marginRight: 7, marginTop: 1, marginLeft: 7, border: 1, borderColor: "#77dd77" }}>
//                         <Grid item xs={12} md={12}>
//                             <Typography textAlign={'center'} sx={{ textColor: "#006600" }}>
//                                 Residential Address Details
//                             </Typography>
//                         </Grid>
//                         <Grid item xs={12} md={12}>
//                             <TextField autoComplete="given-name" name="address" required fullWidth id="address" label="Street Address" {...register('address')} error={errors.address ? true : false} helperText={errors.address?.message} />
//                         </Grid>
//                         <Grid item xs={4} md={4}>
//                             <TextField
//                                 id="distList"
//                                 name="distList"
//                                 select
//                                 fullWidth
//                                 label="District"
//                                 value={district}
//                                 onChange={handleDistChange}
//                             // {...register('distList')} error={errors.distList ? true : false} helperText={errors.distList?.message}
//                             >
//                                 <MenuItem key={'select'} value={''}>--Select--</MenuItem>
//                                 <MenuItem key={'Rawalpindi'} value={'Rawalpindi'}>Rawalpindi</MenuItem>
//                                 <MenuItem key={'otherDistrict'} value={'otherDistrict'}>Other District</MenuItem>
//                             </TextField>
//                         </Grid>
//                         {district === 'Rawalpindi' && townInfo.status === 'pending' ? (
//                             <Grid item xs={4} md={4}>
//                                 <Box sx={{ paddingTop: 2 }}>
//                                     <Typography sx={{ textAlign: "center", color: "orangered" }} >Please wait! loading Town List</Typography>
//                                 </Box>
//                             </Grid>
//                         ) : (null)}
//                         {district === 'Rawalpindi' && townInfo.status === 'rejected' ? (
//                             <Grid item xs={4} md={4}>
//                                 <Box sx={{ paddingTop: 2 }}>
//                                     <Typography sx={{ textAlign: "center", color: "orangered" }} >Error! Please Refresh page</Typography>
//                                 </Box>
//                             </Grid>
//                         ) : (null)}
//                         {district === 'Rawalpindi' && townInfo.isSuccess === true ? (
//                             <>
//                                 <Grid item xs={4} md={4}>
//                                     <TextField id="townList" name="townList" select fullWidth label="Town" value={townID} onChange={handleTownChange}
//                                     // {...register('townList')} error={errors.townList ? true : false} helperText={errors.townList?.message}
//                                     >
//                                         {townInfo.data.map((option) => (
//                                             <MenuItem key={option._id} value={option._id}>
//                                                 {option.townName}
//                                             </MenuItem>
//                                         ))}
//                                     </TextField>
//                                 </Grid>
//                                 {district === 'Rawalpindi' && townID != '' && UCInfo.status === 'pending' ? (
//                                     <Grid item xs={4} md={4}>
//                                         <Box sx={{ paddingTop: 2 }}>
//                                             <Typography sx={{ textAlign: "center", color: "orangered" }} >Please wait! loading UC List</Typography>
//                                         </Box>
//                                     </Grid>
//                                 ) : (null)}
//                                 {district === 'Rawalpindi' && townID != '' && UCInfo.status === 'rejected' ? (
//                                     <Grid item xs={4} md={4}>
//                                         <Box sx={{ paddingTop: 2 }}>
//                                             <Typography sx={{ textAlign: "center", color: "orangered" }} >Error! Please Refresh page</Typography>
//                                         </Box>
//                                     </Grid>
//                                 ) : (null)}
//                                 {district === 'Rawalpindi' && townID != '' && UCInfo.isSuccess === true && UCInfo.data != "No UC Found" ? (
//                                     <Grid item xs={4} md={4} >
//                                         <TextField id="ucList" select fullWidth label="Union Council" value={ucID} onChange={handleUCChange}
//                                         // {...register('ucList')} error={errors.ucList ? true : false} helperText={errors.ucList?.message}
//                                         >
//                                             {UCInfo.data.map((uc_option) => (
//                                                 <MenuItem key={uc_option._id} value={uc_option._id}>
//                                                     {uc_option.survUC}
//                                                 </MenuItem>
//                                             ))}
//                                         </TextField>
//                                     </Grid>
//                                 ) : (null)}
//                             </>
//                         ) : (null)}
//                         {district === 'otherDistrict' ? (
//                             <>
//                                 <Grid item xs={4} md={4}>
//                                     <TextField autoComplete="given-name" name="other_district_name" required fullWidth id="other_district_name" label="Other District Name"
//                                     // {...register('other_district_name')} error={errors.other_district_name ? true : false} helperText={errors.other_district_name?.message}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={4} md={4}>
//                                     <TextField autoComplete="given-name" name="other_town_uc" required fullWidth id="other_town_uc" label="Other District Town and UC"
//                                     // {...register('other_town_uc')} error={errors.other_town_uc ? true : false} helperText={errors.other_town_uc?.message}
//                                     />
//                                 </Grid>
//                             </>
//                         ) : (null)}
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Button variant="contained" fullWidth onClick={handleSubmit(onSubmit)} size="large" sx={{ marginTop: 2 }} >
//                             Update
//                         </Button>
//                     </Grid>
//                 </Paper>
//                 // </Grid >
//             ) : (null)}

//         </React.Fragment >
//     )
// }

export default UpdateProfile