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
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
