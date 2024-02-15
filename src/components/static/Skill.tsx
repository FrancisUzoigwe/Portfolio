import React from "react";
import { useSelector } from "react-redux";
import Fade from "react-awesome-reveal"

interface iSkill {
    text?: string;
    src?: any;
    style?: string;
}


const Skill: React.FC<iSkill> = ({ src, text, style }) => {
    const mode = useSelector((state: any) => state.mode)
    return (
        <Fade triggerOnce={true}>
            <div className={`h-[100px] max-md:h-[80px] max-md:gap-2 max-md:w-[80px] w-[100px] border-[2px]  rounded-full relative flex items-center justify-center ${style} ${mode ? "border-black" : "border"}`}>
                <img src={src} alt="Redux" className={`w-[60%] h-[60%] ab`} />
                <div className="w-full h-full rounded-full bg-[gray] absolute opacity-0 hover:opacity-80 hover:cursor-pointer text-center transition duration-300 flex items-center justify-center">
                    <div className="">{text}</div>
                </div>
            </div>
        </Fade>
    )
}

export default Skill