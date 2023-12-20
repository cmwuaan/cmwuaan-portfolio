import React from 'react';

export default function WebItem() {
  return (
    <div className=" w-[560px] h-[364px] bg-white border border-white border-opacity-20 bg-opacity-10 rounded-md scale-75 lg:scale-100 -translate-y-5 md:-translate-y-5 lg:translate-y-5">
      <div className="flex gap-2 px-4 py-2">
        <div className="w-[16.5px] h-[16.5px] bg-white bg-opacity-20 rounded-full"></div>
        <div className="w-[16.5px] h-[16.5px] bg-white bg-opacity-20 rounded-full"></div>
        <div className="w-[16.5px] h-[16.5px] bg-white bg-opacity-20 rounded-full"></div>
      </div>
      <div className="w-full h-[1px] bg-white bg-opacity-20"></div>

      {/* Element Item */}
      <div className=" mt-10 ml-10 w-[208px] h-[124px] bg-white border border-white border-opacity-20 bg-opacity-5 shadow-lg shadow-white/[0.03] rounded-sm">
        <div className="flex gap-2 px-2 py-1">
          <div className="w-[8px] h-[8px] bg-white bg-opacity-20 rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white bg-opacity-20 rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white bg-opacity-20 rounded-full"></div>
        </div>
        <div className="w-full h-[1px] bg-white bg-opacity-20"></div>
      </div>

      {/* Element Item */}
      <div className=" ml-[300px] w-[208px] h-[124px] bg-white border border-white border-opacity-20 bg-opacity-5 shadow-lg shadow-white/[0.03] rounded-sm">
        <div className="flex gap-2 px-2 py-1">
          <div className="w-[8px] h-[8px] bg-white bg-opacity-20 rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white bg-opacity-20 rounded-full"></div>
          <div className="w-[8px] h-[8px] bg-white bg-opacity-20 rounded-full"></div>
        </div>
        <div className="w-full h-[1px] bg-white bg-opacity-20"></div>
      </div>
    </div>
  );
}
