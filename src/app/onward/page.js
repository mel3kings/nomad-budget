"use client";

import React from "react";
import { PlaneSVG } from "./planeSVG";
import { ArrowRightSVG } from "./arrowRightSVG";
import { useUser } from "@auth0/nextjs-auth0/client";
const PDFViewer = () => {
  const { user } = useUser();
  const handlePrint = () => {
    const content = document.getElementById("content");
    if (content) {
      const printWindow = window.open("", "_blank");
      printWindow.document.write("<html><head><title>Print</title></head><body>");
      printWindow.document.write("<div>" + content.innerHTML + "</div>");
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.print();
    } else {
      console.error(`Element with id '${contentId}' not found.`);
    }
  };
  return (
    <>
      {!user && user?.email !== "meltatlonghari3@gmail.com" && <div>Access Denied</div>}

      {user && user?.email === "meltatlonghari3@gmail.com" && (
        <div>
          <div id="content" className="pt-10 bg-white h-screen relative h-[100vh] w-[100vw]">
            <div className="grid bg-white px-10">
              <div className="row-span-1 text-xl font-bold flex">
                04 JAN 2024 <ArrowRightSVG /> 04 JAN 2024{" "}
                <span className="font-normal text-sm flex items-end pl-2 pr-1 pb-0.5">TRIP TO</span> TOKYO
              </div>
              <div className="row-span-1 border-t border-black text-2xl font-semibold">
                <span className="font-normal text-xl">PREPARED FOR</span>
              </div>
              <div className="row-span-1 text-xl font-bold leading-4 ">TATLONGHARI/MELCHOR ROBLEDO MR.</div>
              <div className="row-span-1 text-xl font-bold">TATLONGHARI/APRIL SOMBRIO MS.</div>
              <div className="row-span-1"> </div>
              <div className="row-span-1 pt-12 text-xl font-normal leading-2">RESERVATION CODE: WGV36O</div>
              <div className="row-span-1 text-xl border-b border-black pb-10 font-normal leading-4">
                AIRLINE RESERVATION CODE: WGV36O
              </div>
              <div className="row-span-1 text-xl font-bold flex items-center">
                <PlaneSVG />
                <span className="font-normal pr-2">DEPARTURE: </span>
                THURSDAY 04 JAN
                <span className="font-normal text-sm pl-4 text-gray-400">
                  Please verify flight times prior to departure{" "}
                </span>
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
                        <div className="leading-4 pt-4 font-normal text-sm">
                          ICN <br />
                          Seoul, KR
                        </div>
                      </div>
                      <div className="col-span-1 px-2 row-span-1 border-b border-dashed border-b-gray-300 border-r border-r-gray-300">
                        <div className="leading-4 pt-4 font-normal text-sm">
                          NRT
                          <br />
                          Tokyo, JP
                        </div>
                      </div>
                      <div className="col-span-1 px-2 row-span-1 border-dashed border-r border-r-gray-300 leading-5">
                        <span className="text-sm font-normal">Departing At:</span> <br />
                        08:10
                        <br />
                        <div className="leading-3">
                          <span className="text-sm font-normal">Terminal:</span>
                          <br />
                          <span className="text-sm font-normal">1</span>
                        </div>
                      </div>
                      <div className="col-span-1 px-2 row-span-1 border-dashed border-r border-r-gray-300 leading-5">
                        <span className="text-sm font-normal">Arriving At:</span> <br />
                        10:33
                        <br />
                        <div className="leading-3">
                          <span className="text-sm font-normal">Terminal:</span>
                          <br />
                          <span className="text-sm font-normal">3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="grid col-span-3 border-t border-t-gray-200 border-b border-b-gray-200 border-r border-r-gray-300 
            font-normal text-md p-4 leading-5 whitespace-nowrap"
                  >
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
                  <div className="grid grid-cols-8 font-normal gaps-1 text-md">
                    <div className="grid col-span-5 bg-gray-100 border border-white p-1">Passenger Name:</div>
                    <div className="grid col-span-2 bg-gray-100 border border-white p-1">Seats:</div>
                    <div className="grid col-span-1 bg-gray-100 border border-white p-1">Booking </div>
                  </div>
                  <div className="grid grid-cols-8 font-normal gaps-1 text-md leading-4">
                    <div className="grid col-span-5 border border-white p-1">TATLONGHARI/MELCHOR ROBLEDO MR.</div>
                    <div className="grid col-span-2 border border-white p-1">Check-in required</div>
                    <div className="grid col-span-1 border border-white p-1">CONFIRMED </div>
                  </div>
                  <div className="grid grid-cols-8 font-normal gaps-1 text-md leading-2 border-b border-black pb-5">
                    <div className="grid col-span-5 border border-white p-1">TATLONGHARI/APRIL SOMBRIO MS.</div>
                    <div className="grid col-span-2 border border-white p-1">Check-in required</div>
                    <div className="grid col-span-1 border border-white p-1">CONFIRMED </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handlePrint}>Print</button>
        </div>
      )}
    </>
  );
};

export default PDFViewer;
