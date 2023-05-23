import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";

export default function ProductDetails() {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
            <div className="text-lg font-semibold ">MRP : $ 195.99</div>
            <div className="text-md font-medium text-black/[.5] ">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[.5]">Select Guide</div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 7
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 7.5
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 8
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 8.5
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 9
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 9.5
                </div>
                <div
                  className="border rounded-md text-center py-3 font-medium
                 hover:border-black cursor-pointer"
                >
                  UK 10
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
