import Card from '@/components/card';

async function getNews() {
  const url = `https://v.juhe.cn/toutiao/index?type=guonei&key=${process.env.NEXT_PUBLIC_KEY}`;

  const res = await fetch(url, { next: { revalidate: 60 * 60 * 24 } });

  const list = await res.json();

  return list.result?.data || [];
}

export default async function Home() {
  const list = await getNews();
  return (
    <article>
      <Card url="'/toutiao.png'" list={list}>
        今日头条
      </Card>
    </article>
  );
}
