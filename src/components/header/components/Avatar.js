import React from "react";

const Avatar = ({ img }) => {
  return (
    <a href="#nav" className="avatar">
      <img src={img} alt="avatar" className="avatar__img" />
    </a>
  );
};

export default Avatar;
