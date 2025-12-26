import { Link } from "react-router-dom";
import { Cloud, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Cloud className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">CloudRelic</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Where Cloud Meets Code - Technical Insights That Matter
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground">Services</Link>
              <Link to="/chat" className="text-sm text-muted-foreground hover:text-foreground">AI Expert</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">DevOps Excellence</span>
              <span className="text-sm text-muted-foreground">Cloud Mastery</span>
              <span className="text-sm text-muted-foreground">Linux Fundamentals</span>
              <span className="text-sm text-muted-foreground">Network Intelligence</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:yusuf@cloudrelic.io"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                yusuf@cloudrelic.io
              </a>
              <a
                href="https://www.linkedin.com/company/cloudrelic/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                New Delhi, India
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 CloudRelic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
