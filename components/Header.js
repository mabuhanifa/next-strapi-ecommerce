import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
      <Wrapper>
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
      </Wrapper>
    </header>
  );
}
