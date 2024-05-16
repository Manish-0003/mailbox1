import React from "react";
import "./css/emaillist.css";
import { IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function EmailListSetting() {
  return (
    <div className="emaillist_setting">
      <div className="email_settingleft">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <ArrowDownwardIcon />
        </IconButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    <div className="emaillist_settingright">
      <p>1-50 of 11,234</p>
      <IconButton>
        <ChevronLeftIcon />
      </IconButton>
      <IconButton>
        <ChevronRightIcon />
      </IconButton>

      </div>  
    </div>
  );
}

export default EmailListSetting;
