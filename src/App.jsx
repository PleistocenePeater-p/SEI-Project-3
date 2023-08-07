import { Route, Routes, Navigate, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";
import BoardsPage from "./pages/BoardsPage/BoardsPage";

import userService from "./utils/userService";

function App() {
  const [user, setUser] = useState(userService.getUser());
  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  function handleLogout(){
    userService.logout();
    setUser(null)
  }


  if(!user){
    // if the user is not logged in only render the following routes
    return (
      <Routes>
        <Route path="/" element={<h1>DreamMapper</h1>} />
        <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="/signup" element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin}/>} /> 
        <Route path="/*" element={<Navigate to='/login' />} />
      </Routes>
    )

  }

//<Route path="/" element={<h1>DreamMapper</h1>} />

  return (
    <Routes>
      <Route path="/" element={<BoardsPage user={user} handleLogout={handleLogout}/> } />
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/signup" element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/:username" element={<BoardsPage user={user} handleLogout={handleLogout}/> } />
    </Routes>
  );
}

export default App;
