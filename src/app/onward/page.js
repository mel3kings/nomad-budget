import React from "react";
import { PlaneSVG } from "./planeSVG";

const PDFViewer = () => {
  return (
    <div className="pt-10 mt-10 bg-white h-screen relative h-[100vh] bg-red-100 font-sans ">
      <div className="grid grid-rows-10 bg-white w-[50vw] px-10">
        <div className="row-span-1 text-2xl font-semibold">
          04 JAN 2024 &gt; 04 JAN 2024 <span className="font-normal text-lg">TRIP TO</span> TOKYO
        </div>

        <div className="row-span-1 border-t-2 border-black text-2xl font-semibold">
          <span className="font-light text-xl">PREPARED FOR</span>
        </div>
        <div className="row-span-1 text-2xl font-semibold leading-4">TATLONGHARI/MELCHOR ROBLEDO MR.</div>
        <div className="row-span-1 text-2xl font-semibold">TATLONGHARI/APRIL SOMBRIO MS.</div>
        <div className="row-span-1"> </div>
        <div className="row-span-1 pt-12 text-xl font-light leading-2">RESERVATION CODE: WGV36O</div>
        <div className="row-span-1 text-xl border-b border-black pb-10 font-light leading-4">
          AIRLINE RESERVATION CODE: WGV36O
        </div>
        <div className="row-span-1 text-2xl font-semibold flex items-center">
          <PlaneSVG />
          <span className="font-normal pr-2">DEPARTURE: </span>
          THURSDAY 04 JAN
          <span className="font-light text-sm pl-4 text-gray-400">Please verify flight times prior to departure </span>
        </div>

        <div className="row-span-1 pt-4">
          {" "}
          <div className="grid grid-cols-7 w-[100vw] h-[20vh] gaps-1">
            <div className="grid col-span-2 bg-gray-100 font-medium text-xl p-4 leading-5">
              <div>
                JEJU AIR
                <br />
                <p className="font-bold text-xl">7C 1102</p>
              </div>
              {/* <p className="font-bold">asdfd</p> */}
            </div>

            <div className="grid col-span-5 border-t">asd</div>
          </div>
        </div>
        <div className="row-span-1 pt-4">
          {" "}
          <div className="grid grid-cols-8 font-regular w-[100vw] gaps-1 text-lg">
            <div className="grid col-span-5 bg-gray-100 border border-white p-1">Passenger Name:</div>
            <div className="grid col-span-2 bg-gray-100 border border-white p-1">Seats:</div>
            <div className="grid col-span-1 bg-gray-100 border border-white p-1">Booking </div>
          </div>
          <div className="grid grid-cols-8 font-regular w-[100vw] gaps-1 text-lg leading-4">
            <div className="grid col-span-5 border border-white p-1">TATLONGHARI/MELCHOR ROBLEDO MR.</div>
            <div className="grid col-span-2 border border-white p-1">Check-in required</div>
            <div className="grid col-span-1 border border-white p-1">CONFIRMED </div>
          </div>
          <div className="grid grid-cols-8 font-regular w-[100vw] gaps-1 text-lg leading-2 border-b border-black pb-5">
            <div className="grid col-span-5 border border-white p-1">TATLONGHARI/APRIL SOMBRIO MS.</div>
            <div className="grid col-span-2 border border-white p-1">Check-in required</div>
            <div className="grid col-span-1 border border-white p-1">CONFIRMED </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-1/3 left-1/3 text-black text-5xl font-bold">Overlay Text</div> */}
      {/* <div className="absolute bottom-0 left-0 text-black text-5xl font-bold">Overlay Text</div> */}
    </div>
  );
};

export default PDFViewer;
