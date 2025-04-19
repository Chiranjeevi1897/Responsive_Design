import React from "react";
import { ChevronRight, Heart } from "lucide-react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.company}>
            <div className={styles.logo}></div>
            <p>
              Modern design solutions for businesses of all sizes. Elevate your
              digital presence with premium templates.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.linksGroup}>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">
                  <ChevronRight size={16} />
                  About Us
                </a>
              </li>
              <li>
                <a href="#">
                  <ChevronRight size={16} />
                  Careers
                </a>
              </li>
              <li>
                <a href="#">
                  <ChevronRight size={16} />
                  Blog
                </a>
              </li>
              <li>
                <a href="#">
                  <ChevronRight size={16} />
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">
                  <ChevronRight size={16} />
                  Documentation
                </a>
              </li>
              <li>
                <a href="#">
                  <ChevronRight size={16} />
                  Help Center
                </a>
              </li>
              <li>
                <a href="#">
                  <ChevronRight size={16} />
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#">
                  <ChevronRight size={16} />
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">
                  <ChevronRight size={16} />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#">
                  <ChevronRight size={16} />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#">
                  <ChevronRight size={16} />
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#">
                  <ChevronRight size={16} />
                  GDPR
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.newsletter}>
            <h4>Stay Updated</h4>
            <p>
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Apex. All rights reserved.</p>
          <p className={styles.love}>
            Made with <Heart size={14} className={styles.heart} /> by
            Chiranjeevi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
