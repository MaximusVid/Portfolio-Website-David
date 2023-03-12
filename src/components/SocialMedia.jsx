import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.instagram.com/david_permana/"
        style={{ cursor: "pointer" }}
      >
        <BsInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/david-permana/"
        style={{ cursor: "pointer" }}
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/MaximusVid" style={{ cursor: "pointer" }}>
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
