import { Grid, MenuItem, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectMyUC } from '../features/auth/authSlice'

const UcList = () => {
    const [dataReceived, setDataReceived] = useState(false)
    const effectRan = useRef(false)
    const myUC = useSelector(selectMyUC)
    let content
    useEffect(() => {
        if (effectRan.current === true) return
        if (effectRan.current === false && myUC.length > 0) {
            setDataReceived(true)
            return () => {
                effectRan.current = true
            }
        }
    }, [myUC])
    if (dataReceived) {
        // console.log(myUC)
        content = myUC.map((myuc_option) => (
            <MenuItem key={myuc_option._id} value={myuc_option._id}>
                {myuc_option.survUC}
            </MenuItem>
        ))

    }

    return (
        <TextField id="ucList" size={"small"} select fullWidth label="Union Council" value={''}>
            <MenuItem key="select" value="">Please Select UC</MenuItem>
            {content}
        </TextField>
    )
}

export default UcList