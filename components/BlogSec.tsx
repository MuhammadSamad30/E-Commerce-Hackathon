import React from "react";

const BlogSec: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      date: "14 Oct 2022",
      category: "Wood",
      image: "/BlogSec (1).png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel, praesentium eos nemo provident sequi enim modi repudiandae voluptate optio quasi sed ducimus suscipit rerum blanditiis quaerat vitae id assumenda!",
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      date: "14 Oct 2022",
      category: "Handmade",
      image: "/BlogSec (2).png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel, praesentium eos nemo provident sequi enim modi repudiandae voluptate optio quasi sed ducimus suscipit rerum blanditiis quaerat vitae id assumenda!",
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      date: "14 Oct 2022",
      category: "Wood",
      image: "/BlogSec (3).png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel, praesentium eos nemo provident sequi enim modi repudiandae voluptate optio quasi sed ducimus suscipit rerum blanditiis quaerat vitae id assumenda!",
    },
  ];

  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 0 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 8 },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      date: "14 Oct 2022",
      image: "/BlogSec (4).png",
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      date: "14 Oct 2022",
      image: "/BlogSec (5).png",
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      date: "14 Oct 2022",
      image: "/BlogSec (6).png",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {blogPosts.map((post) => (
            <div key={post.id} className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-100 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-4">Admin</span>
                <span className="mr-4">{post.date}</span>
                <span>{post.category}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>

        <div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, idx) => (
                <li key={idx} className="flex justify-between text-gray-700">
                  <span>{category.name}</span>
                  <span className="text-gray-500">({category.count})</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex items-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-12 h-12 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">{post.title}</h4>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`px-4 py-2 mx-1 border rounded-lg ${
              page === 1
                ? "bg-[#FBEBB5] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-2 mx-1 border bg-gray-200 text-gray-700 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogSec;
