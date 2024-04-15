"use client";
import Image from "next/image";
import i from "../public/phone_image.jpg";
import FrontPagesMaple from "./frontpagesmaple";
const FontPageTop = () => {
  return (
    <div className="frontpage onebytwo">
      <div>
        <FrontPagesMaple
          title="Welcome to CR Landscape"
          description="Welcome to our landscaping paradise! Explore our world of lush
  gardens, stunning hardscapes, and outdoor dreams come true. Let's
  transform your outdoor space into a masterpiece."
        />
      </div>
      <div className="align">
        <Image src={i} width={300} alt="" className="images" />
      </div>
    </div>
  );
};

export default FontPageTop;

{
  /* <div className="header m-2 p-5">
  <span className="text-6xl ">Welcome to Cr Landscape</span>
  <p className="text-lg ">
    "Welcome to our landscaping paradise! Explore our world of lush gardens,
    stunning hardscapes, and outdoor dreams come true. Let's transform your
    outdoor space into a masterpiece."
  </p>
  <button
    type="button"
    className="text-white font-medium bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-lg  text-lg px-5 py-2.5 me-2 mb-2 "
  >
    See Our Works
  </button>
</div>; */
}
