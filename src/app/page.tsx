import Card from '@/components/card';

import { getNews } from '@/apis/api';

export default async function Home() {
  const list = await getNews({ type: 'guonei' });
  return (
    <article>
      <Card url="'/toutiao.png'" list={list.result?.data || []}>
        今日头条
      </Card>
    </article>
  );
}
