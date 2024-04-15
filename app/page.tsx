import Cards from "@/components/cards";
import FontPageTop from "@/components/fontpagetop";
import Navbar from "@/components/navbar";
import Image from "next/image";
import All from "../public/card_images/Alltypes.jpg";
import Lawn from "../public/card_images/LawnLaying.jpg";
import plant from "../public/card_images/planttation.jpg";
import fountain from "../public/card_images/waterfountain.jpg";
import path from "../public/card_images/naturalPath.jpg";
import system from "../public/card_images/waterSystem.jpg";
import OurWorks from "@/components/ourworks";
import FooterPage from "@/components/footer";
let content = [
  {
    image: All,
    heading: "All Types of Garden Work",
    description:
      "We help with everything for your garden, from planning to keeping it neat and pretty.",
  },
  {
    image: Lawn,
    heading: "Lawn Laying",
    description: "We put down new grass to make lawns look green and nice.",
  },
  {
    image: plant,
    heading: "Planting",
    description:
      "We help choose and plant flowers, bushes, and trees to make gardens colorful and lively.",
  },
  {
    image: fountain,
    heading: "Water Features & Fountains",
    description:
      "We add pretty water features like ponds and fountains to make gardens calm and relaxing.",
  },
  {
    image: path,
    heading: "Natural Paths",
    description:
      "We make paths using rocks and wood that fit in with gardens naturally.",
  },
  {
    image: system,
    heading: "Water Systems",
    description:
      "We set up systems to water plants automatically, so they stay healthy with less work.",
  },
];

export default function Home() {
  return (
    <>
      <FontPageTop key={"fontpage"} />
      <OurWorks />
      <div className="flex flex-wrap justify-center mt-10 pr-10 pl-10">
        {content.map((item) => (
          <Cards
            image={item.image}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
