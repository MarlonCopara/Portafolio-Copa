import React from 'react'
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Marlon Copara</h3>
        <p className="text-lg font-normal text-gray-400">
        Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am willing to demonstrate my knowledge in the business field by providing innovative and efficient solutions and applying my skills in software development.
        </p>
        
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">coparamarlonmc2001@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/marlon-alexis-copara-allauca-b7338330b" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
            </a> 
            </span>
            <span className="bannerIcon">
              <a href="https://github.com/MarlonCopara" target="_blank" rel="noopener noreferrer">
              <FaGithub/>
                </a>                          
            </span>
            
            <span className="bannerIcon">
              <a href="https://x.com/MarlonCopara" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
              </a>
            
            </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft