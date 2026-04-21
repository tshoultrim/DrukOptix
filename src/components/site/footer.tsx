import { Link } from "@tanstack/react-router";
import { Eye, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Eye className="h-5 w-5" />
              </span>
              DrukOptix
            </Link>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Bringing Artificial Intelligence to Vision Care. Helping optical practices deliver smarter, faster, and more accurate care.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Twitter" className="rounded-md p-2 hover:bg-secondary transition-smooth"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="rounded-md p-2 hover:bg-secondary transition-smooth"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="GitHub" className="rounded-md p-2 hover:bg-secondary transition-smooth"><Github className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} DrukOptix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
