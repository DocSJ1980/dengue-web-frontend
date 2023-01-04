import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Sidebar from '../../components/Sidebar'
import Feed from '../../components/Feed'
import Houses from '../../components/houses'
import Spots from '../../components/spots'
import IndoorMonitoring from '../../components/indoorMonitoring'
import OutdoorMonitoring from '../../components/outdoorMonitoring'
import Issues from '../../components/issues'
import UpdateProfile from '../../components/updateProfile'
import { useSelector } from 'react-redux'
import { selectComponent } from "./authSlice"
import { Box, Stack } from '@mui/material'
import { useGetMyUCMutation } from './authApiSlice'
import { useEffect } from 'react'

const Welcome = () => {
    const [getMyUC, myUCInfo] = useGetMyUCMutation()
    useEffect(() => {
        const getMyUCRequest = async () => {
            await getMyUC()
        }
        getMyUCRequest()
    }, [])
    const component = useSelector(selectComponent)
    const { username } = useAuth()

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">
            <Box bgcolor={"background.default"} color={"text.primary"} height="100vh">

                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar />
                    {component === 'feed' && <Feed />}
                    {component === 'houses' && <Houses />}
                    {component === 'spots' && <Spots />}
                    {component === 'indoor-monitoring' && <IndoorMonitoring />}
                    {component === 'outdoor-monitoring' && <OutdoorMonitoring />}
                    {component === 'issues' && <Issues />}
                    {component === 'profile' && <UpdateProfile />}
                    {/* <Rightbar /> */}
                </Stack>
            </Box>

        </section>
    )

    return content
}
export default Welcome