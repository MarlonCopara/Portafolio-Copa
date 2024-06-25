import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      {/* Column 1: About Me */}
      <div className="flex-1">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold">Get to Know Me</h2>
        </div>
        <div className="flex flex-col gap-4">
          <img 
            src="https://img.freepik.com/premium-vector/man-with-laptop-network-social-media-space-work_24640-58261.jpg" 
            alt="About me" 
            className="rounded-lg shadow-md max-w-xs mx-auto"
          />
          <p className="text-justify">
            I am a software engineer with a strong background in application development, particularly passionate about backend. I enjoy working with technologies such as TypeScript, Java, PHP, and Python to build robust and scalable systems. On the frontend, I love using Angular to create dynamic and attractive interfaces, and I also have skills in Bootstrap, CSS, HTML, and JavaScript.
          </p>
          <p className="text-justify">
            I am motivated by tackling technical challenges and learning new technologies, particularly interested in the field of artificial intelligence and how it can transform industries and enhance everyday life. I firmly believe in innovation and continuous improvement, constantly seeking ways to apply new technologies to solve problems effectively.
          </p>
          <p className="text-justify">
            In addition to my technical work, I enjoy collaborating in teams where I can contribute my technical skills and learn from others. I consider teamwork essential for achieving major goals, and I take pride in my ability to communicate complex ideas clearly and effectively.
          </p>
        </div>
      </div>
      
      {/* Column 2: Hobbies */}
      <div className="flex-1">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">HOBBIES</p>
          <h2 className="text-3xl md:text-4xl font-bold">MY HOBBIES</h2>
        </div>
        <div className="flex flex-col gap-4">
          <img 
            src="https://www.psicoactiva.com/wp-content/uploads/2015/01/hobbies.jpg" 
            alt="Hobbies" 
            className="rounded-lg shadow-md max-w-sm mx-auto"
          />
          <ul className="list-disc pl-5 text-justify">
            <p>
              My hobbies include contributing to open-source projects, where I can collaborate with others and contribute my expertise in a collaborative and dynamic environment.
            </p>
            <br></br>
            <p>
              Additionally, I greatly enjoy playing soccer and basketball with my friends to stay active and find a healthy balance between work and relaxation.
            </p>
            <br></br>
            <p>
              I'm an avid reader of science fiction and technology books, which allow me to explore futuristic ideas and stay updated on the latest innovations. I'm also passionate about traveling and discovering new cultures, which broadens my perspective and enriches both my personal and professional life.
            </p>
            <br></br>
            <p>
              To stay current in the technology industry, I watch international conferences online where I have the opportunity to learn from experts and share knowledge with passionate colleagues.
            </p>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
