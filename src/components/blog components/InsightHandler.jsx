import { Link } from "react-router-dom";
import { VscArrowSmallRight } from "react-icons/vsc";
import { format } from 'date-fns'



const InsightPropHandler = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.slug.current}`}
      className="
        group
        block
      "
    >
      <article
        className="
          h-full
          bg-white
          border
          border-gray-200
          rounded-[32px]
          overflow-hidden
          shadow-sm
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-500
          flex
          flex-col
        "
      >

        {/* Image */}
        <div className="overflow-hidden h-[280px]">

          <img
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-110
              transition-transform
              duration-700
            "
            src={post.mainImage.asset.url}
            alt={post.title}
          />

        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-1">

          {/* Meta */}
          <div className="flex items-center gap-3 mb-5">

            <span
              className="
                text-sm
                font-semibold
                text-amber-700
              "
            >
              
                {post.publishedAt
                  ? format(new Date(post.publishedAt), 'dd MMMM yyyy')
                  : 'No date'}
              
            </span>

            <span className="w-1 h-1 rounded-full bg-gray-400" />

            <span
              className="
                text-sm
                text-gray-500
              "
            >
              {post.readTime}
            </span>

          </div>

          {/* Title */}
          <h3
            className="
              text-2xl
              md:text-3xl
              font-bold
              text-[#1f1f1f]
              leading-[120%]
              mb-5
              group-hover:text-amber-700
              transition-colors
              duration-300
            "
          >
            {post.title}
          </h3>

          {/* Description */}
          <p
            className="
              text-gray-600
              leading-8
              flex-1
            "
          >
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="mt-8">

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">

              {post.categories?.slice(0, 3).map((category, index) => (
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
                gap-2
                text-amber-700
                font-semibold
              "
            >
              Read Article

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