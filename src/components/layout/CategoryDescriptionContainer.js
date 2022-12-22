import CategoryCard from "../ui/CategoryCard";

const categories = [
  {
    category: "Mate Camionero",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a est nec quam luctus aliquet vitae eget ex. Nulla fermentum purus non augue condimentum, eget suscipit lectus blandit. Ut massa turpis, lobortis non est id, pellentesque egestas lacus. In at leo in magna rhoncus suscipit eget eget libero. Vivamus sodales, elit ac condimentum tincidunt, augue eros sagittis leo, vitae suscipit lorem nisl eget elit. Donec id arcu a ante egestas aliquam a ut nisi. Aliquam vel massa quis tortor dictum malesuada. Curabitur cursus convallis tortor ut elementum. Fusce in ex quis felis aliquam porta. Proin quam tortor, molestie at posuere consectetur, vestibulum id justo.",
    image: "/images/camionero.jpg",
  },
  {
    category: "Mate Imperial",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a est nec quam luctus aliquet vitae eget ex. Nulla fermentum purus non augue condimentum, eget suscipit lectus blandit. Ut massa turpis, lobortis non est id, pellentesque egestas lacus. In at leo in magna rhoncus suscipit eget eget libero. Vivamus sodales, elit ac condimentum tincidunt, augue eros sagittis leo, vitae suscipit lorem nisl eget elit. Donec id arcu a ante egestas aliquam a ut nisi. Aliquam vel massa quis tortor dictum malesuada. Curabitur cursus convallis tortor ut elementum. Fusce in ex quis felis aliquam porta. Proin quam tortor, molestie at posuere consectetur, vestibulum id justo.",
    image: "/images/imperial.jpg",
  },
  {
    category: "Bombillas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a est nec quam luctus aliquet vitae eget ex. Nulla fermentum purus non augue condimentum, eget suscipit lectus blandit. Ut massa turpis, lobortis non est id, pellentesque egestas lacus. In at leo in magna rhoncus suscipit eget eget libero. Vivamus sodales, elit ac condimentum tincidunt, augue eros sagittis leo, vitae suscipit lorem nisl eget elit. Donec id arcu a ante egestas aliquam a ut nisi. Aliquam vel massa quis tortor dictum malesuada. Curabitur cursus convallis tortor ut elementum. Fusce in ex quis felis aliquam porta. Proin quam tortor, molestie at posuere consectetur, vestibulum id justo.",
    image: "/images/bombilla.jpg",
  },
  {
    category: "Materas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a est nec quam luctus aliquet vitae eget ex. Nulla fermentum purus non augue condimentum, eget suscipit lectus blandit. Ut massa turpis, lobortis non est id, pellentesque egestas lacus. In at leo in magna rhoncus suscipit eget eget libero. Vivamus sodales, elit ac condimentum tincidunt, augue eros sagittis leo, vitae suscipit lorem nisl eget elit. Donec id arcu a ante egestas aliquam a ut nisi. Aliquam vel massa quis tortor dictum malesuada. Curabitur cursus convallis tortor ut elementum. Fusce in ex quis felis aliquam porta. Proin quam tortor, molestie at posuere consectetur, vestibulum id justo.",
    image: "/images/matera.jpg",
  },
  {
    category: "Termos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a est nec quam luctus aliquet vitae eget ex. Nulla fermentum purus non augue condimentum, eget suscipit lectus blandit. Ut massa turpis, lobortis non est id, pellentesque egestas lacus. In at leo in magna rhoncus suscipit eget eget libero. Vivamus sodales, elit ac condimentum tincidunt, augue eros sagittis leo, vitae suscipit lorem nisl eget elit. Donec id arcu a ante egestas aliquam a ut nisi. Aliquam vel massa quis tortor dictum malesuada. Curabitur cursus convallis tortor ut elementum. Fusce in ex quis felis aliquam porta. Proin quam tortor, molestie at posuere consectetur, vestibulum id justo.",
    image: "/images/termo.jpg",
  },
];

const mappedCategories = categories.map((category) => {
  return (
    <CategoryCard
      title={category.category}
      description={category.description}
      image={category.image}
    />
  );
});

const CategoryDescriptionContainer = () => {
  return (
    <section className="bg-[#F8F9FA] py-[3rem] flex flex-col justify-center">
      <article className="text-center font-bold text-[3rem]">
        Nuestros productos
      </article>
      <article className="mx-[10rem]">{mappedCategories}</article>

      <a
        href="/"
        className=" text-center font-bold mt-[4rem] text-[1.5rem] hover:text-[#A61212]"
      >
        Volver a la Home
      </a>
    </section>
  );
};

export default CategoryDescriptionContainer;
