import { Box } from '@mui/system';
import { LinearProgress } from '@mui/material';
const Loading = () => {
    const loader =
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    // <CssVarsProvider>
    //     <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    //         {/* <Box alignContent="center" justifyContent="center" alignItems="center" alignSelf="center" width="100vw" height="100vh" mx="50%" pt="200px"> */}
    //         <CircularProgress color="success" size="lg" />
    //     </Box>
    // </CssVarsProvider>

    return loader

}

export default Loading;
