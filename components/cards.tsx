import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  heading: string;
  description: string;
}

const Cards = (props: Props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-2 md:m-5">
      <a>
        <div className="flex justify-center p-4">
          <Image
            className="rounded-lg"
            src={props.image}
            width={350}
            height={400}
            alt=""
          />
        </div>
      </a>
      <div className="p-5">
        <a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.heading}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{props.description}</p>
      </div>
    </div>
  );
};

export default Cards;
