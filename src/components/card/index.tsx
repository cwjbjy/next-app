'use client';
import Image from 'next/image';
import { useCallback } from 'react';

interface Item {
  url: string;
  thumbnail_pic_s: string;
  title: string;
}

interface Porps {
  children: React.ReactNode;
  url: string;
  list: Item[];
}

export default function Card({ children, url, list }: Porps) {
  const handlerClick = useCallback((value: string) => {
    window.open(value);
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <div className="title" style={{ backgroundImage: `url(${url})` }}>
          {children}
        </div>
      </div>
      <div className="card-body">
        {list.length === 0 ? (
          <>接口访问次数今日已达上限</>
        ) : (
          list.map((item, index) => (
            <div key={index} className="card-item" onClick={() => handlerClick(item.url)}>
              {item.thumbnail_pic_s ? (
                <Image
                  src={item.thumbnail_pic_s}
                  alt="Picture of the author"
                  width={228}
                  height={128}
                  loading={'lazy'}
                />
              ) : (
                <div className="no-image">暂无图片</div>
              )}
              <div className="describe">{item.title}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
