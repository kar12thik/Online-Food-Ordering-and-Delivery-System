import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="text-teal-500">
      <span
          key={faFacebookF}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <FontAwesomeIcon icon={faFacebookF} />
      </span>
      <span
          key={faInstagram}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
      >
          <FontAwesomeIcon icon={faInstagram} />
      </span>
              <span
          key={faTwitter}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
      >
          <FontAwesomeIcon icon={faTwitter} />
      </span>
      <span
          key={faPinterest}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
      >
          <FontAwesomeIcon icon={faPinterest} />
      </span>
    </div>
  );
};

export default SocialIcons;