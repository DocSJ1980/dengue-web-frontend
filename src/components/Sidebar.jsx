import {
    Box,
} from "@mui/material";
import React from "react";
import Menu from "./menu";



const Sidebar = () => {
    return (
        <Box flex={{ xs: 2, md: 1 }} p={1} bgcolor={"background.default"} color={"text.primary"} sx={{ display: { xs: "none", sm: "block" }, marginRight: 4, bgcolor: "background.default", color: "text.primary" }}>
            <Box position="fixed">
                <Menu />
            </Box>
        </Box>
    );
};

export default Sidebar;
