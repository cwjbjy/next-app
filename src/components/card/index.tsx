'use client';
import { useCallback } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import type { New } from '@/apis/model';

interface Porps {
  children: React.ReactNode;
  url: string;
  list: New[];
}

export default function Card({ children, url, list }: Porps) {
  const handlerClick = useCallback((value: string) => {
    window.open(value);
  }, []);

  return (
    <CardWrapper>
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
                <Image src={item.thumbnail_pic_s} alt={item.title} width={228} height={128} loading={'lazy'} />
              ) : (
                <div className="no-image">暂无图片</div>
              )}
              <p className="describe">{item.title}</p>
            </div>
          ))
        )}
      </div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  .card-header {
    border-bottom: 1px solid #e4e4e4;
    padding: 10px 20px;
    .title {
      line-height: 30px;
      padding-left: 38px;
      background-repeat: no-repeat;
      background-position: left center;
      font-size: 16px;
      font-weight: bold;
      color: #fe8900;
    }
  }
  .card-body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    overflow: hidden;
    .card-item {
      flex: 0 0 228px;
      margin: 14px 4px;
      position: relative;
      cursor: pointer;
      img {
        width: 100%;
      }
      .no-image {
        width: 228px;
        height: 128px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ccc;
      }
      .describe {
        width: 228px;
        font-size: 18px;
        color: #203d80;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
`;
