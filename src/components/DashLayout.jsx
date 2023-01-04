import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import { useSelector } from 'react-redux';
import { selectMode } from '../features/auth/authSlice';
import { Box, createTheme, ThemeProvider } from '@mui/material';



const DashLayout = () => {
    const mode = useSelector(selectMode)
    const darkTheme = createTheme({
        palette: {
            mode: mode,
            primary: {
                main: "#006600"
            },
            secondary: {
                main: "#00ff00"
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={darkTheme} >
                <Box bgcolor={"primary.default"} color={"text.primary"} sx={{ padding: 0, margin: 0 }}>

                    <DashHeader />
                    <Outlet />
                    {/* <DashFooter /> */}
                </Box>
            </ThemeProvider>

        </>
    )
}
export default DashLayout