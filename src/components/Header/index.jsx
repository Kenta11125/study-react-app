import { Inter } from "next/font/google";
import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

const inter = Inter({ subsets: ["latin"] });

const NAV_ITEMS = [
  { href: "/", label: "Index Page" },
  { href: "/about", label: "About Page" },
  { href: "/test", label: "Test Page" },
  { href: "/todos", label: "Todos Page" },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href} legacyBehavior>
            <a className={classes.anchor}>{item.label}</a>
          </Link>
        );
      })}
    </header>
  );
};
