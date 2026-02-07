import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/posts";

type Props = {
  post: BlogPost;
};

const BlogCard = ({ post }: Props) => {
  return (
    <Link to={`/posts/${post.slug}`} className="block group">
      <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md hover:-translate-y-1">
        {/* Top meta */}
        <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
          <span className="px-3 py-1 rounded-full bg-muted font-medium">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Engagement */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>♡ {post.likes}</span>
          <span>💬 {post.comments}</span>
          <span className="ml-auto">{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;