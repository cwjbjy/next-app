import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from '@/components/header';
import Tabs from '@/components/tabs';
import './globals.scss';

export const metadata: Metadata = {
  title: '今日头条',
  description: '今日头条，时时获取新闻',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Header />
          <Tabs />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
