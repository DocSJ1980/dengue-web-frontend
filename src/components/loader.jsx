import CircularProgress from '@mui/joy/CircularProgress';
import { CssVarsProvider } from '@mui/joy';
import { Box } from '@mui/system';
const Loading = () => {
    const loader =
        <CssVarsProvider>
            <Box alignContent="center" justifyContent="center" alignItems="center" alignSelf="center" width="100vw" height="100vh" mx="50%" pt="200px">
                <CircularProgress color="success" size="lg" />
            </Box>
        </CssVarsProvider>

    return loader

}

export default Loading;
