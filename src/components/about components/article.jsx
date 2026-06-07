import { featuredInsights } from "../../data/articleData";
import ArticleHandler from "./ArticleHandler";
import { FiArrowRight } from "react-icons/fi";
import client from '../../utils/sanityClient'
import { useState, useEffect } from "react";


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
                                    <h1 className="text-amber-800 text-[18px] uppercase">Insights & Articles</h1>
                                    <h2 className="text-[35px]  font-bold">From Our Desk</h2>
                                </div>
                                <a href="/blog" className="inline-flex items-center text-amber-800 font-semibold gap-1">All articles <FiArrowRight/></a>
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

                                
                                    {/* <article className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 border-t border-white/30 ">
                                        <span className="bg-white/40 border border-white whitespace-nowrap text-[14px] rounded-full py-1 px-3 self-start">
                                            HR Strategy
                                        </span>
                                        <div className="w-8/10 space-y-2 ">
                                            <h3 className="font-semibold">
                                                Why most organisations still struggle with staff retention, and how to fix it
                                            </h3>
                                            <p className="">
                                                High turnover is not just a recruitment problem. It is a symptom of 
                                                deeper structural issues that many organisations overlook until it 
                                                is too late.
                                            </p>
                                            
                                        </div>
                                        <a href="" className="inline-flex items-center text-amber-800 font-semibold gap-1">
                                            Read <FiArrowRight className=""/>
                                        </a>
                                    </article>

                                    <article className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 border-t border-white/30 ">
                                        <span className="bg-green-200/20 border border-green-400/70 text-[14px] text-green-300 rounded-full py-1 px-3 self-start">Compliance</span>
                                        <div className="w-8/10 space-y-2">
                                             <h3 className="font-semibold">Understanding the Employment Act 2019. What every HR manager needs to know</h3>
                                             <p className="">A practical breakdown of the key provisions that affect how you hire, 
                                                 manage, and exit employees in Malawi..
                                            </p>
                                            
                                        </div>
                                        <a href="" className="inline-flex items-center text-amber-800 font-semibold gap-1">Read <FiArrowRight className=""/></a>
                                    </article>

                                    <article className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6  py-10 border-t border-white/30 ">
                                        <span className="bg-indigo-200/20 border border-indigo-400/70 text-[14px] text-indigo-300 rounded-full py-1 px-3 self-start">Leadership</span>
                                        <div className="w-8/10 space-y-2">
                                             <h3 className="font-semibold">Building a performance culture from the inside out. A practical guide for managers</h3>
                                             <p className="">Performance is not a review-once-a-year event. It is a culture that has to be built deliberately, day by day.
                                            </p>
                                            
                                        </div>
                                        <a href="" className="inline-flex items-center text-amber-800 font-semibold gap-1">Read <FiArrowRight className=""/></a>
                                    </article> */}
                            </div>
                               
                         </section>
                 )
}