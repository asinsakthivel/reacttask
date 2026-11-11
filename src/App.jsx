import React, { useState } from "react";
//import UserList from "./components/UserDetails";
//import Login from "./components/Login";
//import Home from "./components/Home";
//import  "./App.css";

import Counter from "./components/Counter";
/*function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <Home onLogout={handleLogout} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}
*/function App() {
  return <Counter />;
}
export default App;
