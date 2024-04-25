import React from 'react'
import SiteLogo from "../../public/assets/logo.svg"

const Header = () => {
  return (
    <>
      <div className="xl:container xl:mx-auto px-4 flex justify-around items-center gap-[515px] my-[35px]">
        <img src={SiteLogo} alt="logo" />
        <div className="flex justify-between gap-[35px] list-none">
          <li className="text-[#B8BECD] hover:text-[#202336]">Home</li>
          <li className="text-[#B8BECD] hover:text-[#202336]">Destinations</li>
          <li className="text-[#B8BECD] hover:text-[#202336]">About</li>
          <li className="text-[#B8BECD] hover:text-[#202336]">Partner</li>
          <div className="flex items-center gap-[18px]">
            <button className=" rounded-md px-[45px] py-[8px] border-solid border-[#FB8F1D] border-2 text-[#FB8F1D] bg-[#FFFFFF] hover:bg-[#FB8F1D] hover:text-[#FFFFFF]">
              Login
            </button>
            <button className="rounded-md px-[45px] py-[8px] border-solid border-[#FB8F1D] border-2 text-[#FB8F1D] bg-[#FFFFFF] hover:bg-[#FB8F1D] hover:text-[#FFFFFF]">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header