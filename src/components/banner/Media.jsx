import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  FaLinkedinIn,FaDownload, FaGithub, FaJava , FaPython } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiJavascript, SiAngular, SiFigma, SiBootstrap } from "react-icons/si";
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-5">
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
          <br></br>
          <h2 className="text-base uppercase font-titleFont mb-4">
            CURRICULUM VITAE
          </h2>
          <div className="flex gap-5">
          <span className="bannerIcon">
            <a href="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/CoparaMarlonCV.pdf?alt=media&token=510adcbe-a281-40ec-bc18-fb8f5f3c42b4">
            <FaDownload />
            </a> 
            </span>
           
           
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiTypescript />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
                      
          
          </div>
          <br></br>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>
            
            <span className="bannerIcon">
              <SiAngular />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media