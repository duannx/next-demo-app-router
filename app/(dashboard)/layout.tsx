import Link from "next/link";
import styles from "./layout.module.scss";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = [
    {
      href: "/today-dashboard",
      title: "Today Dashboard",
    },
    {
      href: "/last-month-dashboard",
      title: "Last month dashboard",
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
