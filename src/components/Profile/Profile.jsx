import React, { useContext } from 'react';
import UserContext from '../../Context/UserContext';

function Profile() {
  const { user, setUser } = useContext(UserContext); // Destructure both user and setUser

  if (!user) {
    return <div>Please Login</div>;
  }

  return (
    <div>
      <p>Welcome, {user.username}!</p>
    </div>
  );
}

export default Profile;

