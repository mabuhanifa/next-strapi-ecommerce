import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import Menu from "./Menu";
import Wrapper from "./Wrapper";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(false);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className={"h-[60px] flex justify-between items-center"}>
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="logo"
            className="w-[40px] md:[60px]"
            width={40}
            height={40}
          />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        <div className="flex items-center gap-2 text-black">
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center
           hover:bg-black/[0.05] cursor-pointer relative"
          >
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full
               bg-red-600 absolute top-1 left-4 md:left-7 text-white text-[10px] 
               md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]"
            >
              51
            </div>
          </div>
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center
           hover:bg-black/[0.05] cursor-pointer relative"
          >
            <BsCart className="text-[15px] md:text-[20px]" />
            <div
              className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full
               bg-red-600 absolute top-1 left-4 md:left-7 text-white text-[10px] 
               md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]"
            >
              5
            </div>
          </div>
          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center
           hover:bg-black/[0.05] cursor-pointer relative -mr-2"
          >
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
