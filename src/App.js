import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Emaillist from "./Emaillist";
import Compose from "./Compose";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import Emaildetail from "./Emaildetail";
import Login from "./Login";
import { selectUser, signin, signout } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      dispatch(signin({
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email
      }));
    } else {
      dispatch(signout());
    }
  }, [user, dispatch]); // Add dependencies to avoid infinite loop

  return (
    <Router>
      {user ? (
        <div className="App">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Emaillist />} />
              <Route path="/mail" element={<Emaildetail />} />
            </Routes>
          </div>
          {isMessageOpen && <Compose />}
        </div>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
