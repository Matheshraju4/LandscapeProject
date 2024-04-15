interface Props {
  title: string;
  description: string;
}
const Testimonials = (props: Props) => {
  return (
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
      <blockquote className="max-w-2xl  mb-1 text-gray-500 lg:mb-4">
        <h3 className="text-lg  text-gray-900">{props.title}</h3>
        <p className="my-4">{props.description}</p>
      </blockquote>
    </figure>
  );
};

export default Testimonials;
