import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 h-[24em]">
      <div className="relative w-full h-full md:w-2/3 rounded-t">
        <img
          className="w-full h-full rounded-t"
          src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 p-4">
          <div className="w-full h-full flex flex-col justify-end">
            <span className="px-4 py-1 w-fit bg-black text-gray-200  mb-2">
              Nutrition
            </span>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              Pellentesque a consectetur velit, ac molestie ipsum. Donec
              sodales, massa et auctor.
            </h2>

            <div className="flex items-center gap-4 mt-3">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt="Author"
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  Mike Sullivan
                </p>
                <p className="font-semibold text-gray-400 text-xs">14 Aug</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full md:w-2/6 rounded-t">
        <img
          className="w-full h-full rounded-t"
          src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 p-4">
          <div className="w-full h-full flex flex-col justify-end">
            <span className="px-4 py-1 w-fit bg-black text-gray-200  mb-2">
              Science
            </span>
            <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>

            <div className="flex items-center gap-4 mt-3">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt="Author"
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  Mike Sullivan
                </p>
                <p className="font-semibold text-gray-400 text-xs">14 Aug</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
