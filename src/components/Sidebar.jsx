import {
    AccountBox,
    Home,
    ModeNight,
    Settings,
} from "@mui/icons-material";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import FactoryIcon from '@mui/icons-material/Factory';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import WomanIcon from '@mui/icons-material/Woman';
import Man2Icon from '@mui/icons-material/Man2';
import { setMode, setComponent, selectMode, selectComponent } from "../features/auth/authSlice"
import { useDispatch, useSelector } from "react-redux";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';



const Sidebar = () => {
    const dispatch = useDispatch();
    const mode = useSelector(selectMode)
    const handleModeChange = (newMode) => dispatch(setMode({ mode: newMode }))
    let component
    return (
        <Box flex={{ xs: 2, md: 1 }} p={1} bgcolor={"background.default"} color={"text.primary"} sx={{ display: { xs: "none", sm: "block" }, marginRight: 4, bgcolor: "background.default", color: "text.primary" }}>
            <Box position="fixed">
                <List>
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
                            <ListItemButton onClick={e => dispatch(setComponent({ component: "feed" }))}>
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
                                {mode === "light" &&
                                    <Switch
                                        onChange={() => handleModeChange("dark")}
                                    />
                                }
                                {mode === "dark" &&
                                    <Switch
                                        defaultChecked
                                        onChange={() => handleModeChange("light")}
                                    />
                                }
                            </ListItemButton>
                        </ListItem>
                    </List>
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;
