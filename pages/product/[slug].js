import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";

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
                <div className="text-md font-medium text-black/[.5]">
                  Select Guide
                </div>
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
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
            </div>
            <div>
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                Add to Cart
              </button>
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center justify-center gap-2">
                Wishlist
                <IoMdHeartEmpty size={20} />
              </button>

              <div>
                <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="text-md mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam quas repellat nemo iste culpa veniam, aliquam
                  consequuntur est autem, eum commodi fugit quaerat saepe esse
                  provident vero reiciendis eos, ratione alias ipsum! Reiciendis
                  reprehenderit similique est, perspiciatis eum commodi
                  repellendus iure! Voluptatibus, laborum. Debitis corporis
                  voluptates culpa sapiente perspiciatis et quod ad provident
                  mollitia ut velit dolore libero praesentium dolorem voluptas
                  cumque, tempora dignissimos? quo itaque ipsam consequuntur,
                  veritatis laborum adipisci fugit similique voluptas nam
                  ducimus soluta dolor? Ipsa numquam dolores animi quasi dicta
                  eaque, error qui voluptate amet exercitationem modi a quae
                  velit repellat voluptatum aliquid suscipit porro. Delectus
                  placeat vel itaque est quibusdam dolor, mollitia ullam rem
                  dolorum qui molestias sint, aspernatur vero, illo tempora
                  cupiditate! Facere voluptate beatae dolorum exercitationem,
                  totam cumque rem repellat, reprehenderit error incidunt
                  voluptatibus nulla aliquam, soluta fuga obcaecati perferendis
                  perspiciatis laboriosam ad magnam consequatur adipisci. Labore
                  facere at consectetur! Nihil perspiciatis reiciendis quod
                  molestiae, nesciunt voluptate culpa recusandae tempora debitis
                  odit! Vero nisi, sapiente accusamus sed delectus debitis
                  tempore facilis.
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
}
