import React from "react";
import NewExp from "../../public/assets/mainimg1.png";
import Feature1 from "../../public/assets/feature1.png";
import Feature2 from "../../public/assets/feature2.png";
import Feature3 from "../../public/assets/feature3.png";
import Feature4 from "../../public/assets/feature4.png";
import { GoArrowRight } from "react-icons/go";
import NewExp2 from "../../public/assets/mainimg3.png";
import Stars from "../../public/assets/stars.png";
import Man from "../../public/assets/man.png";
import Blog1 from "../../public/assets/blog1.png";
import Blog2 from "../../public/assets/blog2.png";
import Blog3 from "../../public/assets/blog3.png";
import Blog4 from "../../public/assets/blog4.png";





const MainComp = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex justify-between gap-[150px] ml-[80px] mb-[162px] mt-[135px]">
          <div className="">
            <img src={NewExp} alt="" className="max-w-[659px] max-h-[534px]" />
          </div>
          <div className="mr-[150px]">
            <h2 className="font-bold text-[36px] w-[481px] mb-[21px]">
              A new way to explore the world
            </h2>
            <p className="text-[#7D7987] mb-[33px] text-[17px] font-light">
              For decades travellers have reached for Lonely Planet books when
              looking to plan and execute their perfect trip, but now, they can
              also let Lonely Planet Experiences lead the way
            </p>
            <button className=" rounded-md px-[45px] py-[8px] mb-[47px] border-solid border-[#FB8F1D] border-2 text-[#FB8F1D] bg-[#FFFFFF] hover:bg-[#FB8F1D] hover:text-[#FFFFFF]">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="container  mx-auto pt-[30px] pb-[30px] mt-[100px] mb-[170px]">
        <div className="flex justify-center items-center gap-[680px] ml-[80px] mr-[80px] mb-[80px]">
          <h3 className="font-bold text-[36px]">Featured destinations</h3>
          <button className="flex font-semibold text-[17px] text-[#FB8F1D] items-center">
            View all <GoArrowRight className="text-[#FB8F1D]" />
          </button>
        </div>
        <div className="flex justify-center gap-[30px]">
          <img src={Feature1} alt="" />
          <img src={Feature2} alt="" />
          <img src={Feature3} alt="" />
          <img src={Feature4} alt="" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-[80px] ml-[80px] mb-[162px] mt-[70px]">
          <div className="ml-[110px]">
            <h2 className="font-bold text-[36px] w-[381px] mb-[21px]">
              Guides by Thousand Sunny
            </h2>
            <p className="text-[#7D7987] mb-[33px] text-[17px] font-light">
              Packed with tips and advice from our on-the-ground experts, our
              city guides app (iOS and Android) is the ultimate resource before
              and during a trip.
            </p>
            <button className=" rounded-md px-[45px] py-[8px] mb-[47px] border-solid border-[#FB8F1D] border-2 text-[#FB8F1D] bg-[#FFFFFF] hover:bg-[#FB8F1D] hover:text-[#FFFFFF]">
              Download
            </button>
          </div>
          <div className="mr-[150px]">
            <img src={NewExp2} alt="" className="max-w-[659px] max-h-[534px]" />
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-[162px] mt-[70px]">
        <h2 className="font-bold text-[36px] w-[381px] mb-[45px] ml-[180px]">
          Testimonials
        </h2>
        <div className="flex justify-around items-center">
          <div className="">
            <img src={Stars} alt="" className="mb-[30px]" />
            <p className="w-[430px] text-[#000000] mb-[33px] text-[17px] font-[400px] mb-[40px]">
              “Quisque in lacus a urna fermentum euismod. Integer mi nibh,
              dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit
              amet turpis nec”
            </p>
            <span className="font-bold text-[22px] font-[400px] text-[18px]">
              Edward Newgate
            </span>
            <p>Founder Circle</p>
          </div>
          <div className="">
            <img src={Man} alt="" className="max-w-[773px] max-h-[598px]" />
          </div>
        </div>
      </div>
      <div className="container mb-[196px]">
        <div className="flex justify-center items-center gap-[800px] ml-[80px] mr-[80px] mb-[80px]">
          <h2 className="font-bold text-[36px]">Trending stories</h2>
          <button className="flex font-semibold text-[17px] text-[#FB8F1D] items-center">
            View all
            <GoArrowRight className="text-[#FB8F1D]" />
          </button>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <div className="w-[268px]">
            <img src={Blog1} alt="" className="w-[352px] h-[233px]" />
            <h3 className="font-bold text-[19px] my-[13px] w-[261]">
              The many benefits of taking a healing holiday
            </h3>
            <p className="font-normal text-[15px] text-[#7D7987] mb-[23px] w-[266px] h-[78px]">
              ‘Helaing holidays’ are on the rise tohelp maximise your health and
              happines...
            </p>
            <button className="font-semibold text-[15px] text-[#FB8F1D]">
              Read more
            </button>
          </div>
          <div className="w-[268px]">
            <img src={Blog2} alt="" className="w-[352px] h-[233px]" />
            <h3 className="font-bold text-[19px] my-[13px] w-[261]">
              The best Kyoto restaurant to try Japanese food
            </h3>
            <p className="w-[266px] h-[78px] font-normal text-[15px] text-[#7D7987] mb-[23px]">
              From tofu to teahouses, here’s our guide to Kyoto’s best
              restaurants to visit...
            </p>
            <button className="font-semibold text-[15px] text-[#FB8F1D]">
              Read more
            </button>
          </div>
          <div className="w-[268px]">
            <img src={Blog3} alt="" className="w-[352px] h-[233px]" />
            <h3 className="w-[261] font-bold text-[19px] my-[13px]">
              Skip Chichen Itza and head to this remote Yucatan
            </h3>
            <p className="w-[266px] h-[78px] font-normal text-[15px] text-[#7D7987] mb-[23px]">
              It’s remote and challenging to get, but braving the jungle and
              exploring these ruins without the...
            </p>
            <button className="font-semibold text-[15px] text-[#FB8F1D]">
              Read more
            </button>
          </div>
          <div className="w-[268px]">
            <img src={Blog4} alt="" className="w-[352px] h-[233px]" />
            <h3 className="font-bold text-[19px] my-[13px]">
              Surf’s up at these beginner spots around the world
            </h3>
            <p className="w-[266px] h-[78px] font-normal text-[15px] text-[#7D7987] mb-[23px]">
              If learning to surf has in on your to- do list for a while, the
              good news is: it’s never too late...
            </p>
            <button className="font-semibold text-[15px] text-[#FB8F1D]">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
