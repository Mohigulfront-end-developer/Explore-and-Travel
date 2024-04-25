import React from 'react'
import SiteLogo from "../../public/assets/logo.svg"
import FooterLine from "../../public/assets/linefooter.svg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#F9F9FB]">
      <div className="container flex justify-center items-center gap-[150px] py-[75px]">
        <div className="">
          <img src={SiteLogo} alt="" className="mb-[34px]" />
          <p className="mb-[52px] w-[391px] text-[#848484] text-[18px] font-light">
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <p className="w-[391px] text-[#848484] text-[18px] font-light">
            ©2020 Thousand Sunny. All rights reserved
          </p>
        </div>
        <div className="">
          <h4 className="font-bold text-[18px] mb-[20px]">Destinations</h4>
          <li className="mb-[15px] font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Africa
          </li>
          <li className="mb-[15px] font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Antarctica
          </li>
          <li className="mb-[15px] font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Asia
          </li>
          <li className="mb-[15px] font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Europe
          </li>
          <li className="font-light text-[18px] text-[#848484] hover:text-[#000000]">America</li>
        </div>
        <div className="">
          <h4 className="font-bold text-[18px] mb-[20px]">Shop</h4>
          <li className="mb-[15px] font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Destination Guides
          </li>
          <li className="mb-[15px] font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Pictorial & Gifts
          </li>
          <li className="mb-[15px] font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Speacial Offers
          </li>
          <li className="mb-[15px] font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Delivery Times
          </li>
          <li className="font-light text-[18px] text-[#848484] hover:text-[#000000]">FAQs</li>
        </div>
        <div className="">
          <h4 className="font-bold text-[18px] mb-[20px]">Interests</h4>
          <li className="mb-[15px] font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Adventure Travel
          </li>
          <li className="mb-[15px] font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Art And Culture
          </li>
          <li className="mb-[15px] font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Wildlife And Nature
          </li>
          <li className="mb-[15px] font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Family Holidays
          </li>
          <li className="font-light text-[18px] text-[#848484] hover:text-[#000000]">
            Food And Drink
          </li>
        </div>
      </div>
      <div className="block mx-[150px]">
        <img src={FooterLine} alt="" />
        <div className="flex justify-center items-center gap-[15px] py-[30px]">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
}

export default Footer