import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      {/* Primera columna */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">

          <h2 className="text-3xl md:text-4xl font-bold">PRE-PROFESSIONAL INTERNSHIPS</h2>
        </div>
        <div className="flex flex-col items-center gap-8">
          <ResumeCard
            title="Systems Assistant"
            subTitle="Cuerpo de Bomberos Ambato"
            result="ECUADOR"
            des={
              <>
              <img src="https://colombia.unir.net/wp-content/uploads/sites/4/2022/05/engineer-working-on-desktop-computer-screen-showing-cad-software-with-picture-id1176843798.jpg" alt="Systems Assistant Image" className="w-full h-auto max-w-sm mt-4 rounded-lg mx-auto" />
                <br></br>
                <p>
                  During my experience in the ICT field, I actively participated in network and radio communication equipment administration, combining responsibilities in both telecommunications and systems. Additionally, I contributed to the development of a web messaging application.
                </p>
                
              </>
            }
          />
        </div>
      </div>

      {/* Segunda columna */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        
          <h2 className="text-3xl md:text-4xl font-bold">COMMUNITY ENGAGEMENT</h2>
          <br>
          </br>
          <br>
          </br>

        </div>
        <div className="flex flex-col items-center gap-8">
          <ResumeCard
            title="Computer Equipment Technician"
            subTitle="Atahualpa Educational Unit | Ambato"
            result="ECUADOR"
            des={
              <>
              <img src="https://st2.depositphotos.com/4635515/7064/i/950/depositphotos_70648197-stock-photo-technician-repairing-computer-hardware-in.jpg" alt="Computer Equipment Technician Image" className="w-full h-auto max-w-xs mt-4 rounded-lg mx-auto" />
              <br></br>
                <p>
                  During my experience working on a community engagement project at Unidad Educativa Atahualpa, I participated in computer maintenance and network infrastructure optimization. I implemented significant improvements, including installing new operating systems to enhance the speed and efficiency of the equipment.
                </p>
                
              </>
            }
          />
          {/* Puedes añadir más tarjetas de experiencia si es necesario */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
