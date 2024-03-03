import type { Metadata } from "next";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "最新国内",
  description: "今日头条，时时获取新闻",
};

async function getNews() {
  const url = `https://v.juhe.cn/toutiao/index?type=guonei&key=${process.env.NEXT_PUBLIC_KEY}`;

  const res = await fetch(url, { next: { revalidate: 60 * 60 * 24 } });

  const list = await res.json();

  return list.result?.data || [];
}

export default async function Inland() {
  const list = await getNews();
  return (
    <article>
      <Card url="'/shehui.png'" list={list}>
        最新国内
      </Card>
    </article>
  );
}
