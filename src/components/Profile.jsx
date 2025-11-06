import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile data from your API here
    setUser({
      name: 'John Doe',
      email: 'john.doe@example.com',
      sapPoints: 100,
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>SAP Points:</strong> {user.sapPoints}</p>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Profile;