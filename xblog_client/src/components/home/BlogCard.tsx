const BlogCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-[200px]">
      <div className="w-full md:w-[200px] h-full">
        <img
          className="w-full h-full rounded-lg"
          src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
            Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
          </h2>
          <p className="text-gray-700 text-base">
            Duis euismod est quis lacus elementum, eu laoreet dolor consectetur.
            Pellentesque sed neque vel tellus lacinia elementum. Proin consequat
            ullamcorper eleifend.
          </p>
        </div>
        <div className="flex mt-3">
          <img
            src="https://randomuser.me/api/portraits/men/86.jpg"
            className="h-10 w-10 rounded-full mr-2 object-cover"
            alt="Author"
          />
          <div>
            <p className="font-semibold text-gray-700 text-sm capitalize">
              {" "}
              eduard franz{" "}
            </p>
            <p className="text-gray-600 text-xs"> 14 Aug </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
