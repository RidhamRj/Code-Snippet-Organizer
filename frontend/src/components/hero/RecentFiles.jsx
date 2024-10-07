import React from "react";

function RecentFiles() {
  return (
    <div className="">
      <div className="mx-20 flex flex-row  relative justify-between">
        <div className="flex justify-between">
          <h2 className="text-customWhite text-3xl flex-shrink">
            Recent Files
          </h2>
        </div>
        <div className="flex flex-row items-center ">
          <div className="relative flex-1 h-10">
            <input
              type="text"
              placeholder="Search"
              className="w-[20vw] h-full rounded-lg border bg-heroBlack text-center pl-10"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-customWhite"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          {/* <button className="rounded-lg border h-10 w-10 flex items-center justify-center"></button> */}
          <button className="rounded-lg border h-10 w-10 flex items-center justify-center ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentFiles;
