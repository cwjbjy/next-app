'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { menu } from './config';

export default function Tabs() {
  const pathname = usePathname();

  return (
    <nav className="max-w-[1200px] mx-auto my-0">
      <ul className="flex mx-0 my-0 px-0 py-0 h-15 text-[18px] text-white list-none">
        {menu.map((item) => (
          <li key={item.name} className="h-15 leading-[60px] mx-0 my-0 px-5 py-0 cursor-pointer">
            <Link href={{ pathname: item.path }}>
              <span
                className={
                  pathname == item.path ? 'text-[#ffd04b] box-border border-b-[3px] border-[#ffd04b] border-solid' : ''
                }
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
