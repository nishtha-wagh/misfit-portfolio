import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { posts } from "@/data/posts";

const PostsSection = () => {
  return (
    <section id="writing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-sm font-medium text-primary mb-2 block">
            Posts & Thoughts
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
            Writing out <span className="text-gradient">loud.</span>
          </h2>
        </motion.div>

        {/* Latest posts preview */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Link to={`/posts/${post.slug}`} className="block h-full">
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-display font-medium bg-muted">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Engagement */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Heart size={14} className="text-coral" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    {post.comments}
                  </span>
                  <Share2
                    size={14}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View all posts CTA */}
        <div className="mt-10">
          <Link
            to="/posts"
            className="font-display text-sm font-medium text-primary hover:underline"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostsSection;
