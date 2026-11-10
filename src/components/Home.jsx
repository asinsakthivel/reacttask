
import React from "react";
import UserList from "./UserList";

function Home({ onLogout }) {
    return (
        <div>
            <header className="header">
                <h1>Stackly Dashboard</h1>

                <button onClick={onLogout}>
                    Logout
                </button>
            </header>

            <div className="welcome">
                <h2>Welcome, Asin!</h2>
                <p>You have successfully logged in.</p>
            </div>

            <UserList />
        </div>
    );
}

export default Home;
