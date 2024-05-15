import React from "react";
import "./css/emaillist.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function Emailbody({name,subject,message,time}) {
  return (
    <div className="emailbody">
      <div className="emailbody_left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelOutlinedIcon />

        <h4>{name}</h4>
      </div>
      <div className="emailbody_middle">
        <div className="emailbody_middle_mg">
          <p><b>{subject}</b>{message}</p>
        </div>
      </div>
      <div className="emailbody_right">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default Emailbody;
