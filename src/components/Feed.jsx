import { Box, Stack, Skeleton, Paper, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import Post from "../components/postComponent";
// import { useGetSimplesMutation } from '../services/authApi'


const Feed = () => {
    return (
        <React.Fragment>
            <Box flex={6} p={{ xs: 0, md: 2 }}>
                <Paper sx={{ padding: 1, minHeight: '50%', width: "90%", margin: "5px auto", justifyContent: "center" }}>
                    <Grid container spacing="20px" sx={{ display: "flex", justifyContent: "flex-start", padding: 1, margin: 1, width: "98%", }}>
                        <Grid item xs={12} md={12}>
                            <Typography textAlign={'center'} variant="h4" sx={{ color: "#006600" }}>
                                Update Profile
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </React.Fragment>

    )
}

// const [page, setPage] = useState(0)
// const [getSimples, { isLoading, isSuccess, data }] = useGetSimplesMutation()
// useEffect(() => {
//     const handleGetSimples = async () => {
//         try {
//             await getSimples(0).unwrap()
//         } catch (error) {
//             console.error(error.message)
//         }
//     }
//     handleGetSimples()
// }, [])

//     return (
//         <Box flex={8} p={{ xs: 0, md: 2 }}>
//             {isLoading && (
//                 <Box marginLeft={3}>
//                     <Stack spacing={1} >
//                         <Skeleton variant="text" height={100} />
//                         <Skeleton variant="text" height={20} />
//                         <Skeleton variant="text" height={20} />
//                         <Skeleton variant="rectangular" height={300} />
//                     </Stack>
//                 </Box>
//             )}
//             {isSuccess && data.map(person => {
//                 return (
//                     <div key={person._id}>
//                         <Post
//                             userName={person.userName}
//                             dateSubmitted={person.dateSubmitted}
//                             beforePic={person.beforePic}
//                             afterPic={person.afterPic}
//                             dengueLarva={person.dengueLarva}
//                             tag={person.tag}
//                         />
//                     </div>
//                 )
//             })}
//         </Box>
//     );
// };

export default Feed;
