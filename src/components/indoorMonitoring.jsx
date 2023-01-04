import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const IndoorMonitoring = () => {
    return (
        <React.Fragment>
            <Box flex={6} p={{ xs: 0, md: 2 }}>
                <Paper sx={{ padding: 1, minHeight: '50%', width: "90%", margin: "5px auto", justifyContent: "center" }}>
                    <Grid container spacing="20px" sx={{ display: "flex", justifyContent: "flex-start", padding: 1, margin: 1, width: "98%", }}>
                        <Grid item xs={12} md={12}>
                            <Typography textAlign={'center'} variant="h4" sx={{ color: "#006600" }}>
                                Indoor Monitoring
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </React.Fragment>
    )
}

export default IndoorMonitoring