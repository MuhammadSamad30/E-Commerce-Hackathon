import React from 'react';
import Image from 'next/image';
import { CiClock2 } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';

const BlogHome = () => {
  const blogs = [
    {
      id: 1,
      image: '/blog (1).png',
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12th Oct 2022',
    },
    {
      id: 2,
      image: '/blog (2).png',
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12th Oct 2022',
    },
    {
      id: 3,
      image: '/blog (3).png',
      title: 'Going all-in with millennial design',
      time: '5 min',
      date: '12th Oct 2022',
    },
  ];

  return (
    <section className="px-6 md:px-16 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Blogs</h2>
        <p className="text-gray-600 mt-2">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-2"
          >
            <div className="relative w-full h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium">{blog.title}</h3>
              <button className="text-xl font-bold underline text-gray-600 mt-2">
                Read More
              </button>
              <div className="flex justify-center items-center gap-4 text-gray-500 text-sm mt-4">
                <span>
                  <CiClock2 className="inline-flex gap-1" /> {blog.time}
                </span>
                <span>
                  <SlCalender className="inline-flex" /> {blog.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="text-xl underline font-semibold hover:text-gray-800">
          View All Post
        </button>
      </div>
    </section>
  );
};

export default BlogHome;
