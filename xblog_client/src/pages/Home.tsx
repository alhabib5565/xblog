import Banner from "../components/home/Banner";
import BlogCard from "../components/home/BlogCard";
import CategoryCard from "../components/home/CategoryCard";

const Home = () => {
  return (
    <div className="mt-10">
      <Banner />
      <div className="flex flex-col md:flex-row gap-8 mt-10">
        <div className="w-full md:w-2/3">
          <BlogCard />
        </div>
        <div className=" w-full md:w-1/3">
          <CategoryCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
