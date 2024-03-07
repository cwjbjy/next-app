import Card from '@/components/card';

import { getNews } from '@/apis/api';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '最新国内',
  description: '今日头条，时时获取新闻',
};

export default async function Inland() {
  const list = await getNews({ type: 'guonei' });
  return (
    <article>
      <Card url="'/shehui.png'" list={list.result?.data || []}>
        最新国内
      </Card>
    </article>
  );
}
