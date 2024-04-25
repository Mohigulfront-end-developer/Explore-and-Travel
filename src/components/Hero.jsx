import React from 'react'
import Dropdown from "react-dropdown-select";
import HeroImg from "../../public/assets/heropic.png"
import LineHero from "../../public/assets/linehero.svg"

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-between mt-[72px] ml-[80px] mb-[135px]">
          <div className="pt-[33px]">
            <h1 className="text-[64px] font-semibold mb-[74px]">
              Explore and <br />
              Travel
            </h1>
            <h3 className="text-[22px] font-semibold mb-[18px]">
              Holiday finder
            </h3>
            <img src={LineHero} alt="" />
            <div className="flex mt-[48px] gap-[30px] mb-[25px]">
              <Dropdown
                className="mr-[100px] w-[220px] h-[52px]"
                placeholder="Location"
              />
              <Dropdown
                className="mr-[100px] w-[220px] h-[52px]"
                placeholder="Activity"
              />
            </div>
            <div className="flex mt-[48px] gap-[30px] mb-[25px]">
              <Dropdown className="mr-[100px] w-[220px] h-[52px]" placeholder="Grades.." />
              <Dropdown className="mr-[100px] w-[220px] h-[52px]" placeholder="Dates..." />
            </div>

            <button className=" rounded-md px-[45px] py-[8px] mb-[47px] border-solid border-[#FB8F1D] border-2 text-[#FB8F1D] bg-[#FFFFFF] hover:bg-[#FB8F1D] hover:text-[#FFFFFF]">
              Explore
            </button>
          </div>
          <div className="flex mr-[80px]">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero