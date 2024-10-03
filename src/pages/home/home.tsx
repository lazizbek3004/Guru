import { useState } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/header/navbar";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaSms } from "react-icons/fa";
import { GiBreakingChain } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { TbPinnedFilled } from "react-icons/tb";

export const Home = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [things, setThings] = useState("respo");

  //   respo certi gradu secur

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <Navbar visibleNav={visibleNav} setVisibleNav={setVisibleNav} />

      <div
        className="flex flex-col w-full  "
        onClick={() => setVisibleNav(false)}
      >
        <div className="w-full min-h-[508px] bg-heroImage bg-center"></div>
        {/* first section */}
        <div className="w-full bg-[#F9F9F9] border-b-4 border-t-4 border-[#F2F2F2] flex justify-center items-center py-7 ">
          <div className="xl:min-w-[1170px] px-10 xl:px-0 max-w-[1170px] justify-center flex flex-col xl:justify-start xl:items-start items-center gap-[30px]">
            <p className="w-full createRound font-normal text-[22px] leading-[28px] text-[#355C7D] text-center xl:text-left">
              Be the first to know about new Course and Discounts: Subscribe to
              Newsletter
            </p>
            <div className="flex flex-col xl:flex-row gap-5 items-center">
              <input
                type="text"
                placeholder="Enter name"
                className="bg-[#F2F2F2] pl-3 py-[14px] pr-52 "
              />
              <input
                type="text"
                placeholder="Enter name"
                className="bg-[#F2F2F2] pl-3 py-[14px] pr-52 "
              />
              <button className="uppercase rounded-[5px] bg-[#355C7D] active:bg-[#587c9c] text-white px-[15px] py-[14px] ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* second section */}
        <div className="w-full flex justify-center bg-white py-16">
          <div className="xl:min-w-[1170px] max-w-[1170px] flex flex-col xl:flex-row gap-10 xl:gap-0 justify-center xl:justify-between items-start ">
            <div className="flex flex-col items-center">
              <div className="h-[88px] flex justify-center items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/de6b/0f3a/1b632f7f210b3b8d9b7c46f145f7969e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oPhauguUnOA5bm1-Zp3AHQLutnDkaUR4zRoIyg9ZZGdTFn46CXcONpdaX7sODyRg6QSN3VR49oe1PHLjqdqYftdEhhcblgYxdeqMkgrMiPoNpJMCJMk7UzB4DkLwpUdRi7zooOSG2qPD9nKkt5FH-B1ACWOTwsOxC47xr~ehjlnkUcSyTywbDK18gDYs-uGD01ulRVzDORvtyukJ1RZ~g6su6t6QLNVqrf9S8cfVvzcyT9ii3Ni-GaGdN9AWqWYw46sVpI~eMItQ9zZDF87iNgv7w~febywtxTx3MToFYfsqafGwtmyySGJrHcT5le6CAdZaRf-~VH9I~WmT6XIxKw__"
                  alt=""
                />
              </div>
              <h1 className="createRound text-[20px] font-normal leading-[25px] text-[#355C7D] uppercase mt-5 mb-3 ">
                We coach easy
              </h1>
              <h2 className="font-light text-[16px] leading-[28px] text-[#3F4944] mb-10 ">
                Learn the best Way
              </h2>
              <p className="openSans font-normal text-[14px] leading-[28px] text-[#86999B] text-center ">
                Sit voluptatem accusantium doloremque <br />
                laudantium, totam rem aperiam.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[88px] flex justify-center items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f17b/4590/e14a4867b5d65a555a58234cbaaf4db9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPOIqhjAvVJLLq624XHy66ze5d286OC50nzctCKzbgwyTGFlrNrR22D1JX4271szgm15Ylitjl17Gd1PZTivxmJjJUBbvvWCAmZBQVtFOb12L7WFFzx-PZug5-18wuirsiywqcZ3dHE8NqPiqcRIYee78p-8TBreNceezDZsdAbY3H88WT07RQhHCjO03BUvHpgw9zgDJQgfVLGPamt6IuK0aBLRZ0Hk5hRK03w~rEJlkoP0AOO~8h84qkBsX4z5DQqsXLnLev7pMIbKfgP898laVvO8lOEGLNGooPAUVC~h5~Ky9nQbpbz~jYKaJnmkywfI-UBL-YEdcsD5xlMS5g__"
                  alt=""
                />
              </div>
              <h1 className="createRound text-[20px] font-normal leading-[25px] text-[#355C7D] uppercase mt-5 mb-3 ">
                Creative Course
              </h1>
              <h2 className="font-light text-[16px] leading-[28px] text-[#3F4944] mb-10 ">
                Creative Coaching
              </h2>
              <p className="openSans font-normal text-[14px] leading-[28px] text-[#86999B] text-center ">
                Doloremque laudantium, totam rem <br />
                aperiam, eaque ipsa quae ab illo
                <br /> inventore.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[88px] flex justify-center items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/40c1/e6ee/eea8947c112f089ffc431032de9c0df6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Og-IX9y3~YJBkbFyT-B2fjfGkeg5MiDy5GUMRiqZTnL8nrBP0tce2~indQp2DyywvpmXB5ihYldJnx8Kg4VfX~8nYHZw4YAU0lOw0HRhf5wqkNCr~K~rmZetA-R144loJqj8iGeHTpnxYGhY0AiyMXSK06SLieg66DlzLALJTyt9CgorXceeX9Jzm8FIro95Vcxo96A9~8-6J5DTUbIBayzXuZIhNOdRVVi9ophCFDgE19R43ZnoYNczgm0jRbfh82xZAikV2eQ4nvGoouhM08R6LHTBbzjstktCpT1MDh3wrVXogMDs8sLy9pp23ll1mY9bus8CI1SwMnueNlm6NA__"
                  alt=""
                />
              </div>
              <h1 className="createRound text-[20px] font-normal leading-[25px] text-[#355C7D] uppercase mt-5 mb-3 ">
                Innovative Idea
              </h1>
              <h2 className="font-light text-[16px] leading-[28px] text-[#3F4944] mb-10 ">
                Design your Course
              </h2>
              <p className="openSans font-normal text-[14px] leading-[28px] text-[#86999B] text-center ">
                Accusantium doloremque laudantium, <br />
                totam rem aperiam, eaque ipsa.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[88px] flex justify-center items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/299a/a53c/35b952d67a380ad81721f6cb7078bbe6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mDusd5ZjT9USOAbNfM-jwbr-PpY6spYRQFy18C-wDufII-9ZrHueScJ~VFnyHkzLHUN1ppUIbhnei3nsfGT0DCIccX~vKeRwWTuAO01DKSBtdc3KJdGg9mtT3LIpzP05ubE0AAhL55aOKyh8Tqe1fwO5nlqTDt5XEMQWf4tID6-wvDav2V8kMtR6pjbjJ2P3rga6kebemzdAqSSP7u6GIZZxtW5jYPygLuwGQOIXi6aHE~QDRnXgUGvw4EtpM~VyjdszQEk7GdeH29Bypt0d4kPCxZvcYJSh4cMwiaWNTzveEsfue8lf6GoHm4jQWTF2ZwPYuJswyHfH9Gj0AH~Qmw__"
                  alt=""
                />
              </div>
              <h1 className="createRound text-[20px] font-normal leading-[25px] text-[#355C7D] uppercase mt-5 mb-3 ">
                Trained Facility
              </h1>
              <h2 className="font-light text-[16px] leading-[28px] text-[#3F4944] mb-10 ">
                Get Everything Right
              </h2>
              <p className="openSans font-normal text-[14px] leading-[28px] text-[#86999B] text-center ">
                Totam rem aperiam, eaque ipsa quae ab <br />
                illo inventore veritatis et quasi architecto.
              </p>
            </div>
          </div>
        </div>
        {/* third section */}
        <div className="w-full flex flex-col items-center gap-[50px] bg-white pb-20">
          <div className="xl:min-w-[1170px] flex items-center gap-[20px]">
            <h1 className="createRound font-normal text-[22px] leading-[28px] uppercase text-left ">
              our team
            </h1>
            <div className="flex-grow h-[2px] bg-[#F4F4F4]"></div>
          </div>
          <div className="xl:min-w-[1170px] max-w-[1170px] flex flex-col xl:flex-row gap-10 xl:gap-0 justify-center xl:justify-between items-center">
            <div className="max-w-[273px] flex flex-col justify-center rounded-[8px] border-[2px] border-[#F4F4F4] text-center overflow-hidden ">
              <img
                src="https://s3-alpha-sig.figma.com/img/20e1/0d8c/228baaf8fdbe041a8bac816e9f4330aa?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=emY0KjpcdA4u8Va0-SiFAuhBBhVq5cv68a0DdWjtnfliYvXIrg8uRODmq-2f6tDFNTsTdZOGeG4z0CHr7VgZ5Ilw8lW2yqudh~WpXq2uWuJ-g-I-6uYTKbYS6NVgRmVPKhJ2-vkQrvq3OJ0jLySofMG~wTfwUVHxu2d0W5nt3m2eqFfvQNxo5kOa~ym3KBzogdLUL6DNgQs8Sm3XIv2pfsM7SnfdL5BsO8j7ikZObX3vPNv-nFQkC~EY8j~ovPF8YV2ZHeL8UCb-0Wr6p25ycGco7O1vEWzI1EJC0Pa6EdEIN0P4muSIBil-AjSpvpu4eV51Iib93Rp~LAmY6xcCJA__"
                alt=""
              />
              <h1 className="createRound font-normal text-[18px] text-[#355C7D] mt-4 ">
                Mickey Rorey
              </h1>
              <h2 className="openSans leading-[24px] font-normal text-[13px] mb-3 ">
                Founder
              </h2>
            </div>
            <div className="max-w-[273px] flex flex-col justify-center rounded-[8px] border-[2px] border-[#F4F4F4] text-center overflow-hidden ">
              <img
                src="https://s3-alpha-sig.figma.com/img/cc1a/16a5/a94b8ddfffb5e5d744cb245292fca10a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IRZb0Oa-KArHiq10l0SXX8EBC-7SoJt4qDdwle-cPa0Jj2dvP8n10gwEsV9sm1Bl2BB9I45pK8WvGPJwm~l2CmV9x8~kl8BdAqKHKosTLLVYYhYYJFq8qtLXcVzi77OP9TjDqEr1ynSjRGxphgazgV8vq5PnlCPGsMs6YsyRY~k0mSIMroGsaJ5q0d6HTYz3rskne7VSDuInxzb6tzOJmRNnnq4fDoGpG0HpmOGXW2CeznsSvPGQ97C6JPIArhYe~FaSzCLQ38l6ZzCZlV2okgvPPdjsaGCeiyN8PIVeiSaMIpJ7gsOvIh7BCzr13NUm7bBibLi4H~QmI3w1p8a6LQ__"
                alt=""
              />
              <h1 className="createRound font-normal text-[18px] text-[#355C7D] mt-4 ">
                Damie Glendell
              </h1>
              <h2 className="openSans leading-[24px] font-normal text-[13px] mb-3 ">
                Co-Director
              </h2>
            </div>
            <div className="max-w-[273px] flex flex-col justify-center rounded-[8px] border-[2px] border-[#F4F4F4] text-center overflow-hidden ">
              <img
                src="https://s3-alpha-sig.figma.com/img/8b93/4455/00bb77fc4029e952c97e9c9f5a86bc61?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nbsvekBcSfvpVDjlI5e26J7PZORp7Suh4KXWGMmi9cTrOTIXwY-z9SP9SYB0jE6klIMcaR4GojceT7Htphxqj99zkZzJmb7BGCcnhYkXJ6PWqWPXcuxWwxh7~XN2MfEn9mSRkwGhiBtix8q2igk2TESu~6nY~Qql-QmWTkRsadyiCi7O22ShyItjzsc21-boSHHNGetWaIDfsmKNhkKzRLmQQMG~4UWHyQmysmbq~WYDvkYA3iWpjYN73UWJSj0GfOaPjFo66KTa-fsngMvn1jrSHqbo2RY9GvBi-3nDwWo2fY8UfNvungK70SQgX6yczfUQk68iuqhr9W~YeizqSw__"
                alt=""
              />
              <h1 className="createRound font-normal text-[18px] text-[#355C7D] mt-4 ">
                Jenny Sheen
              </h1>
              <h2 className="openSans leading-[24px] font-normal text-[13px] mb-3 ">
                Marketing Director
              </h2>
            </div>
            <div className="max-w-[273px] flex flex-col justify-center rounded-[8px] border-[2px] border-[#F4F4F4] text-center overflow-hidden ">
              <img
                src="https://s3-alpha-sig.figma.com/img/2ccd/c4a8/f45aa49576154c94b99492991fd89bf1?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jP0PIka2NQD616WyJfuY02IW4~ZPxUSwliNo5ZKMhjvEoeMZnSMFjmEcETgw2ppUxpYpALK9wU23Vyubz7tinYxZXphT0UT5N~a8olCMBnKr1QpKQR~pofXWva8ngXg~BmnZwXJ6l8xGf6ajklC7oBi4bTY8KtdV9ASzVqBzSiRnfwf9wSsoIb2fOpk24SIiNfBWa9Dg-fRQpY1JxFVziCCYcjXNmLFhPYmcK5wESaPKBHOrSlQ09Bg-5MBUdO30DXKOh1pm3~tEGTe6vhyeYSH88WulxXpxTpaMb-5l77ZxGjwJP4rXYdpphRoEHv2t3mO6PQsezC0r-dFKuQdRrQ__"
                alt=""
              />
              <h1 className="createRound font-normal text-[18px] text-[#355C7D] mt-4 ">
                James Catwin
              </h1>
              <h2 className="openSans leading-[24px] font-normal text-[13px] mb-3 ">
                Art Director
              </h2>
            </div>
          </div>
        </div>
        {/* fourth section */}
        <div className="w-full flex justify-center py-10 bg-[#355C7D] ">
          <div className="xl:min-w-[1170px] max-w-[1170px] flex flex-col xl:flex-row gap-10 xl:gap-0 justify-between ">
            <div className="flex flex-col justify-center items-center">
              <img src="images/firstImage.svg" alt="" />
              <h1 className="mt-2 mb-3 text-white createRound font-normal text-[45px] leading-[28px] ">
                3000
              </h1>
              <h2 className="text-[#739CBF] openSans text-[16px] leading-[22px] font-light ">
                Learners Educated
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src="images/secondImage.svg" alt="" />
              <h1 className="mt-2 mb-3 text-white createRound font-normal text-[45px] leading-[28px] ">
                250
              </h1>
              <h2 className="text-[#739CBF] openSans text-[16px] leading-[22px] font-light ">
                Categories Listed
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src="images/thirdImage.svg" alt="" />
              <h1 className="mt-2 mb-3 text-white createRound font-normal text-[45px] leading-[28px] ">
                75
              </h1>
              <h2 className="text-[#739CBF] openSans text-[16px] leading-[22px] font-light ">
                Languages Available
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src="images/fourthImage.svg" alt="" />
              <h1 className="mt-2 mb-3 text-white createRound font-normal text-[45px] leading-[28px] ">
                1530
              </h1>
              <h2 className="text-[#739CBF] openSans text-[16px] leading-[22px] font-light ">
                Courses Available
              </h2>
            </div>
          </div>
        </div>
        {/* fifth part */}
        <div className="w-full flex justify-center pt-20 pb-12">
          <div className="w-full xl:max-w-[1170px] flex items-center justify-between px-10 xl:px-0 ">
            <h1 className="uppercase font-normal text-[22px] leading-[28px] text-[#2C2C2C] ">
              our featured courses
            </h1>
            <div className="flex-grow h-px mx-5 bg-[#F4F4F4] "></div>
            <div className="flex text-[24px] text-[#507ba1] ">
              <div className="text-[#355C7D] cursor-pointer active:text-[#507ba1]">
                <FaChevronLeft />
              </div>
              <div className="text-[#355C7D] cursor-pointer active:text-[#507ba1]">
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
        {/* sixth part */}
        <div className="w-full flex justify-center">
          <div className="w-full xl:max-w-[1170px]  flex flex-col xl:flex-row justify-center  xl:justify-between mb-14 items-center gap-10">
            <div className="max-w-[376px] flex flex-col border-[1px] border-[#F2F1F2] gap-2 ">
              <img
                className="w-[376px]"
                src="https://s3-alpha-sig.figma.com/img/5113/a64d/2377a187f18636db4f08376feacb9a3b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOnuaj~6CMZDws8r2~FeQ3h5jC8M9l2Z7ZyDdfZBbjT7QUmD4NZdAHLk7jWiGym~YvG2JiLXXvh93PHzl6oqph0rhIsiTLjPwFtF5KaEGmwaQiPxUVPs5DzTL883UCwpW5tiavC-i-xwlSm7jkUyQGZzCGQppgc6VLYO9OK7xahSwoCGXdpdmbFlwHXltx5BIt0vMHrUoZSTYYcVlZp5dW72t4NiLoHVlkzPfcK9g1Q29Q0sRqfN~kCuSwvjkoYxlI0PwwohdPcrEQ0WdHGI61qKnG4YI-NnSe-WI5DjO6HFa-8cXdVGgeTfBHPRtqSBmb4LvmSfdzBooXA2KS3nBg__"
                alt=""
              />
              <div className="flex flex-col justify-start items-start p-5">
                <h1 className="openSans font-semibold text-[13px] leading-[28px] text-[#D95B43] ">
                  Guitar
                </h1>
                <h1 className="createRound font-normal text-[18px] leading-[23px] text-[#355C7D] ">
                  Summer Holidays Education
                </h1>
                <div className="w-full flex justify-between items-center mt-5">
                  <button className="p-2 rounded-[5px] bg-[#355C7D] active:bg-[#4e6f8b] text-[white] createRound text-[17px] leading-[28px] ">
                    Free
                  </button>
                  <h1>7 lessons</h1>
                </div>
              </div>
            </div>
            <div className="max-w-[376px] flex flex-col border-[1px] border-[#F2F1F2] gap-2 ">
              <img
                className="w-[376px]"
                src="https://s3-alpha-sig.figma.com/img/faee/2be3/9efe4553c1100bde8cda6a8fdf356c81?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nwqg53RpxL0BfD-pF~Pv0h7B9cxrw1QtrBFQMfOng3RRv2bgY9WL6DjRkhOjbg3bEXRZSGPtDwPcaLwgerVQX8TeaTzs2Y37wDBwItvQ62koQlG~Dfb74k99695zeIZn3400a5M~6Zs5dAPHairTLSulkVhsTec10w97PGvWmP1e~F52ENvdGFm9TYbWVWu-yZwSmHxU4ObUgBDIs9~KUk~Vu4CjklffgH~qtLfdjmjPEIPhUUHDzPJBL0TDzoRAMRCO-VOiF8nqtMwiVHCR7PNQWlNfmkS1iujPmsDpqzL7oxcRaWifU7haHNOEcnto2E89dB5lSYTyWqAFkgxj6Q__"
                alt=""
              />
              <div className="flex flex-col justify-start items-start p-5">
                <h1 className="openSans font-semibold text-[13px] leading-[28px] text-[#D95B43] ">
                  Hospitality
                </h1>
                <h1 className="createRound font-normal text-[18px] leading-[23px] text-[#355C7D] ">
                  Become a Dentist
                </h1>
                <div className="w-full flex justify-between items-center mt-5">
                  <button className="p-2 rounded-[5px] bg-[#355C7D] active:bg-[#4e6f8b] text-[white] createRound text-[17px] leading-[28px] ">
                    Free
                  </button>
                  <h1>2 lessons</h1>
                </div>
              </div>
            </div>
            <div className="max-w-[376px] flex flex-col border-[1px] border-[#F2F1F2] gap-2 ">
              <img
                className="w-[376px]"
                src="https://s3-alpha-sig.figma.com/img/019a/efb0/a24e51f8d629515938152293d1f8eb17?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J48ISIO-zjw1zE~1Vqup4WLuOkoxRdZ1bLVVUToGQ8JMIHhC~QV4MmTwjt3wb2fsr6eORYMeXQ4MeROIZlOjx-fOfJLfv0VU5fWrfa5Zm0fzHJs1GMEyITzmOsXUKYdxHSyDPdmMmgADdK0gHxeK9U0~oDNvObDiRdHNDj0ZFg9iPP5RDlt0REXUxMOvhswx99iS0mv9Rt5dQru0JgUCrWykk59IZhEuFenqAR4rsS6JxQeyqP81sXlfXlemoDIIaXzrtl~KpstCPy-O0xB2SVPuv7dvJbTvL4cDBLAXSn05JfDk7htEwYccs9kmlgEacgufaU6kYkEpDsbweXdjEg__"
                alt=""
              />
              <div className="flex flex-col justify-start items-start p-5">
                <h1 className="openSans font-semibold text-[13px] leading-[28px] text-[#D95B43] ">
                  Marketing
                </h1>
                <h1 className="createRound font-normal text-[18px] leading-[23px] text-[#355C7D] ">
                  Marketing Management
                </h1>
                <div className="w-full flex justify-between items-center mt-5">
                  <button className="p-2 rounded-[5px] bg-[#355C7D] active:bg-[#4e6f8b] text-[white] createRound text-[17px] leading-[28px] ">
                    £15.00
                  </button>
                  <h1>3 lessons</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* seventh part */}
        <div className="w-full flex justify-center pt-10 pb-12">
          <div className="w-full xl:max-w-[1170px] flex items-center justify-between px-10 xl:px-0 ">
            <h1 className="uppercase font-normal text-[22px] leading-[28px] text-[#2C2C2C] ">
              Upcoming events
            </h1>
            <div className="flex-grow h-px mx-5 bg-[#F4F4F4] "></div>
            <div className="flex text-[24px] text-[#507ba1] ">
              <div className="text-[#355C7D] cursor-pointer active:text-[#507ba1]">
                <FaChevronLeft />
              </div>
              <div className="text-[#355C7D] cursor-pointer active:text-[#507ba1]">
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
        {/* eighth part */}
        <div className="w-full flex justify-center pb-10">
          <div className="xl:max-w-[1170px] w-full flex px-10 xl:p-0 gap-5 justify-center flex-col md:flex-row ">
            <img
              className="min-w-[100px]"
              src="https://s3-alpha-sig.figma.com/img/aa2d/4dbe/309dce43be567bae73b86a661a92020b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oRFt2C8WQXAa17Y3CW1t5KxSaZVKxeRR9~~m2h4I7qn1nW0PVB5EVN0MA-y~BeW9~Rrxwawy4tWiFCyqPqmPpPg7bFhNSjuP9FifO4u4Zi~NLItKM-xk4v8t39x3dODJXqjkN7-c4HehqMPU3oSdNueEi28AHQsSYCskd8X8R61uKGRNss7MqofnM53YUSE23Eb1SNyAikGFKn14kCGZtI~D8MQHAxkhAlBUc9ICSbDWOAqlGLgpkIqWZpBzGyflYOVVWHa80uQRVjef35UnutqilKgRLxR6EvfzU~XvrbTDpcH-cueh5ufcu81K3FPLQEWI1aJ~il2SfuKKX-cfPg__"
              alt=""
            />
            <div className="flex-grow flex flex-col justify-start items-start gap-5">
              <div className="flex items-center gap-2">
                <h1 className="createRound font-normal text-[18px] leading-[23px] text-[#000] ">
                  Fast Track Course Opening
                </h1>
                <h1 className="openSans italic text-[14px] font-[300] text-[#A4A093] leading-[23px] ">
                  17 Sep 2019
                </h1>
              </div>
              <p className="w-full openSans font-normal text-[14px] leading-[28px] text-[#86999B] ">
                Pellentesque ut porta libero. Curabitur non auctor nisi.
                Maecenas turpis diam, egestas eget dictum id, condimentum nunc.
                Fusce tempor in purus sed mattis. Nulla cursus eleifend eros sit
                amet tempor.
              </p>
            </div>
          </div>
        </div>
        {/* ninth part */}
        <div className="w-full flex justify-center bg-bgHeroImg bgCustom min-h-[580px] items-center py-10">
          <div className="max-w-[1170px] flex flex-col items-center gap-10 ">
            <h1 className="uppercase w-full text-center createRound font-normal text-[22px] text-[#2C2C2C] ">
              Our blog
            </h1>
            <div className="w-full flex flex-col px-10 lg:px-0 lg:flex-row gap-[18.4525px] justify-between">
              <div className="min-w-[71px] hidden xl:flex flex-col gap-0 rounded-[5px] overflow-hidden">
                <div className="flex flex-col justify-center items-center bg-[#355C7D] py-2 px-1">
                  <h1 className="text-white text-[18px] leading-[24px] h-[24px] openSans font-semibold ">
                    20
                  </h1>
                  <h1 className="text-white text-[18px] leading-[18px] openSans font-normal ">
                    May 2016
                  </h1>
                </div>
                <div className="flex py-2 bg-[#D95B43] items-center justify-center gap-1">
                  <div className="text-white text-[20px]">
                    <FaSms />
                  </div>
                  <h1 className="text-white text-[16px] leading-[28px] font-normal openSans ">
                    0
                  </h1>
                </div>
              </div>
              <div className=" max-w-[471px] flex flex-col justify-start items-start bg-white rounded-[5px] overflow-hidden ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/ab90/390e/3fb9791e2d1a9b322c3bce220789b260?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bAIiWXuzyWMLaw-fl18lKlj4IO3AwvxXi4pfx2JBcvKEstQ~YIRtF7aCtnJ-fLVfedLGUeQjS5GMthEU4qewAZEao8McoLlHKx3pGxFRC5DYhgxfQB3iunqpgJNgiTRW7M22MYIqWvb0HVMFgwavAZCjCRY6Nuj7XDHNYXZN~uoqw6Wtu8H-UyDzVqA8tRXlUwPSnF1UWcFbe15lob3kPHzM1fwnyYiivxRW-gGa-Dc0iDUEL03fEJ6TLnktpYK~rwDGF3Wueag5kdmxFCITEkVWtHFuQ9TY9OroDAYH6S7wUXWXmiosOSSw1IXNOQ~Gs-xGCFlNtCFAxY8RwJct9Q__"
                  alt=""
                />
                <div className="w-full py-5 px-4 flex flex-col justify-start gap-6 border-b-[1px] border-[#ECECEC] ">
                  <h1 className="createRound font-normal text-[18px] leading-[23px] text-[#355C7D] ">
                    Five Training Roles of the CEO
                  </h1>
                  <p className="openSans text-[14px] font-normal leading-[28px] text-[#86999B] ">
                    Cras venenatis erat ac massa ultricies, sollici tudin ullamc
                    orper justo elementum. Donec eu molestie odio, et congue
                    enim....
                  </p>
                </div>
                <div className="flex justify-center gap-3 pl-3 items-center">
                  <div className="text-[20px] text-[#86999B] ">
                    <GiBreakingChain />
                  </div>
                  <div className="w-[1px] h-[50px] bg-[#ECECEC]"></div>
                  <div className="flex justify-center gap-1 items-center">
                    <div className="text-[#86999B] text-[18px]">
                      <IoPersonSharp />
                    </div>
                    <h1 className="text-[14px] font-normal openSans text-[#86999B] ">
                      Ram
                    </h1>
                  </div>
                  <div className="w-[1px] h-[50px] bg-[#ECECEC]"></div>
                  <div className="flex justify-center gap-1 items-center">
                    <div className="text-[#86999B] text-[18px]">
                      <TbPinnedFilled />
                    </div>
                    <h1 className="text-[14px] font-normal openSans text-[#86999B] ">
                      Design
                    </h1>
                  </div>
                </div>
              </div>
              <div className="min-w-[71px] hidden xl:flex flex-col gap-0 rounded-[5px] overflow-hidden">
                <div className="flex flex-col justify-center items-center bg-[#355C7D] py-2 px-1">
                  <h1 className="text-white text-[18px] leading-[24px] h-[24px] openSans font-semibold ">
                    21
                  </h1>
                  <h1 className="text-white text-[18px] leading-[18px] openSans font-normal ">
                    Apr 2016
                  </h1>
                </div>
                <div className="flex py-2 bg-[#D95B43] items-center justify-center gap-1">
                  <div className="text-white text-[20px]">
                    <FaSms />
                  </div>
                  <h1 className="text-white text-[16px] leading-[28px] font-normal openSans ">
                    2
                  </h1>
                </div>
              </div>
              <div className=" max-w-[471px] flex flex-col justify-start items-start bg-white rounded-[5px] overflow-hidden ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/add2/01f4/cfd9c94b7cab2fd5b9edc7952b8ce3a0?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LYLhSla1Ds1qVUZkzdiMx9BkKH-0JAiieZnhwPh79r-YrtJc9nwRxIWtXNQywg4Kg2v~j7G22ph7Z-4MTiGFBmjt0TSfbx9X-pCyDgYRntL4mziRjwJ-3t9~rVdyAcbtJQg72N4GPkBzgDp5286k-cAqECx1hqmytuUB-kAYBGn3MC1NfPCBwpl~TGiEMZWM7rjNCEtptcn59c41RTkf2xn0dIwSNnhhgFCvBD5zPx7TNt0-HFDwDvOYAZDq8HvTfwbnmGT7shQkTuMuSen37Ct07RqgBhMMw8Wn5Sh~Q4LZJi-Idm5LNrPQjnp4SPJbMGoVmziZ7dB1x1AnkwTM5g__"
                  alt=""
                />
                <div className="w-full py-5 px-4 flex flex-col justify-start gap-6 border-b-[1px] border-[#ECECEC] ">
                  <h1 className="createRound font-normal text-[18px] leading-[23px] text-[#355C7D] ">
                    Corporate Training Myths
                  </h1>
                  <p className="openSans text-[14px] font-normal leading-[28px] text-[#86999B] ">
                    Cras venenatis erat ac massa ultricies, sollici tudin ullamc
                    orper justo elementum. Donec eu molestie odio, et congue
                    enim....
                  </p>
                </div>
                <div className="flex justify-center gap-3 pl-3 items-center">
                  <div className="text-[20px] text-[#86999B] ">
                    <GiBreakingChain />
                  </div>
                  <div className="w-[1px] h-[50px] bg-[#ECECEC]"></div>
                  <div className="flex justify-center gap-1 items-center">
                    <div className="text-[#86999B] text-[18px]">
                      <IoPersonSharp />
                    </div>
                    <h1 className="text-[14px] font-normal openSans text-[#86999B] ">
                      Ram
                    </h1>
                  </div>
                  <div className="w-[1px] h-[50px] bg-[#ECECEC]"></div>
                  <div className="flex justify-center gap-1 items-center">
                    <div className="text-[#86999B] text-[18px]">
                      <TbPinnedFilled />
                    </div>
                    <h1 className="text-[14px] font-normal openSans text-[#86999B] ">
                      Design
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tenth part */}
        <div className="w-full flex flex-col items-center pt-[40px] pb-[60px] ">
          <div className="max-w-[1170px] xl:w-full px-10 xl:px-0 flex justify-start gap-[0.2px] ">
            <div
              className={
                things == "respo"
                  ? "p-4 border-[1px] border-[#F2F1F2] rounded-t-[5px] cursor-pointer border-t-2 border-t-[#355C7D] "
                  : "p-4 border-[1px] border-[#F2F1F2] rounded-t-[5px] cursor-pointer "
              }
              onClick={() => setThings("respo")}
            >
              <h1
                className={
                  things == "respo"
                    ? "openSans font-normal text-[15px] text-[#355C7D]  "
                    : "openSans font-normal text-[15px] text-[#2C2C2C] "
                }
              >
                Responsiveness
              </h1>
            </div>
            <div
              className={
                things == "certi"
                  ? "p-4 border-[1px] border-[#F2F1F2] rounded-t-[5px] cursor-pointer border-t-2 border-t-[#355C7D] "
                  : "p-4 border-[1px] border-[#F2F1F2] rounded-t-[5px] cursor-pointer "
              }
              onClick={() => setThings("certi")}
            >
              <h1
                className={
                  things == "certi"
                    ? "openSans font-normal text-[15px] text-[#355C7D]  "
                    : "openSans font-normal text-[15px] text-[#2C2C2C] "
                }
              >
                Certificates
              </h1>
            </div>
            <div
              className={
                things == "gradu"
                  ? "p-4 border-[1px] border-[#F2F1F2] rounded-t-[5px] cursor-pointer border-t-2 border-t-[#355C7D] "
                  : "p-4 border-[1px] border-[#F2F1F2] rounded-t-[5px] cursor-pointer "
              }
              onClick={() => setThings("gradu")}
            >
              <h1
                className={
                  things == "gradu"
                    ? "openSans font-normal text-[15px] text-[#355C7D]  "
                    : "openSans font-normal text-[15px] text-[#2C2C2C] "
                }
              >
                Graduates
              </h1>
            </div>
            <div
              className={
                things == "secur"
                  ? "p-4 border-[1px] border-[#F2F1F2] rounded-t-[5px] cursor-pointer border-t-2 border-t-[#355C7D] "
                  : "p-4 border-[1px] border-[#F2F1F2] rounded-t-[5px] cursor-pointer "
              }
              onClick={() => setThings("secur")}
            >
              <h1
                className={
                  things == "secur"
                    ? "openSans font-normal text-[15px] text-[#355C7D]  "
                    : "openSans font-normal text-[15px] text-[#2C2C2C] "
                }
              >
                Security Features
              </h1>
            </div>
          </div>
          <div className="w-[full] xl:w-[1170px] border-t-[1px] border-t-[#F4F4F4] flex pt-7 flex-col xl:flex-row gap-8 xl:gap-0 justify-center xl:justify-start px-10 xl:px-0">
			<div className="flex flex-col  justify-start items-start max-w-[612px] gap-8">
				<p className="openSans font-normal text-[14px] text-[#86999B] leading-[28px] ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
					laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
					beatae vitae dicta sunt explicabo. Roin a bibendum nibh. Nunc fermentum sit amet mi nec
					consequat.		
				</p>
				<p className="openSans font-normal text-[14px] text-[#86999B] leading-[28px] ">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
					consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
					est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
				
			</div>
			<img src="https://s3-alpha-sig.figma.com/img/7848/c3d1/52a182233b321a7d6eae9a7e54d39ff3?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UV9pw8ke2IRfLGR8JOUFr6LJ~v9rPLAMIQgg4WIemF0VAVSALel1e3tCd-cbAR4SzoIEBV8qs3BihXcojmgWzB62Ax2H4FZOuuCfwqcMY6ljF-LGaTQvvA2F-yXyWY1q4rYicqMJfV1wCKZFiKcIysvK-7rldIjsd1~WyG91UmTAwdZfRlMoNq8LWFC2z7JqO6vr-C543QpA73cJw00bDOPFlYnEhyIkeZ0CcMljP4R6hWxXUhB3w4iUsCdo4RpUW2pmDnXhEqkIKNaOLPUKAmvkE-jJYA08P~Hw4iqFDd5Q79dqj0XbTL2FgSEV8xEl2LC48kRXvva4Wqfo7vj8PA__" alt="" />
		  </div>


        </div>
        {/* 11th part */}
        <div className="w-full flex justify-center my-10 xl:px-0 px-10">
          <div className="max-w-[1170px] w-full flex flex-col items-center justify-center py-10 px-4 gap-4 border-[1px] rounded-[5px] border-[#F2F1F2] ">
            <h1 className="createRound font-normal text-[20px] leading-[26px] text-center ">
              The Best Courses like Elsewhere. Come get trained. Guaranteed
              Placements.
            </h1>
            <h1 className="text-[16px] font-normal leading-[24px] text-center text-[#86999B] ">
              You’ll get what you came for!
            </h1>
            <button className="uppercase bg-[#355C7D] openSans text-white font-semibold text-[14px] leading-[19px] py-2 px-4 rounded-[5px] active:bg-[#5886ad] ">
              read more
            </button>
          </div>
        </div>
        <div className="w-full h-px bg-[#F2F1F2] mb-[24px] "></div>
        <div className="w-full flex justify-center">
          <div className="max-w-[1170px] w-full px-10 flex justify-start items-center mb-7 gap-2">
            <h1 className="openSans font-normal text-[14px] leading-[20px] text-[#86999B] cursor-pointer ">
              Home
            </h1>
            <div className="h-[16px] bg-[#86999B] w-px "></div>
            <h1 className="openSans font-normal text-[14px] leading-[20px] text-[#86999B] cursor-pointer ">
              About
            </h1>
            <div className="h-[16px] bg-[#86999B] w-px "></div>
            <h1 className="openSans font-normal text-[14px] leading-[20px] text-[#86999B] cursor-pointer ">
              Courses
            </h1>
            <div className="h-[16px] bg-[#86999B] w-px "></div>
            <h1 className="openSans font-normal text-[14px] leading-[20px] text-[#86999B] cursor-pointer ">
              News
            </h1>
            <div className="h-[16px] bg-[#86999B] w-px "></div>
            <h1 className="openSans font-normal text-[14px] leading-[20px] text-[#86999B] cursor-pointer ">
              Shop
            </h1>
            <div className="h-[16px] bg-[#86999B] w-px "></div>
            <h1 className="openSans font-normal text-[14px] leading-[20px] text-[#86999B] cursor-pointer ">
              Contact
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
