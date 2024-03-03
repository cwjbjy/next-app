'use client';
import Link from 'next/link';
import styles from './tabs.module.scss';
import { usePathname } from 'next/navigation';
import { menu } from './config';

export default function Tabs() {
  const pathname = usePathname();

  return (
    <nav className={styles.menu}>
      <ul style={{ listStyleType: 'none' }} className={styles.ul}>
        {menu.map((item) => (
          <li key={item.name} className={styles.li}>
            <Link href={{ pathname: item.path }}>
              <span className={pathname == item.path ? styles.router_focus : ''}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
