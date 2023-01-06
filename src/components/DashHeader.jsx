import { useTheme } from '@emotion/react'
import { AppBar, Stack, Tab, Tabs, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton';
import { useSendLogoutMutation } from '../features/auth/authApiSlice'
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from '../hooks/useAuth'
import DrawerComp from './drawer'
const DASH_REGEX = /^\/dash(\/)?$/

//* Implement NavBar here
const DashHeader = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const routes = ["/dengue", "/polio", "/epi", "/irmnch"];
    const [value, setValue] = useState(0);
    const { username } = useAuth()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation()

    useEffect(() => {
        if (isSuccess) navigate('/')
    }, [isSuccess, navigate])

    let dashClass = null
    if (!DASH_REGEX.test(pathname)) {
        dashClass = "dash-header__container--small"
    }

    const errClass = isError ? "errmsg" : "offscreen"
    const content = (
        <>
            <p className={errClass}>{error?.data?.message}</p>

            <React.Fragment>
                <AppBar position="sticky">
                    <Toolbar variant="dense" >
                        {isMatch ? (
                            <>
                                <Typography sx={{ fontSize: "2rem", paddingLeft: "2%" }}>
                                    DHA Rawalpindi
                                </Typography>
                                <DrawerComp />
                            </>
                        ) : (<>
                            <img style={{ height: 60, width: 60, color: "white" }} src="/src/assets/dharwp-white.svg" alt="District Health Authority Rawalpindi" />
                            <Typography variant="subtitle1" color="inherit" sx={{ width: 175, textAlign: "center" }}>
                                District Health Authority Rawalpindi
                            </Typography >
                            <Tabs
                                sx={{ marginLeft: "auto" }}
                                indicatorColor="secondary"
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}
                            >
                                <Tab
                                    label="Dengue"
                                    component={Link}
                                    to={routes[0]} />
                                <Tab label="Polio" />
                                <Tab label="EPI" />
                                <Tab label="IRMNCH" />
                            </Tabs>
                            <Stack direction={'column'}>
                                <Typography sx={{ fontSize: 14, color: "white", marginLeft: "auto" }} color="text.secondary" gutterBottom>
                                    Welcome: {username}
                                </Typography>
                                <LoadingButton
                                    color="secondary"
                                    onClick={sendLogout}
                                    loading={isLoading}
                                    loadingPosition="start"
                                    startIcon={<LogoutIcon />}
                                    variant="contained"
                                    size='small'
                                    sx={{ marginLeft: 1, marginBottom: 1 }}
                                >
                                    Logout
                                </LoadingButton>
                            </Stack>
                        </>)}
                    </Toolbar>
                </AppBar>
            </React.Fragment >
        </>
    )

    return content
}
export default DashHeader