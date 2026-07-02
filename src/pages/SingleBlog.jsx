// Single Blog Page
// Route: /blog/:slug
// Dynamically renders a blog post based on slug

import { useParams } from "react-router-dom";
import HROSData from "../data/HROSData";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import client from "../utils/sanityClient"
import portableTextComponents from "../components/blog components/PortableText";

const SingleBlog = () => {
  const [singlePost, setSinglePost] = useState(null);

  // Get slug from URL
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "post" && slug.current == $slug][0]{
          title,
          body,

          categories[]->{
            title,
            description
          },

          publishedAt,

          readTime,

          excerpt,

          author->{
            name,
            bio
          },

          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }
      `,
        { slug }
      )
      .then((data) => {
        console.log(data);
        setSinglePost(data);
      })
      .catch(console.error);
  }, [slug]);

  // Find matching blog post
  // const blogPost = HROSData.find(
  //   (blog) => blog.slug === slug
  // );

  // Fallback if blog doesn't exist
  if (singlePost === null) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loading Article...
          </h2>

          <p className="text-gray-600">
            Please wait while we load the article.
          </p>
        </div>
      </section>
    );
  }

  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[600px] overflow-hidden">

        {/* Background Image */}
        {singlePost?.mainImage?.asset?.url && (
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />
        )}

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/60
            to-black/30
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-20
            max-w-[1600px]
            mx-auto
            h-full
            flex
            items-end
            px-6
            pb-16
            md:px-12
            lg:px-24
          "
        >
          <div className="max-w-4xl">

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {singlePost.categories?.map((category) => (
                <span
                  key={category.title}
                  className="
                    bg-white/10
                    backdrop-blur-sm
                    border
                    border-white/20
                    text-white
                    text-sm
                    px-4
                    py-2
                    rounded-full
                  "
                >
                  {category.title}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1
              className="
                text-4xl
                md:text-6xl
                font-bold
                text-white
                leading-[110%]
                mb-6
              "
            >
              {singlePost.title}
            </h1>

            {/* Description */}
            <p
              className="
                text-lg
                md:text-xl
                text-gray-200
                leading-8
                max-w-3xl
                mb-8
              "
            >
              {singlePost.excerpt}
            </p>

            {/* Meta */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-4
                text-white/80
              "
            >
              <span>
                {singlePost.publishedAt
                  ? format(
                      new Date(singlePost.publishedAt),
                      "dd MMMM yyyy"
                    )
                  : "No date"}
              </span>

              <span className="w-1 h-1 rounded-full bg-white/50" />

              <span>
                {singlePost.author?.name || "Unknown Author"}
              </span>

              <span className="w-1 h-1 rounded-full bg-white/50" />

              <span>{singlePost.readTime}</span>
            </div>

          </div>
        </div>

      </section>

      {/* ================= BLOG CONTENT ================= */}
      <section
        className="
          
          
          mx-auto
          px-6
          py-16
          md:px-12
          lg:px-0
        "
      >

        {/* Intro */}
        <p
          className="
            text-xl
            leading-9
            text-gray-700
            mb-10
          "
        >
          {/* {blogPost.description} */}
        </p>

        {/* Placeholder Content */}
        <div
          className="
            prose
            prose-lg
            max-w-md
          "
        >
          <PortableText
            value={singlePost.body}
            components={portableTextComponents}
          />
        </div>

      </section>

    </main>
  );
};

export default SingleBlog;