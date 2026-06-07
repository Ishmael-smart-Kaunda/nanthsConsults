import { Link } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi";


const ArticleHandler = ({post}) => {
  return (
    <div>
        <article className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 border-t border-white/30 ">
            {post.categories?.slice(0, 2).map((category, index) => (
                <span 
                    key={category.title}
                    className="bg-white/40 border border-white whitespace-nowrap text-[14px] rounded-full py-1 px-3 self-start">
                    {category.title}
                </span>
            ))}
            <div className="w-8/10 space-y-2 ">
                <h3 className="font-semibold">
                    {post.title}
                </h3>
                <p className="">
                    {post.excerpt}
                </p>
                                                  
            </div>
            <Link to={`/blog/${post.slug.current}`} className="inline-flex items-center text-amber-800 font-semibold gap-1">
                Read <FiArrowRight className=""/>
            </Link>
        </article>
      
    </div>
  )
}

export default ArticleHandler
