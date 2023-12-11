import React from "react";
import { PlaneSVG } from "./planeSVG";

const PDFViewer = () => {
  return (
    <div className="pt-10 bg-white h-screen relative h-[100vh] w-[100vw]">
      <div className="grid bg-white px-10">
        <div className="row-span-1 text-2xl font-semibold">
          04 JAN 2024 &gt; 04 JAN 2024 <span className="font-normal text-lg">TRIP TO</span> TOKYO
        </div>
        <div className="row-span-1 border-t-2 border-black text-2xl font-semibold">
          <span className="font-light text-xl">PREPARED FOR</span>
        </div>
        <div className="row-span-1 text-2xl font-semibold leading-4 ">TATLONGHARI/MELCHOR ROBLEDO MR.</div>
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
          <span className="font-normal text-sm pl-4 text-gray-400">Please verify flight times prior to departure </span>
        </div>
        <div className="row-span-1 pt-4">
          {" "}
          <div className="grid grid-cols-12 h-[25vh] gaps-1">
            <div className="grid col-span-3 bg-gray-100 font-medium text-xl p-4 leading-5">
              <div>
                JEJU AIR
                <br />
                <p className="font-bold text-xl">7C 1102</p>
                <br />
                <p className="font-medium text-sm">
                  Duration: 2hr(s) 25min(s) <br />
                  Class: ECONOMY Q
                </p>
                <br />
                <p className="font-medium text-sm">Status: Confirmed</p>
              </div>
            </div>
            <div className="grid col-span-6 font-medium text-lg">
              <div className="grid grid-cols-2 grid-rows-2 border-t border-t-gray-200 border-b border-b-gray-200">
                <div className="col-span-1 px-2 row-span-1 border-b border-dashed border-b-gray-300 font-medium">
                  ICN <br />
                  Seoul, KR
                </div>
                <div className="col-span-1 px-2 row-span-1 border-b border-dashed border-b-gray-300 border-r border-r-gray-300">
                  NRT
                  <br />
                  Tokyo, JP
                </div>
                <div className="col-span-1 px-2 row-span-1 border-dashed border-r border-r-gray-300">
                  <span className="text-sm font-medium">Departing At:</span> <br />
                  08:10
                  <br />
                  <div className="leading-3">
                    <span className="text-sm font-medium">Terminal:</span>
                    <br />
                    <span className="text-sm font-medium">1</span>
                  </div>
                </div>
                <div className="col-span-1 px-2 row-span-1 border-dashed border-r border-r-gray-300">
                  <span className="text-sm font-medium">Arriving At:</span> <br />
                  10:33
                  <br />
                  <div className="leading-3">
                    <span className="text-sm font-medium">Terminal:</span>
                    <br />
                    <span className="text-sm font-medium">3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid col-span-3 border-t border-t-gray-200 border-b border-b-gray-200 border-r border-r-gray-300 font-regular text-sm p-4 leading-5 whitespace-nowrap">
              Aircraft: <br />
              <br />
              BOEING 737-800
              <br />
              <br />
              Distance (in miles):
              <br /> Not Available
              <br /> Stop(s): 0 <br />
              <br /> Meals: <br />
              Not Available
            </div>
          </div>
          <div className="row-span-1 pt-4">
            {" "}
            <div className="grid grid-cols-8 font-regular gaps-1 text-lg">
              <div className="grid col-span-5 bg-gray-100 border border-white p-1">Passenger Name:</div>
              <div className="grid col-span-2 bg-gray-100 border border-white p-1">Seats:</div>
              <div className="grid col-span-1 bg-gray-100 border border-white p-1">Booking </div>
            </div>
            <div className="grid grid-cols-8 font-regular gaps-1 text-lg leading-4">
              <div className="grid col-span-5 border border-white p-1">TATLONGHARI/MELCHOR ROBLEDO MR.</div>
              <div className="grid col-span-2 border border-white p-1">Check-in required</div>
              <div className="grid col-span-1 border border-white p-1">CONFIRMED </div>
            </div>
            <div className="grid grid-cols-8 font-regular gaps-1 text-lg leading-2 border-b border-black pb-5">
              <div className="grid col-span-5 border border-white p-1">TATLONGHARI/APRIL SOMBRIO MS.</div>
              <div className="grid col-span-2 border border-white p-1">Check-in required</div>
              <div className="grid col-span-1 border border-white p-1">CONFIRMED </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
