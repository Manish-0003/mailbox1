import React from "react";
import "./css/emaillist.css";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { IconButton, Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import PrintIcon from "@mui/icons-material/Print";
import LaunchIcon from "@mui/icons-material/Launch";
import StarIcon from "@mui/icons-material/Star";
import ReplyIcon from "@mui/icons-material/Reply";
import { useSelector } from "react-redux";
import { selectedMail } from "./features/mailSlice";

function Emaildetail() {
  const mail = useSelector(selectedMail);
  const navigate = useNavigate();

  return (
    <div className="emaildetails">
      <div className="emaillist_setting">
        <div className="emaillist_settingleft">
          <IconButton onClick={() => navigate('/')}>
            <ArrowBackIcon />
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

      <div className="emaildetails_message">
        <div className="emaildetails_header">
          <div className="emaildetails_headerleft">
            <h4>{mail.subject}</h4>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
          </div>
          <div className="emaildetails_headerright">
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <LaunchIcon />
            </IconButton>
          </div>  
        </div>
        <div className="emaildetails_middleheader">
          <div className="emaildetails_middleheaderleft">
            <IconButton>
              <Avatar />
            </IconButton>
            <h4>{mail.name}</h4>
            <p>{mail.email}</p>
          </div>
          <div className="emaildetails_middleheaderright">
            <p>{mail.time}</p>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>  
        </div>
        <div className="emaildetails_body">
          <p> {mail.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Emaildetail;
