import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Experience from './Experience';

const Resume = () => {
  const [aboutMe, setAboutMe] = useState(true);
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="ALL ABOUT ME" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <li
            onClick={() => {
              setAboutMe(true);
              setEducationData(false);
              setSkillData(false);
              setExperienceData(false);
            }}
            className={`${aboutMe ? 'border-designColor rounded-lg' : 'border-transparent'} resumeLi`}
          >
            About Me
          </li>
          <li
            onClick={() => {
              setAboutMe(false);
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
            }}
            className={`${educationData ? 'border-designColor rounded-lg' : 'border-transparent'} resumeLi`}
          >
            Archivements
          </li>
          <li
            onClick={() => {
              setAboutMe(false);
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
            }}
            className={`${skillData ? 'border-designColor rounded-lg' : 'border-transparent'} resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setAboutMe(false);
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
            }}
            className={`${experienceData ? 'border-designColor rounded-lg' : 'border-transparent'} resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {aboutMe && <AboutMe />}
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
