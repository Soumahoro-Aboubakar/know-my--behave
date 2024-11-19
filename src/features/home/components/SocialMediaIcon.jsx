import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialMediaIcon = ({ type }) => {
  let Icon;
  let color;

  switch (type.toLowerCase()) {
    case "facebook":
      Icon = FaFacebook;
      color = "text-blue-600"; 
      break;
    case "instagram":
      Icon = FaInstagram;
      color = "text-pink-500"; 
      break;
    case "twitter":
      Icon = FaTwitter;
      color = "text-blue-400";
      break;
    default:
      return <span className="text-gray-400">Unknown</span>; 
  }

  return (
    <div className={`flex pr-10 ${color} text-2xl`}>
      <Icon />
    </div>
  );
};

export default SocialMediaIcon;
