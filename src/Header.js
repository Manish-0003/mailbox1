import React from "react";
import TocIcon from "@mui/icons-material/Toc";
import { IconButton, Avatar } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { auth } from "./firebase"; // Ensure auth is imported from firebase config
import "./css/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <TocIcon />
          <GoogleIcon />
        </IconButton>
      </div>
      <div className="header_mid">
        <div className="search_mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search mail" />
          <IconButton>
            <ArrowDownwardIcon />
          </IconButton>
        </div>
      </div>
      <div className="header_right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar onClick={() => auth.signOut()} />
      </div>
    </div>
  );
};

export default Header;
