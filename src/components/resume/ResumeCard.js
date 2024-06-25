import React, { useState } from 'react';

const ResumeCard = ({ title, subTitle, result, des, imgSrc }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const toggleImageSize = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  return (
    <div className="w-full h-1/3 group flex justify-center items-center">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div
        className={`w-full max-w-xl bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne ${
          isImageExpanded ? 'relative z-50' : ''
        }`}
        onClick={toggleImageSize}
      >
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300 text-center">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300 text-center">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        {imgSrc ? (
          <div className="relative flex justify-center">
            <img
              src={imgSrc}
              alt={title}
              className={`w-full h-auto object-cover mt-4 rounded-md transition-transform duration-300 ${
                isImageExpanded ? 'transform scale-150' : ''
              }`}
            />
            {!isImageExpanded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-white opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={toggleImageSize}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm3.5-7a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-2.586l-2.293 2.293a.5.5 0 01-.707 0l-3-3a.5.5 0 01.707-.707L9 9.293l2.293-2.293a.5.5 0 01.707.707L10.707 10l1.646 1.646h-2.586a.5.5 0 010-1h3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 text-center">
            {des}
          </p>
        )}
      </div>
    </div>
  );
}

export default ResumeCard;
