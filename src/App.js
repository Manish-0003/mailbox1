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
import { selectuser, signin, signout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectuser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          signin({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(signout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

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
