import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import { Box, } from '@mui/material';
import Welcome from '../features/auth/Welcome';



const DashLayout = () => {

    return (
        <>
            <Box bgcolor={"primary.default"} color={"text.primary"} sx={{ padding: 0, margin: 0 }} height="100%" minHeight="100vh">
                <DashHeader />
                <Welcome />
                {/* <DashFooter /> */}
            </Box>
        </>
    )
}
export default DashLayout