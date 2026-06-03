import { Link } from "react-router-dom";
import { VscArrowSmallRight } from "react-icons/vsc";
import { format } from "date-fns";

const InsightPropHandler = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.slug.current}`}
      className="block"
    >
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
          h-full
          cursor-pointer
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
            src={post.mainImage.asset.url}
            alt={post.title}
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
              {post.publishedAt
                ? format(new Date(post.publishedAt), 'dd MMMM yyyy')
                : 'No date'
              }
            </p>

            <span className="w-1 h-1 rounded-full bg-gray-400" />

            <p
              className="
                text-sm
                text-gray-500
              "
            >
              {post.readTime}
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
            {post.title}
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
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex flex-wrap gap-4 items-center justify-between mt-8">

            {/* Tags */}
            <div className="flex flex-wrap gap-2">

              {post.categories?.slice(0, 2).map((category, index) => (
                <span
                  key={category.title}
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
                  {category.title}
                </span>
              ))}

            </div>

            {/* Read More */}
            <div
              className="
                flex
                items-center
                gap-1
                text-amber-700
                font-semibold
              "
            >
              Read More

              <VscArrowSmallRight
                size={22}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </div>

          </div>

        </div>

      </article>
    </Link>
  );
};

export default InsightPropHandler;