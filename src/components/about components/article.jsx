import { featuredInsights } from "../../data/articleData";
import ArticleHandler from "./ArticleHandler";
import { FiArrowRight } from "react-icons/fi";
import client from '../../utils/sanityClient'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Article(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        client.fetch(`
            *[_type == "post"]{
                title,
                slug,
                
                excerpt,

                categories[]->{
                    title
                }
            }
        `).then((data) => {
            console.log(data)
            setPosts(data)
        }).catch(console.error)
    }, [])

                 return(
                         <section className="w-full max-w-[1440px] bg-[#101617] px-5 md:px-25 pt-10 ">
                            <div className="w-full inline-flex justify-between items-start text-white">
                                <div className="space-y-2 font-semibold ">
                                    <h1 className="text-amber-800 text-[18px] uppercase">Insights And Articles</h1>
                                    <h2 className="text-[35px]  font-bold">From Our Desk</h2>
                                </div>
                                <Link to="/blog" className="inline-flex items-center text-amber-800 font-semibold gap-1">All articles <FiArrowRight/></Link>
                            </div>

                            <div className="w-full mt-10 text-white/70">
                                    {
                                        posts
                                        ?.filter((post) => 
                                            post.categories?.some((category) =>
                                                [
                                                    "Leadership",
                                                    "Compliance",
                                                    "HR Strategy"
                                                ].includes(category.title)
                                            )
                                        )
                                        .map((post) => (
                                            <ArticleHandler 
                                                key={post.slug.current}
                                                post={post}
                                            />
                                        ))
                                    }
                            </div>
                               
                         </section>
                 )
}