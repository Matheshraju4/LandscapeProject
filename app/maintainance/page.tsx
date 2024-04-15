import ComponentforMaintance from "@/components/components2";
import Testimonials from "@/components/maintainance";
import Navbar from "@/components/navbar";
let maintenanceContent = [
  {
    title: "Maintaining Your Garden",
    description:
      "We keep your garden looking its best by pruning, weeding, and ensuring everything stays healthy.",
  },
  {
    title: "Border Plants Trimming",
    description:
      "We trim and shape border plants to maintain a tidy and well-defined edge to your garden beds.",
  },
  {
    title: "Lawn Mowing",
    description:
      "We regularly mow your lawn to keep it neat and at the perfect height for a healthy and lush appearance.",
  },
  {
    title: "Irrigation Maintenance",
    description:
      "We inspect and maintain your irrigation system to ensure it functions properly, keeping your plants watered efficiently.",
  },
  {
    title: "Fountain Maintenance",
    description:
      "We clean and maintain your fountain to ensure it operates smoothly and continues to enhance your garden's ambiance.",
  },
];

const Maintainance = () => {
  return (
    <>
      <ComponentforMaintance />
      <div className="grid mb-4 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white md:mr-20 md:ml-20">
        {maintenanceContent.map((contents) => (
          <Testimonials
            key={contents.title}
            title={contents.title}
            description={contents.description}
          />
        ))}
      </div>
    </>
  );
};

export default Maintainance;
