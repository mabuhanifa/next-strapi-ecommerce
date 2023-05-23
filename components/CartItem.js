import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartItem() {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src={"product-1.webp"} alt="img" />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            name
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            subtitle
          </div>
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377;
          </div>
        </div>
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          subtitle
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.7] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="1">UK 6</option>
                <option value="2">UK 6</option>
                <option value="3">UK 6</option>
                <option value="4">UK 6</option>
                <option value="5">UK 6</option>
                <option value="6">UK 6</option>
                <option value="7">UK 6</option>
                <option value="8">UK 6</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black">
                <option value="1">1</option>
                <option value="2">1</option>
                <option value="3">1</option>
                <option value="4">1</option>
                <option value="5">1</option>
                <option value="6">1</option>
                <option value="7">1</option>
                <option value="8">1</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
}
