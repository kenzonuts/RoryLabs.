import Link from 'next/link';
import { Github, Twitter, MessageSquare } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-accent" />
              <span className="font-bold text-foreground">Sui Community</span>
            </div>
            <p className="text-sm text-foreground/60">
              Empowering the Sui community through events and ecosystem education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-foreground/50">
            © {currentYear} Sui Community Hub. Community-led initiative.
          </p>
          <p className="text-xs text-foreground/50 mt-2 md:mt-0">
            Not officially affiliated with Sui Network.
          </p>
        </div>
      </div>
    </footer>
  );
}
