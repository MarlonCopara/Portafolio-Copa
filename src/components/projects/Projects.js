import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a href="https://github.com/MarlonCopara/BiblioGest" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="BiblioGest"
            des="The Library Management Web Application project focuses on creating a robust platform that efficiently manages all key elements of a library. This includes comprehensive management of books, authors, publishers, categories, users, students, and loans. The application will facilitate the registration, updating, and searching of relevant information, as well as the generation of detailed reports for effective tracking of library activities."
            src="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/BiblioGest.png?alt=media&token=9948da91-5627-46b8-b94e-136a68a3d4d2"
          />
        </a>

        <a href="https://github.com/MarlonCopara/BookApp" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="BookApp"
            des="BookApp is a mobile platform focused on publishing, reading, and managing books with an emphasis on user experience. It allows easy exploration of diverse titles, interaction via comments, and efficient categorization. Powered by Kotlin and Firebase, BookApp supports online and offline reading, personal profile management, bookmarking, and active community participation, all through a streamlined interface."
            src="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/bookapp.png?alt=media&token=9f592a3e-6242-4e44-8932-f8a318cc4d34"
          />
        </a>

        <a href="https://github.com/MarlonCopara/Sistema-Amortizacion-Frontend" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Amortization System"
            des="The amortization and investment simulation platform calculates and analyzes financial scenarios for loans and investments based on user inputs like amount, interest rate, term, and amortization type. It offers payment calculations, amortization schedules, interest accrual, projections, and facilitates comparison of financing options to optimize financial management."
            src="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/Sistema_amortización.png?alt=media&token=07146e0e-0d63-4ff4-9efd-f30cedaf4659"
          />
        </a>

        <a href="https://github.com/MarlonCopara/Sistema-Registro-Asistencia" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Attendance Registration System"
            des="The teacher attendance system efficiently records daily attendance, absences, and justifications with an intuitive interface. It enables administrators to generate detailed reports for monitoring punctuality and overall staff attendance, enhancing institutional planning and operational efficiency."
            src="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/Registro_asistencia.png?alt=media&token=e728ff62-809e-47ad-84bc-20ce34269d58"
          />
        </a>

        <a href="https://github.com/ChristianCLop/simdrive-frontend" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="SimDrive"
            des="SimDrive is an immersive educational platform that simulates realistic driving experiences in virtual environments. Designed to teach traffic rules and driving skills safely and effectively, it uses simulation technology to provide interactive practice sessions and detailed assessments, enhancing the preparedness and safety of aspiring drivers."
            src="https://firebasestorage.googleapis.com/v0/b/appimagenes-c548e.appspot.com/o/SimDriveOS.jpeg?alt=media&token=bed378d4-199f-4de2-8aca-dcc68db76772"
          />
        </a>
      </div>
    </section>
  );
}

export default Projects;
