
import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function AccordionServices({text}) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div id="accordionExample">
      <div className="rounded-lg border-t-3 border-neutral-200  dark:border-neutral-600 ">
        <h2 className="accordion-header mb-0" id="headingThree">
          <button
            className={`${
              show
                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] ]`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center rounded-t-[15px] border-0  px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
            type="button"
            onClick={() => toggleShow(!show)}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            View Details
            <span
              className={`${
                show
                  ? `rotate-[-180deg] -mr-1 transition-all `
                  : `rotate-0 fill-[#1260ae] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse show={show} className="!mt-0 !shadow-none h-auto transition-all duration-500">
          <div className="px-10 pb-8 leading-[1.8rem] h-auto text-left my-4 transition-all duration-500">
            {text.map((details,id)=><li key={id}>{details}</li>)}
          </div>
        </TECollapse>
      </div>
      </div>
     
    </>
  );
}