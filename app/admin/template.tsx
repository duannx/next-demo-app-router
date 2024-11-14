import Link from "next/link";
import styles from "./template.module.scss";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = [
    {
      href: "/admin/orders",
      title: "Manage Order",
    },
    {
      href: "/admin/products",
      title: "Manage Product",
    },
    {
      href: "/admin/error1",
      title: "Error 1",
    },
    {
      href: "/admin/error2",
      title: "Error 2",
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
