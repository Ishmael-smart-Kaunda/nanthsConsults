// Single Blog Page
// Route: /blog/:slug

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";

import client from "../utils/sanityClient";
import portableTextComponents from "../components/blog components/PortableText";

const SingleBlog = () => {
  const [singlePost, setSinglePost] = useState(null);

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
        setSinglePost(data);
      })
      .catch(console.error);
  }, [slug]);

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
    <main className="w-full bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-[550px] md:h-[600px] overflow-hidden">

        {singlePost?.mainImage?.asset?.url && (
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

        <div className="relative z-20 max-w-[1600px] mx-auto h-full flex items-end px-6 pb-12 md:pb-16 md:px-12 lg:px-24">

          <div className="max-w-4xl min-w-0">

            <div className="flex flex-wrap gap-2 mb-6">
              {singlePost.categories?.map((category) => (
                <span
                  key={category.title}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-6 break-words">
              {singlePost.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-8 max-w-3xl mb-8 break-words">
              {singlePost.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-white/80">

              <span>
                {singlePost.publishedAt
                  ? format(
                      new Date(singlePost.publishedAt),
                      "dd MMMM yyyy"
                    )
                  : "No date"}
              </span>

              <span className="w-1 h-1 rounded-full bg-white/50" />

              <span>{singlePost.author?.name || "Unknown Author"}</span>

              <span className="w-1 h-1 rounded-full bg-white/50" />

              <span>{singlePost.readTime}</span>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-4xl mx-auto px-6 py-16 md:px-10 lg:px-0">

        <div
          className="
            prose
            prose-lg
            max-w-none
            overflow-hidden
            break-words
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