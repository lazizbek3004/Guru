import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaSquareLetterboxd } from "react-icons/fa6";




const Footer = () => {
  return (
    <div className="w-full flex justify-center bg-[#F2F1F2]">
      <div className="min-w-[1170px] xl:max-w-[1170px] flex flex-col justify-center items-center xl:items-start gap-10 xl:gap-0 xl:flex-row xl:justify-between py-10 ">
        <div className="flex flex-col gap-4 xl:gap-10 justify-start items-start">
          <h1 className="text-[#355C7D] text-[20px] font-normal leading-[25px] createRound w-full text-center xl:text-left ">
            About
          </h1>
          <div className="flex gap-5 items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/a4a2/49ac/b5a5e378e1ab4fd063e7bbf288164d56?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZoNJA5OXO8X1L6j1-EyAMLt5xB8Q83zUbZqxFS6PwZYaCA6atn~VKI6iwbRhg78gm0bDKZOA81-t8DuTOLpl-kvrcGgFdAAylhz92Rw2E5HRPIpS0uuxaKtWi01khJn0wlZPLIKC9xQJcStPA0uSqJszXnmtTxTcir7Lp3C2ofkMhTqTHTajZj3rQ4937rhhiueYzbtNMZ8cp7uPOhu7Vf9Uo~aEZduSq6~Az0gr~fNlpO2EHGFP4UqMvtyOZ66RZrOq-PSUCgzF9XlfNXhpU5tGWrxsoSEYNuzMrlzJ2pNY4McXoDj0e5U4Jt5n1hzDEnuifg7On2bXREZ4LOjWcg__"
              alt=""
            />
            <p className="max-w-[483px] openSans font-normal text-[14px] leading-[28px] text-[#86999B] ">
              Guru comes with powerful theme options, which empowers you to
              quickly and easily build incredible store. Cras faucibus risus
              varius.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:gap-10 justify-start items-start">
          <h1 className="text-[#355C7D] text-[20px] font-normal leading-[25px] createRound w-full text-center xl:text-left ">
            Contact Us
          </h1>
          <div className="flex flex-col gap-3 items-start ">
            <div className="flex justify-center items-center gap-3">
              <div className="text-[#86999B]">
                <IoLocationSharp />
              </div>
              <p className="max-w-[227px] text-[#86999B] text-[14px] cursor-pointer font-normal leading-[22px] ">
                Address: 103, C Block, West Street, New York, BMC, US
              </p>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <div className="text-[#86999B]">
                <FaEnvelope />
              </div>
              <p className="text-[#86999B] text-[14px] cursor-pointer font-normal leading-[22px] ">
                Mail:enquires@gmail.com
              </p>
            </div>
            <div className="flex justify-start gap-3 items-center">
              <div className="text-[#86999B]">
                <MdPhone />
              </div>
              <p className="text-[#86999B] text-[14px] cursor-pointer font-normal leading-[22px] ">
                Phone:020 65241 652145
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:gap-10 justify-start items-start">
          <h1 className="text-[#355C7D] text-[20px] font-normal leading-[25px] createRound w-full text-center xl:text-left  ">
            Follow Us
          </h1>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex gap-[10px]">
              <div className="w-[42px] h-[42px] rounded-[50%] cursor-pointer bg-white flex justify-center items-center text-[#86999B] ">
                <RiFacebookFill />
              </div>
              <div className="w-[42px] h-[42px] rounded-[50%] cursor-pointer bg-white flex justify-center items-center text-[#86999B] ">
                <FaTwitter />
              </div>
              <div className="w-[42px] h-[42px] rounded-[50%] cursor-pointer bg-white flex justify-center items-center text-[#86999B] ">
                <FaSquareLetterboxd />
              </div>
              <div className="w-[42px] h-[42px] rounded-[50%] cursor-pointer bg-white flex justify-center items-center text-[#86999B] ">
                <TfiYoutube />
              </div>


            </div>
            <p className="openSans font-normal italic text-[14px] leading-[22px] text-[#86999B] ">We can be supported here!</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;
