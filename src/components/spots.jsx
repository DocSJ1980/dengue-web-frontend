import { Box, Button, Grid, MenuItem, Paper, TextField, Typography, } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import CameraButton from './camera'
import { useSelector } from 'react-redux'
import { selectMyUC } from '../features/auth/authSlice'
import AddLocationIcon from '@mui/icons-material/AddLocation'
import useGeoLocation from '../hooks/getLocation'
import { Stack } from '@mui/system'
import UcList from './ucList'
// import { MapContainer, TileLayer } from 'react-leaflet'
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

// mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94ODAiLCJhIjoiY2xjaTBsbTZhNDZiejN3cWszaHZwMDM3ayJ9._9eUwQd3K6wPIS5dK0Ingg';
// const mapContainer = new mapboxgl.Map({
//     container: 'mapContainer',
//     style: 'mapbox://styles/mapbox/streets-v11'
// });

const Spots = () => {
    const [enabled, setEnabled] = useState(false);
    const [location, accuracy, error] = useGeoLocation(enabled, null, null, { enableHighAccuracy: true });

    const getMyLocation = () => {

        setEnabled(!enabled);
    };
    return (
        <React.Fragment>
            <Box flex={6} p={{ xs: 0, md: 2 }}>
                <Paper sx={{ paddingBottom: 1, width: "90%", margin: "5px auto", justifyContent: "center", bgcolor: "backgroud.default", color: "text.primary" }}>
                    <Typography textAlign={'center'} variant="h4" color="text.primary" >
                        Spots
                    </Typography>
                    <Typography textAlign={'center'} variant="h6" color="text.primary">
                        Spot Reporting Form
                    </Typography>
                </Paper>
                {/* <Paper sx={{ padding: 1, minHeight: '50%', width: "90%", margin: "5px auto", justifyContent: "center" }}> */}
                <Paper sx={{ paddingBottom: 1, width: "90%", margin: "5px auto", justifyContent: "center", bgcolor: "backgroud.default", color: "text.primary" }}>
                    <Grid container spacing={{ md: "20px", xs: "5px", sm: "5px", }} sx={{ display: "flex", justifyContent: "flex-start", padding: 1, margin: 1, width: "98%", }}>
                        <Grid item xs={12} md={4} >
                            <UcList />
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <TextField id="spotCategory" size={"small"} select fullWidth label="Spot Category" value={''}>
                                <MenuItem key={1} value={"Abandoned Buildings"}>Abandoned Buildings</MenuItem>
                                <MenuItem key={2} value={"Academy/Tuition Center"}>Academy/Tuition Center</MenuItem>
                                <MenuItem key={3} value={"Bachelor House"}>Bachelor House</MenuItem>
                                <MenuItem key={4} value={"Bakery"}>Bakery</MenuItem>
                                <MenuItem key={5} value={"Bank"}>Bank</MenuItem>
                                <MenuItem key={6} value={"Bara/Cattle Farm"}>Bara/Cattle Farm</MenuItem>
                                <MenuItem key={7} value={"Barbar Shops"}>Barbar Shops</MenuItem>
                                <MenuItem key={8} value={"Blocked Drains"}>Blocked Drains</MenuItem>
                                <MenuItem key={9} value={"Book/Stationary Shop"}>Book/Stationary Shop</MenuItem>
                                <MenuItem key={10} value={"Bus Stop"}>Bus Stop</MenuItem>
                                <MenuItem key={11} value={"Car Parking"}>Car Parking</MenuItem>
                                <MenuItem key={12} value={"Car Showroom"}>Car Showroom</MenuItem>
                                <MenuItem key={13} value={"Cement Shop"}>Cement Shop</MenuItem>
                                <MenuItem key={14} value={"Chicken/Mutton/Beef Shop"}>Chicken/Mutton/Beef Shop</MenuItem>
                                <MenuItem key={15} value={"Church"}>Church</MenuItem>
                                <MenuItem key={16} value={"Clinic"}>Clinic</MenuItem>
                                <MenuItem key={17} value={"Cloth Shop"}>Cloth Shop</MenuItem>
                                <MenuItem key={18} value={"College"}>College</MenuItem>
                                <MenuItem key={19} value={"Dispensaries"}>Dispensaries</MenuItem>
                                <MenuItem key={20} value={"Dry Cleaner/Dhobi Ghaat"}>Dry Cleaner/Dhobi Ghaat</MenuItem>
                                <MenuItem key={21} value={"Electric/Electronic Shop"}>Electric/Electronic Shop</MenuItem>
                                <MenuItem key={22} value={"Factories"}>Factories</MenuItem>
                                <MenuItem key={23} value={"Filter Plant"}>Filter Plant</MenuItem>
                                <MenuItem key={24} value={"Flower Shop"}>Flower Shop</MenuItem>
                                <MenuItem key={25} value={"Furniture Showroom"}>Furniture Showroom</MenuItem>
                                <MenuItem key={26} value={"Furniture Workshop"}>Furniture Workshop</MenuItem>
                                <MenuItem key={27} value={"Garbage"}>Garbage</MenuItem>
                                <MenuItem key={28} value={"General Store"}>General Store</MenuItem>
                                <MenuItem key={29} value={"Godowns"}>Godowns</MenuItem>
                                <MenuItem key={30} value={"Government Office"}>Government Office</MenuItem>
                                <MenuItem key={31} value={"Graveyard"}>Graveyard</MenuItem>
                                <MenuItem key={32} value={"Hardware Shop"}>Hardware Shop</MenuItem>
                                <MenuItem key={33} value={"Hospitals"}>Hospitals</MenuItem>
                                <MenuItem key={34} value={"Hostel"}>Hostel</MenuItem>
                                <MenuItem key={35} value={"Hotels"}>Hotels</MenuItem>
                                <MenuItem key={36} value={"House Factory"}>House Factory</MenuItem>
                                <MenuItem key={37} value={"House Godown"}>House Godown</MenuItem>
                                <MenuItem key={38} value={"Imam Bargah"}>Imam Bargah</MenuItem>
                                <MenuItem key={39} value={"Janaza Gah"}>Janaza Gah</MenuItem>
                                <MenuItem key={40} value={"Jewellery Shop"}>Jewellery Shop</MenuItem>
                                <MenuItem key={41} value={"Junkyard"}>Junkyard</MenuItem>
                                <MenuItem key={42} value={"Madrassah"}>Madrassah</MenuItem>
                                <MenuItem key={43} value={"Marble Factory"}>Marble Factory</MenuItem>
                                <MenuItem key={44} value={"Marriage Halls"}>Marriage Halls</MenuItem>
                                <MenuItem key={45} value={"Mazaar"}>Mazaar</MenuItem>
                                <MenuItem key={46} value={"Medical Store"}>Medical Store</MenuItem>
                                <MenuItem key={47} value={"Milk Shop"}>Milk Shop</MenuItem>
                                <MenuItem key={48} value={"Mobile Tower"}>Mobile Tower</MenuItem>
                                <MenuItem key={49} value={"Mobile/Accessory Shops"}>Mobile/Accessory Shops</MenuItem>
                                <MenuItem key={50} value={"Mosques"}>Mosques</MenuItem>
                                <MenuItem key={51} value={"Nursery"}>Nursery</MenuItem>
                                <MenuItem key={52} value={"Open Plot - Other"}>Open Plot - Other</MenuItem>
                                <MenuItem key={53} value={"Open plot with Pit"}>Open plot with Pit</MenuItem>
                                <MenuItem key={54} value={"Parks"}>Parks</MenuItem>
                                <MenuItem key={55} value={"Pet Shop"}>Pet Shop</MenuItem>
                                <MenuItem key={56} value={"Petrol/CNG Pump"}>Petrol/CNG Pump</MenuItem>
                                <MenuItem key={57} value={"Plaza"}>Plaza</MenuItem>
                                <MenuItem key={58} value={"Press Factory"}>Press Factory</MenuItem>
                                <MenuItem key={59} value={"Property Office"}>Property Office</MenuItem>
                                <MenuItem key={60} value={"Puncture Shop"}>Puncture Shop</MenuItem>
                                <MenuItem key={61} value={"Sanitary Shop"}>Sanitary Shop</MenuItem>
                                <MenuItem key={62} value={"School"}>School</MenuItem>
                                <MenuItem key={63} value={"Service Station"}>Service Station</MenuItem>
                                <MenuItem key={65} value={"Shoe Shop"}>Shoe Shop</MenuItem>
                                <MenuItem key={66} value={"Small Hotel"}>Small Hotel</MenuItem>
                                <MenuItem key={67} value={"Sunday Bazaar"}>Sunday Bazaar</MenuItem>
                                <MenuItem key={68} value={"Super Store"}>Super Store</MenuItem>
                                <MenuItem key={69} value={"Swimming Pools"}>Swimming Pools</MenuItem>
                                <MenuItem key={70} value={"Tailor Shop"}>Tailor Shop</MenuItem>
                                <MenuItem key={71} value={"Tandoor"}>Tandoor</MenuItem>
                                <MenuItem key={72} value={"Tyres"}>Tyres</MenuItem>
                                <MenuItem key={73} value={"Underconstruction"}>Underconstruction</MenuItem>
                                <MenuItem key={74} value={"University"}>University</MenuItem>
                                <MenuItem key={75} value={"Vegetable Shop"}>Vegetable Shop</MenuItem>
                                <MenuItem key={76} value={"Water Ponding"}>Water Ponding</MenuItem>
                                <MenuItem key={77} value={"Workshops"}>Workshops</MenuItem>

                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <TextField id="spotType" size={"small"} select fullWidth label="Big Breeding Site" value={''}>
                                <MenuItem key={1} value={1}>
                                    Yes
                                </MenuItem>
                                <MenuItem key={2} value={2}>
                                    No
                                </MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <TextField id="timeReq" size={"small"} select fullWidth label="Time Required" value={''}>
                                <MenuItem key={1} value={"0-5"}>
                                    Less than 2 minutes
                                </MenuItem>
                                <MenuItem key={2} value={"2-5"}>
                                    2-5 Minutes
                                </MenuItem>
                                <MenuItem key={3} value={"5-15"}>
                                    5-15 Minutes
                                </MenuItem>
                                <MenuItem key={4} value={"15-60"}>
                                    15 Minutes - 1 hour
                                </MenuItem>
                                <MenuItem key={5} value={"60-120"}>
                                    1-2 hour
                                </MenuItem>
                                <MenuItem key={6} value={"120+"}>
                                    More than 2 hour
                                </MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <TextField name="spotName" size={"small"} fullWidth id="spotName" label="Spot Name" />
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <TextField name="occupantName" size={"small"} fullWidth id="occupantName" label="Relevant Person (Occupant/Owner)" />
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <TextField name="occupantContact" size={"small"} fullWidth id="occupantContact" label="Phone Number" />
                        </Grid>
                        <Grid item xs={12} md={8} >
                            <TextField name="address" size={"small"} fullWidth id="address" label="Address" />
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Stack direction={"column"} alignContent="center">
                                <Button size={"small"} variant="contained" sx={{ margin: 2, }} onClick={getMyLocation} endIcon={<AddLocationIcon />}>
                                    Get Location
                                </Button>
                                {error && <p>Error: {error}</p>}
                                {location && (
                                    <Typography>
                                        Latitude: {location.lat}, Longitude: {location.lng}, Accuracy:{" "}
                                        {accuracy}
                                    </Typography>
                                )}

                                {/* {location?.loaded === false && <Typography>Loading your location. Please Wait ...</Typography>}
                                {location?.error && <Typography>{location.error.message}</Typography>}
                                {location?.coordinates && (
                                    <>
                                        <Typography>{location.coordinates.lat}</Typography> */}
                                {/* <div id="mapContainer"></div> */}
                                {/* <MapContainer center={[33.626057, 73.071442]} zoom={13} scrollWheelZoom={true}>
                                            <TileLayer
                                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            /> */}
                                {/* <Marker position={[location.coordinates.lat, location.coordinates.lng]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker> */}
                                {/* </MapContainer>
                                    </>
                                )} */}
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={6} ></Grid>
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={8}>
                            <Button variant="contained" fullWidth size="large" sx={{ marginTop: 2 }} >
                                Submit
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </React.Fragment >

    )
}

//     const [getMyUCs, myUCInfo] = useGetMyUCsMutation()
//     const paperStyle = { minHeight: '50%', width: "100%", marginRight: "auto", maxWidth: "100%", align: "center" }
//     useEffect(() => {
//         async function getMyUCDetails() {
//             await getMyUCs()
//         }
//         getMyUCDetails()
//     }, [])

//     return (
//         <React.Fragment>
//             <Box flex={6} p={{ xs: 0, md: 2 }}>
// <Paper sx={{ paddingBottom: 1, width: "90%", margin: "5px auto", justifyContent: "center", bgcolor: "#006600" }}>

//                     <Typography textAlign={'center'} variant="h4" sx={{ color: "white" }}>
//                         Spots
//                     </Typography>
//                     <Typography textAlign={'center'} variant="h6" sx={{ color: "white" }}>
//                         Spot Reporting Form
//                     </Typography>
//                 </Paper>
//                         <Grid item xs={12} md={4} >
//                             <TextField id="spotType" size={"small"} select fullWidth label="Big Breeding Site" value={''}>
//                                 <MenuItem key={1} value={1}>
//                                     Yes
//                                 </MenuItem>
//                                 <MenuItem key={2} value={2}>
//                                     No
//                                 </MenuItem>
//                             </TextField>
//                         </Grid>

//                         <Grid item xs={12} md={6} sx={{ justifyContent: "center", padding: 1, margin: 1, }}>
//                             <CameraButton />
//                         </Grid>
//                         <Grid item xs={12} md={5.7} sx={{ justifyContent: "right", }}>
//                             <CurrentLocation />
//                         </Grid>
//                 </Paper>
//             </Box>
//         </React.Fragment>
//     )
// }

export default Spots