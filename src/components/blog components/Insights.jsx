import HROSData from "../../data/HROSData";
import InsightPropHandler from "./InsightHandler";
import client from "../../utils/sanityClient";
import { useState, useEffect } from "react";

const Insights = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        client.fetch(`
            *[_type == "post"]{
                title,
                slug,
                body,

                publishedAt,

                author->{
                    name,
                    bio
                },

                readTime,

                excerpt,

                categories[]->{
                    title,
                    description
                },

                mainImage{
                    alt,
                    asset->{
                        _id,
                        url
                    }
                }
            }
        `)
        .then((data) => {
            console.log(data)
            setPosts(data)
        })
        .catch(console.error)
    }, [])

  return (
    <section className="w-full bg-white overflow-hidden">

      <div
        className="
          max-w-[1600px]
          mx-auto
          px-6
          py-20
          md:px-12
          lg:px-24
          lg:py-28
        "
      >

        {/* Header */}
        <div className="max-w-4xl mb-20">

          <p
            className="
              uppercase
              tracking-[0.2em]
              text-sm
              font-semibold
              text-amber-700
              mb-5
            "
          >
            Knowledge Hub
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-bold
              text-[#1f1f1f]
              leading-[105%]
              mb-8
            "
          >
            Insights That Help Organizations Grow
          </h2>

          <p
            className="
              text-lg
              leading-8
              text-gray-600
              max-w-3xl
            "
          >
            Explore expert perspectives, practical workforce
            strategies, organizational development insights,
            and HR best practices designed to help businesses
            build stronger teams and sustainable growth systems.
          </p>

        </div>

        {/* Blog Grid */}
        <div
          className=" hidden
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {posts.map((post) => (
            <InsightPropHandler
              key={post.slug.current}
              post={post}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Insights;