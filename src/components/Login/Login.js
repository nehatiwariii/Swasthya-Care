import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Firebase.config";
import loginBg from "../../images/Group 140.png"
//login
const Login = () => {
  const [role, setRole] = useState("patient");
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };

        setLoggedInUser(signedInUser);

        // console.log(signInUser);
        storeAuthToken(role);

      })

      .catch(function (error) {
        var Message = error.message;
        console.log(Message);
      });
  };

  const storeAuthToken = (role) => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        // history.replace(from);
        history.push({
          pathname: '/dashboard/appointment',
          state: { type: role }
        })
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          {/* <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">
              Forget Your Password?
            </label>
          </div> */}
          <input type="radio" id="Patient" name="role" value="Patient" onChange={e => setRole(e.target.value)} />
          <label for="html">Patient</label><br />
          <input type="radio" id="Doctor" name="role" value="Doctor" onChange={e => setRole(e.target.value)} />
          <label for="Doctor">Doctor</label><br />
          <input type="radio" id="RMP" name="role" value="RMP" onChange={e => setRole(e.target.value)} />
          <label for="RMP">RMP</label>

          <div className="form-group mt-5">

            <button className="btn btn-brand" onClick={handleGoogleSignIn}>
              Google Sign In
            </button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img src={loginBg} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Login;
