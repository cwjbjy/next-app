import request from '@/utils/request';

import type { New } from './model';

export const getNews = (params: { type: string; key?: string }) => {
  return request.get<{ result: { data: New[] } }>('', {
    params: { key: process.env.NEXT_PUBLIC_KEY, ...params },
    time: 60 * 60 * 24,
  });
};
