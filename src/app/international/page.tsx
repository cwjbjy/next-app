import type { Metadata } from "next";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "最新国际",
  description: "今日头条，时时获取新闻",
};

export async function getNews() {
  const url = `https://v.juhe.cn/toutiao/index?type=guoji&key=${process.env.NEXT_PUBLIC_KEY}`;

  const res = await fetch(url, { next: { revalidate: 60 * 60 * 24 } });

  const list = await res.json();

  return list.result?.data || [];
}

export default async function Society() {
  const list = await getNews();
  return (
    <article>
      <Card url="'/shehui.png'" list={list}>
        最新国际
      </Card>
    </article>
  );
}
