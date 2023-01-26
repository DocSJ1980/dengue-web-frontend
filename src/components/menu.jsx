import React, { useEffect, useState } from "react";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
} from "@mui/material";
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
import EngineeringIcon from '@mui/icons-material/Engineering';

const Menu = () => {
    const mode = useSelector(selectMode)
    const dispatch = useDispatch();
    const handleModeChange = (newMode) => dispatch(setMode({ mode: newMode }))

    return (
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
                <ListItemButton onClick={e => dispatch(setComponent({ component: "ucMgmt" }))}>
                    <ListItemIcon>
                        <EngineeringIcon />
                    </ListItemIcon>
                    <ListItemText primary="UC Management" />
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
                <ListItemButton onClick={e => dispatch(setComponent({ component: "feed" }))}>
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
    );
};

export default Menu;