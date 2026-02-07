import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "@/components/NavLink";

const sectionLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-display text-xl font-bold text-gradient"
        >
          Nishtha Wagh
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Blog route */}
          <NavLink
            to="/posts"
            className="font-display text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground"
          >
            Writing
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-b border-border"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-display text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {link.label}
            </a>
          ))}

          <NavLink
            to="/posts"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 font-display text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            activeClassName="text-foreground"
          >
            Writing
          </NavLink>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
