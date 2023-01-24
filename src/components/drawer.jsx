import React, { useState } from "react";
import {
    Drawer,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./menu";

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);


    let component
    return (
        <React.Fragment>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Menu />
            </Drawer>
            <IconButton
                sx={{ color: "white", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon color="white" />
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;