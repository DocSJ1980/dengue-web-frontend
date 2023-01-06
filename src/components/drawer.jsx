import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setComponent, selectMode } from "../features/auth/authSlice"
import { Home } from "@mui/icons-material";
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import FactoryIcon from '@mui/icons-material/Factory';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import WomanIcon from '@mui/icons-material/Woman';
import Man2Icon from '@mui/icons-material/Man2';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const mode = useSelector(selectMode)
    const dispatch = useDispatch();
    let component

    return (
        <React.Fragment>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={e => dispatch(setComponent({ component: "feed" }))}>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={e => dispatch(setComponent({ component: "houses" }))}>
                            <ListItemIcon>
                                <HolidayVillageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Houses" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={e => dispatch(setComponent({ component: "spots" }))}>
                            <ListItemIcon>
                                <FactoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Spots" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={e => dispatch(setComponent({ component: "issues" }))}>
                            <ListItemIcon>
                                <DeleteSweepIcon />
                            </ListItemIcon>
                            <ListItemText primary="Issues" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={e => dispatch(setComponent({ component: "indoor-monitoring" }))}>
                            <ListItemIcon>
                                <WomanIcon />
                            </ListItemIcon>
                            <ListItemText primary="Indoor Monitoring" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={e => dispatch(setComponent({ component: "outdoor-monitoring" }))}>
                            <ListItemIcon>
                                <Man2Icon />
                            </ListItemIcon>
                            <ListItemText primary="Outdoor Monitoring" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={e => dispatch(setComponent({ component: "profile" }))}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={e => dispatch(setComponent({ component: "profile" }))}>
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton >
                            <ListItemIcon>
                                <ModeNightIcon />
                            </ListItemIcon>
                            {mode === "light" && <Switch
                                onChange={e => dispatch(setMode({ mode: "dark" }))}
                            />}
                            {mode === "dark" && <Switch
                                defaultChecked
                                onChange={e => dispatch(setMode({ mode: "light" }))}
                            />}
                        </ListItemButton>
                    </ListItem>
                </List>
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