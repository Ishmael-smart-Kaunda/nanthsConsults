// Props to handle the dynamic display of blog cards under the insight section

import { VscArrowSmallRight } from "react-icons/vsc";

const InsightPropHandler = ({ blog }) => {
  return (
    <article
      className="
        group
        bg-white
        border
        border-gray-200
        rounded-[28px]
        overflow-hidden
        shadow-sm
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        flex-col
        justify-between
      "
    >

      {/* Image */}
      <div className="overflow-hidden h-[240px]">

        <img
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-700
          "
          src={blog.image}
          alt={blog.title}
        />

      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">

        {/* Meta */}
        <div className="flex items-center gap-3 mb-5">

          <p
            className="
              text-sm
              font-semibold
              text-amber-700
            "
          >
            {blog.date}
          </p>

          <span className="w-1 h-1 rounded-full bg-gray-400" />

          <p
            className="
              text-sm
              text-gray-500
            "
          >
            {blog.readTime}
          </p>

        </div>

        {/* Title */}
        <h2
          className="
            text-2xl
            font-bold
            text-[#1f1f1f]
            leading-[125%]
            mb-5
            group-hover:text-amber-700
            transition-colors
            duration-300
          "
        >
          {blog.title}
        </h2>

        {/* Description */}
        <p
          className="
            text-gray-600
            leading-8
            text-base
            flex-1
          "
        >
          {blog.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-8">

          {/* Tags */}
          <div className="flex flex-wrap gap-2">

            {blog.tags?.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="
                  bg-gray-100
                  text-gray-600
                  text-sm
                  px-3
                  py-1
                  rounded-full
                  font-medium
                "
              >
                {tag}
              </span>
            ))}

          </div>

          {/* Button */}
          <button
            className="
              flex
              items-center
              gap-1
              text-amber-700
              font-semibold
              cursor-pointer
              group/button
            "
          >
            Read More

            <VscArrowSmallRight
              size={22}
              className="
                transition-transform
                duration-300
                group-hover/button:translate-x-1
              "
            />
          </button>

        </div>

      </div>

    </article>
  );
};

export default InsightPropHandler;