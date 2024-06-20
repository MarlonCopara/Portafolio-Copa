import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">JANUARY - AUGUST 2024</p>
          <h2 className="text-4xl font-bold">INSIGHT</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Systems Assistant"
            subTitle="Cuerpo de Bomberos Ambato - (January - April)"
            result="ECUADOR"
            des="During my experience in the ICT field, I actively participated in network and radio communication equipment administration, combining responsibilities in both telecommunications and systems. Additionally, I contributed to the development of a web messaging application."
          />
          <ResumeCard
            title="Computer Equipment Technician"
            subTitle="Atahualpa Educational Unit | Ambato - (April - June)"
            result="ECUADOR"
            des="During my experience working on a community engagement project at Unidad Educativa Atahualpa, I participated in computer maintenance and network infrastructure optimization. I implemented significant improvements, including installing new operating systems to enhance the speed and efficiency of the equipment."
          />
          <ResumeCard
            title="Degree Area"
            subTitle="Technical University of Ambato -  In progress"
            result="ECUADOR"
            des="I am currently doing my pre-professional internship in the graduation department at the Faculty of Systems Engineering, Electronics, and Industrial Engineering at the University of Ambato. My main responsibility is to manage the documents of all university graduates, scanning and storing them in digital format within a repository."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
