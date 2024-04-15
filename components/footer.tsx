import Image from "next/image";

const FooterPage = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 ">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl  text-gray-900 "
        >
          <img
            src="https://utfs.io/f/3210f278-5038-47bc-8d71-7b2d4117bad5-1njyzc.png"
            className="h-8"
          />
          <span className="mt-4 -ml-3 text-sm">Landscape</span>
        </a>
        <p className="my-6 text-gray-900 ">
          At CR Landscape, we make outdoor areas look great and easy to take
          care of.
        </p>
        {/* <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
          <li>
            <a href="#" className="mr-4 text-gray-900 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 text-gray-900 hover:underline md:mr-6">
              Premium
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 text-gray-900 hover:underline md:mr-6 ">
              Campaigns
            </a>
          </li>
          <li>
            <a href="#" className="mr-4  text-gray-900 hover:underline md:mr-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Affiliate Program
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul> */}
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2024-2025{" "}
          <a href="#" className="hover:underline">
            CR Landscape
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterPage;
