import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from "../hooks/useAuth"
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { enableRipple } from '@syncfusion/ej2-base';
import { Box } from '@mui/material';

enableRipple(true);
const DashFooter = () => {

    const { username, status } = useAuth()

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => navigate('/dash')

    let goHomeButton = null
    if (pathname == '/dash') {
        goHomeButton = (
            <button
                className="dash-footer__button icon-button"
                title="Home"
                onClick={onGoHomeClicked}
            >
                Home
                <span className="material home"></span>
            </button>
        )
    }

    const content = (
        <Box>
            {goHomeButton}
            <p>Current User: {username}</p>
            <p>Status: {status}</p>
        </Box>
    )
    return content
}
export default DashFooter