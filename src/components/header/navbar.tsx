import { HiOutlineMenu } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";

interface NavbarProps {
  visibleNav: boolean,
  setVisibleNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({visibleNav, setVisibleNav}) => {

  const makeNavVisible = () => {
    setVisibleNav(!visibleNav);
  };

  return (
    <div className="w-full relative flex justify-between xl:px-[0] px-10 xl:justify-center xl:gap-[224px] items-center openSans ">
      <img src="images/Link.svg" className="w-[295px] cursor-pointer" alt="" />
      <ul className="hidden lg:flex h-auto ">
        <li className="h-auto px-5 py-2 font-semibold text-[14px] hover:text-white hover:bg-orange-600 rounded-[10px] cursor-pointer ">
          <a href="#" className="uppercase">
            Home
          </a>
        </li>
        <li className="px-5 py-2 font-semibold text-[14px] hover:text-white hover:bg-orange-600 rounded-[10px] cursor-pointer ">
          <a href="#" className="uppercase">
            shop
          </a>
        </li>
        <li className="px-5 py-2 font-semibold text-[14px] hover:text-white hover:bg-orange-600 rounded-[10px] cursor-pointer ">
          <a href="#" className="uppercase">
            Pages
          </a>
        </li>
        <li className="px-5 py-2 font-semibold text-[14px] hover:text-white hover:bg-orange-600 rounded-[10px] cursor-pointer ">
          <a href="#" className="uppercase">
            courses
          </a>
        </li>
        <li className="px-5 py-2 font-semibold text-[14px] hover:text-white hover:bg-orange-600 rounded-[10px] cursor-pointer ">
          <a href="#" className="uppercase">
            news
          </a>
        </li>
        <li className="px-5 py-2 font-semibold text-[14px] hover:text-white hover:bg-orange-600 rounded-[10px] cursor-pointer ">
          <a href="#" className="uppercase">
            gallery
          </a>
        </li>
        <li className="px-5 py-2 font-semibold text-[14px] hover:text-white hover:bg-orange-600 rounded-[10px] cursor-pointer ">
          <a href="#" className="uppercase">
            community
          </a>
        </li>
      </ul>
      <div
        className="flex lg:hidden text-[36px] text-[#355C7D]"
        onClick={() => makeNavVisible()}
      >
        <HiOutlineMenu />
      </div>
      {visibleNav && (
        <div className="absolute top-0 left-0 w-full bg-[#355C7D] justify-center">
          <ul className="flex flex-col items-center justify-center h-auto ">
            <li className="h-auto px-5 py-2 font-semibold text-[16px] cursor-pointer text-white ">
              <a
                href="#"
                className="uppercase"
                onClick={() => setVisibleNav(false)}
              >
                Home
              </a>
            </li>
            <li className="h-auto px-5 py-2 font-semibold text-[16px] cursor-pointer text-white ">
              <a
                href="#"
                className="uppercase"
                onClick={() => setVisibleNav(false)}
              >
                shop
              </a>
            </li>
            <li className="h-auto px-5 py-2 font-semibold text-[16px] cursor-pointer text-white ">
              <a
                href="#"
                className="uppercase"
                onClick={() => setVisibleNav(false)}
              >
                Pages
              </a>
            </li>
            <li className="h-auto px-5 py-2 font-semibold text-[16px] cursor-pointer text-white ">
              <a
                href="#"
                className="uppercase"
                onClick={() => setVisibleNav(false)}
              >
                courses
              </a>
            </li>
            <li className="h-auto px-5 py-2 font-semibold text-[16px] cursor-pointer text-white ">
              <a
                href="#"
                className="uppercase"
                onClick={() => setVisibleNav(false)}
              >
                news
              </a>
            </li>
            <li className="h-auto px-5 py-2 font-semibold text-[16px] cursor-pointer text-white ">
              <a
                href="#"
                className="uppercase"
                onClick={() => setVisibleNav(false)}
              >
                gallery
              </a>
            </li>
            <li className="h-auto px-5 py-2 font-semibold text-[16px] cursor-pointer text-white ">
              <a
                href="#"
                className="uppercase"
                onClick={() => setVisibleNav(false)}
              >
                community
              </a>
            </li>
          </ul>
          <div
            className="absolute top-2 right-3 text-[white]  text-[20px] "
            onClick={() => setVisibleNav(false)}
          >
            <FaXmark />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
