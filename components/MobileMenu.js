import Link from "next/link";
import { Fragment } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function MobileMenu({ showCatMenu, setShowCatMenu }) {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];
  const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
  ];
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />
                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] p-1 text-black shadow-lg">
                    {subMenuData.map((submenu) => (
                      <Link
                        href={"/"}
                        key={submenu.id}
                        onClick={() => setShowCatMenu(false)}
                      >
                        <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.1] rounded-md">
                          {submenu.name}
                          <span className="text-sm opacity-50">{78}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <Link href={item.url}>
                <li className="cursor-pointer">{item.name}</li>
              </Link>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}
