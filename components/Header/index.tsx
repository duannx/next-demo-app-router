import Link from "next/link";
import styles from "./index.module.scss";

export default function Header() {
  const menuItems = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/today-dashboard",
      title: "Dashboard",
    },
    {
      href: "/admin/orders",
      title: "Admin",
    },
    {
      href: "/blog/1",
      title: "Blog",
    },
    {
      href: "/streaming",
      title: "Streaming",
    },
    {
      href: "/santilizer",
      title: "Santilizer",
    },
  ];
  return (
    <nav>
      <ul className={styles.nav}>
        {menuItems.map((item, index) => {
          return (
            <li key={index} className={styles.nav__item}>
              <Link href={item.href}> {item.title} </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
