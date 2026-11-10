
import React from "react";

function UserList() {
    const users = [
        {
            id: 1,
            name: "Asin Sakthivel",
            email: "asin@gmail.com",
            age: 21,
            city: "Mayiladuthurai",
            role: "Full Stack Developer"
        },
        {
            id: 2,
            name: "Arun Kumar",
            email: "arun@gmail.com",
            age: 22,
            city: "Chennai",
            role: "Frontend Developer"
        },
        {
            id: 3,
            name: "Priya",
            email: "priya@gmail.com",
            age: 23,
            city: "Bangalore",
            role: "UI Designer"
        },
        {
            id: 4,
            name: "Karthik",
            email: "karthik@gmail.com",
            age: 24,
            city: "Coimbatore",
            role: "Backend Developer"
        },
        {
            id: 5,
            name: "Divya",
            email: "divya@gmail.com",
            age: 22,
            city: "Madurai",
            role: "React Developer"
        }
    ];

    return (
        <div className="user-section">
            <h2>Our Team Members</h2>

            <div className="user-container">
                {users.map((user) => (
                    <div className="user-card" key={user.id}>
                        <h3>{user.name}</h3>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Age:</strong> {user.age}</p>
                        <p><strong>City:</strong> {user.city}</p>
                        <p><strong>Role:</strong> {user.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;
