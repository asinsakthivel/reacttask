
import React from "react";

 function UserDetails({ name, city, age, email, phone }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>City: {city}</h2>
      <h2>Age: {age}</h2>
      <h2>Email: {email}</h2>
      <h2>Phone: {phone}</h2>
      
    </div>
  );
}
export default UserDetails;
