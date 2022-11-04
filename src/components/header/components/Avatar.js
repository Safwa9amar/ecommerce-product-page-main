import React from "react";

const Avatar = ({ img }) => {
  return (
    <div className="avatar">
      <img src={img} alt="avatar" className="avatar__img" />
    </div>
  );
};

export default Avatar;
