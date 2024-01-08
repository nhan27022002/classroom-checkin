import React from "react";

import ClassBlock from "./ClassBlock";

import avt from '../../assets/image/avt.png';

const Sidebar = () => {
    return (
        <div className="bg-white w-full h-full rounded-lg shadow-lg p-2">
            <div className="flex p-4">
                <div className="mr-3">
                    <img src={avt} className="w-[80px] rounded-lg shadow-md"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-normal">Cao Hoàng Thiện</div>
                    <div className="font-normal text-xs opacity-65">thiench@uit.edu.vn</div>
                </div>
            </div>
            <div className="flex flex-col">
                <ClassBlock />
                <ClassBlock />
                <ClassBlock />
                <ClassBlock />
            </div>
        </div>
    );
};

export default Sidebar;