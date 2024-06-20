import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">CERTIFICATIONS</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Neural Networks Course for Artificial Intelligence"
            subTitle="Technical University of Ambato (June. 2022)"
            result="4/4"
            imgSrc="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/Certificado_Curso_Redes_Neuronales_page.jpg?alt=media&token=ddb87c38-1eef-455f-9dc2-2723bb29f841"
          />
          <ResumeCard
            title="V CONFERENCE ON COMPUTER SCIENCE, ELECTRONICS AND INDUSTRIAL ENGINEERING"
            subTitle="Technical University of Ambato (November. 2023)"
            result="5/5"
            imgSrc="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/Certificado_Aprobación_V_Congreso_CSEI_2023.jpg?alt=media&token=51cfd8cd-e83b-48c5-abb7-ce351e622e2c"
          />
          <ResumeCard
            title="JavaScript programming"
            subTitle="Fundación Telefónica Movistar Ecuador (April. 2024)"
            result="5/5"
            imgSrc="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/Certificado_Curso_JavaScript.jpg?alt=media&token=ad820023-f70d-4a05-9428-3a058f2eb07d"
          />
          <ResumeCard
            title="Programming with Java Standard"
            subTitle="Fundación Telefónica Movistar Ecuador (March. 2024)"
            result="5/5"
            imgSrc="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/Certificado_Curso_Java_Standard.jpg?alt=media&token=b87212e3-5988-4a61-bee3-73c015518f40"
          />
          <ResumeCard
            title="III INTERNATIONAL CONGRESS BUILDING PLANETARY CITIZENSHIP"
            subTitle="Technical University of Ambato (May. 2022)"
            result="5/5"
            imgSrc="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/Certificado_Congreso_Foro_Internacional.jpg?alt=media&token=625390a2-5df4-4c51-88bb-92e743379c42"
          />
          <ResumeCard
            title="Python Essentials 1"
            subTitle="Cisco Networking Academy (May. 2024)"
            result="5/5"
            imgSrc="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/Certificado_Curso_Python_Essentials_1.jpg?alt=media&token=638c5c64-6689-40bd-aa4a-493b817e39fe"
          />
          <ResumeCard
            title="Python Essentials 2"
            subTitle="Cisco Networking Academy (June. 2024)"
            result="5/5"
            imgSrc="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/Certificado_Curso_Python_Essentials_2.jpg?alt=media&token=e9553d59-bf52-4632-9dd9-768ae5565fa9"
          />
        </div>
      </div>
      
    </motion.div>
  );
}

export default Education;
