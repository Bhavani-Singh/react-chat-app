import React from "react";

// Component for the profile header
function ProfileHeader({ user }) {
  return (
    <>
      <div className="header">
        <img className="avatar" src={user.image} alt="profile-pic" />
        <p>{user.name}</p>
      </div>
    </>
  );
}

export default ProfileHeader;
