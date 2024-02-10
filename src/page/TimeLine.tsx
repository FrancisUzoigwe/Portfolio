import React from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";

interface Experience {
  year: number;
  workPlace?: string;
  title: string;
  description: string;
  description1?: string;
  description2?: string;
  imageUrl?: any;
}

const TimeLine: React.FC = () => {
  const mode = useSelector((state: any) => state.mode);
  const experiences: Experience[] = [
    {
      year: 2020,
      title: "Full-Stack Developer",
      workPlace: "SwiftCart.NG",
      description:
        "Worked on creating interactive user interface, thereby increasing the traffic by 20%.",
      description1:
        "Worked on ensuring that functionalities and sweet animations for positive user experience ",
      description2:
        "Worked on the server-side to ensure, users are been responded to quickly on a single click of a button",
    },
    {
      year: 2021,
      title: "Full-Stack Developer",
      workPlace: "SwiftCart.NG",
      description:
        "Worked on creating interactive user interface, thereby increasing the traffic by 20%.",
      description1:
        "Worked on ensuring that functionalities and sweet animations for positive user experience ",
      description2:
        "Worked on the server-side to ensure, users are been responded to quickly on a single click of a button",
    },
    {
      year: 2023,
      title: "Full-Stack Developer",
      workPlace: "SwiftCart.NG",
      description:
        "Worked on creating interactive user interface, thereby increasing the traffic by 20%.",
      description1:
        "Worked on ensuring that functionalities and sweet animations for positive user experience ",
      description2:
        "Worked on the server-side to ensure, users are been responded to quickly on a single click of a button",
    },
  ];

  return (
    <div className="container mx-auto px-4 w-full">
      <div className="relative w-full md:w-full lg:w-full xl:w-full 2xl:w-3/4 md:mx-auto md:text-center">
        <div className="md:mx-auto  md:text-center">
          {experiences.map((experience, index) => (
            <Fade triggerOnce={true} delay={1000}>
              <div
                key={index}
                className={`mb-8 relative  py-3 flex md:flex-row flex-col ${
                  index % 2 === 0 ? "md:items-start" : "md:items-end"
                }`}
                style={{ marginTop: index === 0 ? 0 : "-1rem" }}
              >
                <div
                  className={` w-full md:w-1/2 md:order-${
                    index % 2 === 0 ? "2" : "1"
                  } ${index % 2 === 0 ? "md:pl-3" : "md:pr-3"}`}
                >
                  <div className="w-50px h-50px ">
                    <div className="w-[45px] h-[45px] bg-[orange] text-white rounded-full flex items-center justify-center absolute top-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
                      <span className="text-[13px] font-bold">
                        {experience.year}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`w-full md:w-1/2 md:order-${
                    index % 2 === 0 ? "1" : "2"
                  } ${index % 2 === 0 ? "md:pr-3" : "md:pl-3"}`}
                >
                  <div
                    className={`${
                      mode ? "bg-black text-white" : "bg-white text-black"
                    } p-4 rounded-lg shadow-md`}
                  >
                    <h2 className="text-lg font-bold ">{experience.title}</h2>
                    <h2 className="text-lg font-bold ">
                      {experience.workPlace}
                    </h2>
                    <li className="mb-2 w-full text-[15px] text-left">
                      {experience.description}
                    </li>
                    <li className="mb-2 w-full text-[15px] text-left">
                      {experience.description1}
                    </li>
                    <li className="mb-2 w-full text-[15px] text-left">
                      {experience.description2}
                    </li>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
