
import React from "react";

function Login({ onLogin }) {
    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Welcome Back!</h1>
                <p>Please login to access your dashboard.</p>

                <button onClick={onLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
