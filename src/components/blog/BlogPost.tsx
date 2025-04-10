
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

export interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  featured?: boolean;
  categories: string[];
}

const BlogPostCard = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  author,
  image,
  featured = false,
  categories
}: BlogPostProps) => {
  if (featured) {
    return (
      <div className="relative rounded-xl overflow-hidden shadow-md">
        <div className="relative h-80 w-full">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              {categories.slice(0, 2).map((category, idx) => (
                <span key={idx} className="bg-primary/90 text-white text-xs py-1 px-2 rounded">
                  {category}
                </span>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-200 mb-3 line-clamp-2">{excerpt}</p>
            
            <div className="flex items-center text-gray-300 text-sm gap-4">
              <div className="flex items-center">
                <User className="h-3 w-3 mr-1" />
                {author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {date}
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {readTime}
              </div>
            </div>
            
            <Link 
              to={`/blog/${id}`} 
              className="absolute inset-0"
              aria-label={`Read more about ${title}`}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          {categories.slice(0, 2).map((category, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded">
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-3 line-clamp-2">{excerpt}</p>
        
        <div className="flex items-center text-gray-500 text-sm gap-4 mb-3">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {readTime}
          </div>
        </div>
        
        <Link 
          to={`/blog/${id}`} 
          className="text-primary font-medium hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
