import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  return (
    <section id="posts" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-display text-sm font-medium text-primary mb-2 block">
            Posts & Thoughts
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Writing out <span className="text-gradient">loud.</span>
          </h1>
        </motion.div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;