
import React, { useEffect, useState } from "react";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();

      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users-container">
      <header className="users-header">
        <h1>User Management</h1>
        <p>API Integration using React useEffect Hook</p>
      </header>

      <div className="users-title">
        <div>
          <h2>Users List</h2>
          <p>Manage and view user information</p>
        </div>

        <button className="refresh-btn" onClick={fetchUsers}>
          ↻ Refresh
        </button>
      </div>

      {loading ? (
        <div className="message">Loading users...</div>
      ) : error ? (
        <div className="error-message">
          {error}
          <button onClick={fetchUsers}>Try Again</button>
        </div>
      ) : (
        <div className="users-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="user-card-header">
                <div className="user-avatar">
                  {user.name.charAt(0)}
                </div>

                <span className="user-id">ID: {user.id}</span>
              </div>

              <h3>{user.name}</h3>

              <p className="username">@{user.username}</p>

              <div className="user-details">
                <p>
                  <strong>Email:</strong> {user.email}
                </p>

                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>

                <p>
                  <strong>Website:</strong> {user.website}
                </p>
              </div>

              <button
                className="view-btn"
                onClick={() => alert(`User: ${user.name}\nEmail: ${user.email}`)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && (
        <p className="total-users">
          Total Users: {users.length}
        </p>
      )}
    </div>
  );
}

export default Users;
