import { useState } from "react";
import Footer from "../../components/footer/footer"
import Navbar from "../../components/header/navbar"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


export const Home = () => {

	const [visibleNav, setVisibleNav] = useState(false);	

  return (
	<div className="w-full flex flex-col overflow-hidden">
		<Navbar visibleNav={visibleNav} setVisibleNav={setVisibleNav} />

		<div className="flex flex-col w-full  " onClick={() => setVisibleNav(false)}>
			<div className="w-full min-h-[508px] bg-heroImage bg-center">
			</div>
			{/* first section */}
			<div className="w-full bg-[#F9F9F9] border-b-4 border-t-4 border-[#F2F2F2] flex justify-center items-center py-7 ">
				<div className="xl:min-w-[1170px] px-10 xl:px-0 max-w-[1170px] justify-center flex flex-col xl:justify-start xl:items-start items-center gap-[30px]">
					<p className="w-full createRound font-normal text-[22px] leading-[28px] text-[#355C7D] text-center xl:text-left">Be the first to know about new Course and Discounts: Subscribe to Newsletter</p>
					<div className="flex flex-col xl:flex-row gap-5 items-center">
						<input type="text" placeholder="Enter name" className="bg-[#F2F2F2] pl-3 py-[14px] pr-52 " />
						<input type="text" placeholder="Enter name" className="bg-[#F2F2F2] pl-3 py-[14px] pr-52 " />
						<button className="uppercase rounded-[5px] bg-[#355C7D] active:bg-[#587c9c] text-white px-[15px] py-[14px] ">Subscribe</button>
					</div>
				</div>

				

			</div>
			{/* second section */}
			<div className="w-full flex justify-center bg-white py-16">
				<div className="xl:min-w-[1170px] max-w-[1170px] flex flex-col xl:flex-row gap-10 xl:gap-0 justify-center xl:justify-between items-start ">
					<div className="flex flex-col items-center">
						<div className="h-[88px] flex justify-center items-center">
							<img src="https://s3-alpha-sig.figma.com/img/de6b/0f3a/1b632f7f210b3b8d9b7c46f145f7969e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oPhauguUnOA5bm1-Zp3AHQLutnDkaUR4zRoIyg9ZZGdTFn46CXcONpdaX7sODyRg6QSN3VR49oe1PHLjqdqYftdEhhcblgYxdeqMkgrMiPoNpJMCJMk7UzB4DkLwpUdRi7zooOSG2qPD9nKkt5FH-B1ACWOTwsOxC47xr~ehjlnkUcSyTywbDK18gDYs-uGD01ulRVzDORvtyukJ1RZ~g6su6t6QLNVqrf9S8cfVvzcyT9ii3Ni-GaGdN9AWqWYw46sVpI~eMItQ9zZDF87iNgv7w~febywtxTx3MToFYfsqafGwtmyySGJrHcT5le6CAdZaRf-~VH9I~WmT6XIxKw__" alt="" />
						</div>
						<h1 className="createRound text-[20px] font-normal leading-[25px] text-[#355C7D] uppercase mt-5 mb-3 ">We coach easy</h1>
						<h2 className="font-light text-[16px] leading-[28px] text-[#3F4944] mb-10 ">Learn the best Way</h2>
						<p className="openSans font-normal text-[14px] leading-[28px] text-[#86999B] text-center ">Sit voluptatem accusantium doloremque <br />
						laudantium, totam rem aperiam.</p>

					</div>
					<div className="flex flex-col items-center">
						<div className="h-[88px] flex justify-center items-center">
							<img src="https://s3-alpha-sig.figma.com/img/f17b/4590/e14a4867b5d65a555a58234cbaaf4db9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPOIqhjAvVJLLq624XHy66ze5d286OC50nzctCKzbgwyTGFlrNrR22D1JX4271szgm15Ylitjl17Gd1PZTivxmJjJUBbvvWCAmZBQVtFOb12L7WFFzx-PZug5-18wuirsiywqcZ3dHE8NqPiqcRIYee78p-8TBreNceezDZsdAbY3H88WT07RQhHCjO03BUvHpgw9zgDJQgfVLGPamt6IuK0aBLRZ0Hk5hRK03w~rEJlkoP0AOO~8h84qkBsX4z5DQqsXLnLev7pMIbKfgP898laVvO8lOEGLNGooPAUVC~h5~Ky9nQbpbz~jYKaJnmkywfI-UBL-YEdcsD5xlMS5g__" alt="" />						
						</div>
						<h1 className="createRound text-[20px] font-normal leading-[25px] text-[#355C7D] uppercase mt-5 mb-3 ">Creative Course</h1>
						<h2 className="font-light text-[16px] leading-[28px] text-[#3F4944] mb-10 ">Creative Coaching</h2>
						<p className="openSans font-normal text-[14px] leading-[28px] text-[#86999B] text-center ">Doloremque laudantium, totam rem <br />
																														aperiam, eaque ipsa quae ab illo
																													    <br />	inventore.</p>

					</div>
					<div className="flex flex-col items-center">
						<div className="h-[88px] flex justify-center items-center">
							<img src="https://s3-alpha-sig.figma.com/img/40c1/e6ee/eea8947c112f089ffc431032de9c0df6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Og-IX9y3~YJBkbFyT-B2fjfGkeg5MiDy5GUMRiqZTnL8nrBP0tce2~indQp2DyywvpmXB5ihYldJnx8Kg4VfX~8nYHZw4YAU0lOw0HRhf5wqkNCr~K~rmZetA-R144loJqj8iGeHTpnxYGhY0AiyMXSK06SLieg66DlzLALJTyt9CgorXceeX9Jzm8FIro95Vcxo96A9~8-6J5DTUbIBayzXuZIhNOdRVVi9ophCFDgE19R43ZnoYNczgm0jRbfh82xZAikV2eQ4nvGoouhM08R6LHTBbzjstktCpT1MDh3wrVXogMDs8sLy9pp23ll1mY9bus8CI1SwMnueNlm6NA__" alt="" />
						</div>
						<h1 className="createRound text-[20px] font-normal leading-[25px] text-[#355C7D] uppercase mt-5 mb-3 ">Innovative Idea</h1>
						<h2 className="font-light text-[16px] leading-[28px] text-[#3F4944] mb-10 ">Design your Course</h2>
						<p className="openSans font-normal text-[14px] leading-[28px] text-[#86999B] text-center ">Accusantium doloremque laudantium, <br />
						totam rem aperiam, eaque ipsa.</p>

					</div>
					<div className="flex flex-col items-center">
						<div className="h-[88px] flex justify-center items-center">
							<img src="https://s3-alpha-sig.figma.com/img/299a/a53c/35b952d67a380ad81721f6cb7078bbe6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mDusd5ZjT9USOAbNfM-jwbr-PpY6spYRQFy18C-wDufII-9ZrHueScJ~VFnyHkzLHUN1ppUIbhnei3nsfGT0DCIccX~vKeRwWTuAO01DKSBtdc3KJdGg9mtT3LIpzP05ubE0AAhL55aOKyh8Tqe1fwO5nlqTDt5XEMQWf4tID6-wvDav2V8kMtR6pjbjJ2P3rga6kebemzdAqSSP7u6GIZZxtW5jYPygLuwGQOIXi6aHE~QDRnXgUGvw4EtpM~VyjdszQEk7GdeH29Bypt0d4kPCxZvcYJSh4cMwiaWNTzveEsfue8lf6GoHm4jQWTF2ZwPYuJswyHfH9Gj0AH~Qmw__" alt="" />						
						</div>
						<h1 className="createRound text-[20px] font-normal leading-[25px] text-[#355C7D] uppercase mt-5 mb-3 ">Trained Facility</h1>
						<h2 className="font-light text-[16px] leading-[28px] text-[#3F4944] mb-10 ">Get Everything Right</h2>
						<p className="openSans font-normal text-[14px] leading-[28px] text-[#86999B] text-center ">Totam rem aperiam, eaque ipsa quae ab <br />
						illo inventore veritatis et quasi architecto.</p>

					</div>


				</div>

			</div>
			{/* third section */}
			<div className="w-full flex flex-col items-center gap-[50px] bg-white pb-20">
				<div className="xl:min-w-[1170px] flex items-center gap-[20px]">
					<h1 className="createRound font-normal text-[22px] leading-[28px] uppercase text-left ">our team</h1>
					<div className="flex-grow h-[2px] bg-[#F4F4F4]">

					</div>
				</div>
				<div className="xl:min-w-[1170px] max-w-[1170px] flex flex-col xl:flex-row gap-10 xl:gap-0 justify-center xl:justify-between items-center">
					<div className="max-w-[273px] flex flex-col justify-center rounded-[8px] border-[2px] border-[#F4F4F4] text-center overflow-hidden ">
						<img src="https://s3-alpha-sig.figma.com/img/20e1/0d8c/228baaf8fdbe041a8bac816e9f4330aa?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=emY0KjpcdA4u8Va0-SiFAuhBBhVq5cv68a0DdWjtnfliYvXIrg8uRODmq-2f6tDFNTsTdZOGeG4z0CHr7VgZ5Ilw8lW2yqudh~WpXq2uWuJ-g-I-6uYTKbYS6NVgRmVPKhJ2-vkQrvq3OJ0jLySofMG~wTfwUVHxu2d0W5nt3m2eqFfvQNxo5kOa~ym3KBzogdLUL6DNgQs8Sm3XIv2pfsM7SnfdL5BsO8j7ikZObX3vPNv-nFQkC~EY8j~ovPF8YV2ZHeL8UCb-0Wr6p25ycGco7O1vEWzI1EJC0Pa6EdEIN0P4muSIBil-AjSpvpu4eV51Iib93Rp~LAmY6xcCJA__" alt="" />
						<h1 className="createRound font-normal text-[18px] text-[#355C7D] mt-4 ">Mickey Rorey</h1>
						<h2 className="openSans leading-[24px] font-normal text-[13px] mb-3 ">Founder</h2>
					</div>
					<div className="max-w-[273px] flex flex-col justify-center rounded-[8px] border-[2px] border-[#F4F4F4] text-center overflow-hidden ">
						<img src="https://s3-alpha-sig.figma.com/img/cc1a/16a5/a94b8ddfffb5e5d744cb245292fca10a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IRZb0Oa-KArHiq10l0SXX8EBC-7SoJt4qDdwle-cPa0Jj2dvP8n10gwEsV9sm1Bl2BB9I45pK8WvGPJwm~l2CmV9x8~kl8BdAqKHKosTLLVYYhYYJFq8qtLXcVzi77OP9TjDqEr1ynSjRGxphgazgV8vq5PnlCPGsMs6YsyRY~k0mSIMroGsaJ5q0d6HTYz3rskne7VSDuInxzb6tzOJmRNnnq4fDoGpG0HpmOGXW2CeznsSvPGQ97C6JPIArhYe~FaSzCLQ38l6ZzCZlV2okgvPPdjsaGCeiyN8PIVeiSaMIpJ7gsOvIh7BCzr13NUm7bBibLi4H~QmI3w1p8a6LQ__" alt="" />						
						<h1 className="createRound font-normal text-[18px] text-[#355C7D] mt-4 ">Damie Glendell</h1>
						<h2 className="openSans leading-[24px] font-normal text-[13px] mb-3 ">Co-Director</h2>
					</div>
					<div className="max-w-[273px] flex flex-col justify-center rounded-[8px] border-[2px] border-[#F4F4F4] text-center overflow-hidden ">
						<img src="https://s3-alpha-sig.figma.com/img/8b93/4455/00bb77fc4029e952c97e9c9f5a86bc61?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nbsvekBcSfvpVDjlI5e26J7PZORp7Suh4KXWGMmi9cTrOTIXwY-z9SP9SYB0jE6klIMcaR4GojceT7Htphxqj99zkZzJmb7BGCcnhYkXJ6PWqWPXcuxWwxh7~XN2MfEn9mSRkwGhiBtix8q2igk2TESu~6nY~Qql-QmWTkRsadyiCi7O22ShyItjzsc21-boSHHNGetWaIDfsmKNhkKzRLmQQMG~4UWHyQmysmbq~WYDvkYA3iWpjYN73UWJSj0GfOaPjFo66KTa-fsngMvn1jrSHqbo2RY9GvBi-3nDwWo2fY8UfNvungK70SQgX6yczfUQk68iuqhr9W~YeizqSw__" alt="" />						
						<h1 className="createRound font-normal text-[18px] text-[#355C7D] mt-4 ">Jenny Sheen</h1>
						<h2 className="openSans leading-[24px] font-normal text-[13px] mb-3 ">Marketing Director</h2>
					</div>
					<div className="max-w-[273px] flex flex-col justify-center rounded-[8px] border-[2px] border-[#F4F4F4] text-center overflow-hidden ">
						<img src="https://s3-alpha-sig.figma.com/img/2ccd/c4a8/f45aa49576154c94b99492991fd89bf1?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jP0PIka2NQD616WyJfuY02IW4~ZPxUSwliNo5ZKMhjvEoeMZnSMFjmEcETgw2ppUxpYpALK9wU23Vyubz7tinYxZXphT0UT5N~a8olCMBnKr1QpKQR~pofXWva8ngXg~BmnZwXJ6l8xGf6ajklC7oBi4bTY8KtdV9ASzVqBzSiRnfwf9wSsoIb2fOpk24SIiNfBWa9Dg-fRQpY1JxFVziCCYcjXNmLFhPYmcK5wESaPKBHOrSlQ09Bg-5MBUdO30DXKOh1pm3~tEGTe6vhyeYSH88WulxXpxTpaMb-5l77ZxGjwJP4rXYdpphRoEHv2t3mO6PQsezC0r-dFKuQdRrQ__" alt="" />						
						<h1 className="createRound font-normal text-[18px] text-[#355C7D] mt-4 ">James Catwin</h1>
						<h2 className="openSans leading-[24px] font-normal text-[13px] mb-3 ">Art Director</h2>
					</div>

				</div>
			</div>
			{/* fourth section */}
			<div className="w-full flex justify-center py-10 bg-[#355C7D] ">
				<div className="xl:min-w-[1170px] max-w-[1170px] flex flex-col xl:flex-row gap-10 xl:gap-0 justify-between ">
					<div className="flex flex-col justify-center items-center">
						<img src="images/firstImage.svg" alt="" />
						<h1 className="mt-2 mb-3 text-white createRound font-normal text-[45px] leading-[28px] ">3000</h1>
						<h2 className="text-[#739CBF] openSans text-[16px] leading-[22px] font-light ">Learners Educated</h2>
					</div>
					<div className="flex flex-col justify-center items-center">
						<img src="images/secondImage.svg" alt="" />
						<h1 className="mt-2 mb-3 text-white createRound font-normal text-[45px] leading-[28px] ">250</h1>
						<h2 className="text-[#739CBF] openSans text-[16px] leading-[22px] font-light ">Categories Listed</h2>
					</div>
					<div className="flex flex-col justify-center items-center">
						<img src="images/thirdImage.svg" alt="" />
						<h1 className="mt-2 mb-3 text-white createRound font-normal text-[45px] leading-[28px] ">75</h1>
						<h2 className="text-[#739CBF] openSans text-[16px] leading-[22px] font-light ">Languages Available</h2>
					</div>
					<div className="flex flex-col justify-center items-center">
						<img src="images/fourthImage.svg" alt="" />
						<h1 className="mt-2 mb-3 text-white createRound font-normal text-[45px] leading-[28px] ">1530</h1>
						<h2 className="text-[#739CBF] openSans text-[16px] leading-[22px] font-light ">Courses Available</h2>
					</div>


				</div>
			</div>
			{/* fifth part */}
			<div className="w-full flex justify-center pt-20 pb-12">
	      		<div className="min-w-[1170px] xl:min-w-[200px] flex items-center ">
					<h1 className="uppercase text-base font-normal text-[22px] leading-[28px] text-[#2C2C2C] ">our featured courses</h1>
					<div className="flex-grow h-px mx-5 bg-[#F4F4F4] "></div>
					<div className="flex text-[24px] text-base text-[#355C7D] ">
						<FaChevronLeft />
						<FaChevronRight />
					</div>
				</div>
			</div>


		</div>

		<Footer />
	</div>
  )
}
