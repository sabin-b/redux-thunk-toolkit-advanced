import { siteConfig } from "@/config/site";
import { Github, LucideLinkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="dark:bg-background">
      <div className="mt-8 py-6 border-t container max-w-screen-2xl items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; {currentYear} React Pizza All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li>
              <Button asChild variant={"outline"} size={"icon"}>
                <Link to={siteConfig.Linkedin}>
                  <LucideLinkedin className="hover:text-primary w-6 h-6" />
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"outline"} size={"icon"}>
                <Link to={siteConfig.github}>
                  <Github className="hover:text-primary w-6 h-6" />
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"outline"} size={"icon"}>
                <Link to={siteConfig.email} target="_self">
                  <Mail className="hover:text-primary w-6 h-6" />
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
