import React from "react";
import "./css/emaillist.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMessage } from "./features/mailSlice";

function Emailbody({ name, email, subject, message, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setMail = () => {
    dispatch(openMessage({
      name: name,
      subject: subject,
      message: message,
      email,
      time: time,
    }));

    navigate('/mail');
  };

  return (
    <div className="emailbody" onClick={setMail}>
      <div className="emailbody_left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelOutlinedIcon />
        <h4>{name}</h4>
      </div>
      <div className="emailbody_middle">
        <div className="emailbody_middle_mg">
          <p><b>{subject}</b> {message}</p>
        </div>
      </div>
      <div className="emailbody_right">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default Emailbody;
