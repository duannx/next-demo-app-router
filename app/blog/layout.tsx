import Link from "next/link";
import styles from "./layout.module.scss";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = [
    {
      href: "/blog/4",
      title: "Blog 4",
    },
    {
      href: "/blog/5",
      title: "Blog 5",
    },
    {
      href: "/blog/no-cache",
      title: "Blog no cache",
    },
  ];

  return (
    <div className={styles["dashboard-layout"]}>
      <div className={styles["dashboard-sidebar"]}>
        <ul className={styles["dashboard-sidebar__menu"]}>
          {menuItems.map((item, index) => {
            return (
              <li key={index} className={styles["dashboard-sidebar__item"]}>
                <Link href={item.href}> {item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles["dashboard-content"]}>{children}</div>
    </div>
  );
}
