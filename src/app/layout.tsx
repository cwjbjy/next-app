import { AntdRegistry } from '@ant-design/nextjs-registry';

import Header from '@/components/header';
import Tabs from '@/components/tabs';

import StyledComponentsRegistry from '@/lib/registry';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: '今日头条',
  description: '今日头条，时时获取新闻',
  keywords: ['新闻', '头条', '社会', '国内', '国际', '娱乐', '体育', '军事'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <AntdRegistry>
            <Header />
            <Tabs />
            {children}
          </AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
