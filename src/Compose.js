import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import "./css/compose.css";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { db } from "./firebase";
import { selectuser } from "./features/userSlice";

function Compose() {
  const dispatch = useDispatch();
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const user = useSelector(selectuser)

  const formSubmit = async (event) => {
    event.preventDefault();
    if (to === '') {
      return alert("To is required");
    }
    if (subject === '') {
      return alert("Subject is required");
    }
    if (message === '') {
      return alert("Message is required");
    }

    try {
      await db.collection('emails').add({
        to: to,
        subject: subject,
        message: message,
        from: user.email,
        fromName: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      setTo('');
      setSubject('');
      setMessage('');
      dispatch(closeSendMessage());
      alert('Email sent successfully');
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <>
      <div className="compose">
        <div className="compose_header">
          <div className="compose_header_left">
            <span>New Message</span>
          </div>
          <div className="compose_header_right">
            <RemoveIcon />
            <HeightIcon />
            <CloseIcon onClick={() => dispatch(closeSendMessage())} />
          </div>
        </div>
        <form onSubmit={formSubmit}>
          <div className="compose_body">
            <div className="compose_bodyForm">
              <input type="email" placeholder="Recipients" value={to} onChange={(event) => setTo(event.target.value)} />
              <input type="text" placeholder="Subject" value={subject} onChange={(event) => setSubject(event.target.value)} />
              <textarea rows="20" name="message" onChange={(event) => setMessage(event.target.value)} value={message} />
            </div>
          </div>
          <div className="compose_footer">
            <div className="compose_footerleft">
              <button type="submit">
                Send <ArrowDropDownIcon />
              </button>
            </div>
            <div className="compose_footerright">
              <FormatColorTextIcon />
              <AttachFileIcon />
              <LinkIcon />
              <InsertEmoticonIcon />
              <NoteAddIcon />
              <PhonelinkLockIcon />
              <PhotoIcon />
              <CreateIcon />
              <MoreVertIcon />
              <DeleteIcon />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Compose;
