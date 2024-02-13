import React from "react";


interface iSkill {
    text?: string;
    src?: any;
}


const Skill: React.FC<iSkill> = ({ src, text }) => {
    return (
        <div className="h-[100px] w-auto border border-white rounded-xl flex items-center justify-center relative">
            <img src={src} alt="Image" className="w-full h-full object-contain" />
            <div className="w-full h-full absolute bg-[gray] opacity-0 hover:opacity-90 hover:cursor-pointer transition duration-300 rounded-xl flex items-center justify-center">{text}</div>
        </div>
    )
}

export default Skill