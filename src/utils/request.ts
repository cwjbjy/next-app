import qs from 'qs';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface Params {
  time?: number; //缓存时间，单位为s。默认强缓存，0为不缓存
  params?: Record<string, any>;
}

interface Props extends Params {
  url: string;
  method: Method;
}

type Config = { next: { revalidate: number } } | { cache: 'no-store' } | { cache: 'force-cache' };

class Request {
  /**
   * 请求拦截器
   */
  interceptorsRequest({ url, method, params, time }: Props) {
    let queryParams = ''; //url参数
    let requestPayload = ''; //请求体数据
    //请求头
    const headers = {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IuS4gOWPtuaJgeiInyIsImlhdCI6MTcwOTcyMzA2NCwiZXhwIjoxNzA5ODA5NDY0fQ.2SsgZ0vNAfaDq6D1lRzTiOVFtUDWmt27zu2r836ZsuY`,
    };

    const config: Config = time
      ? time > 0
        ? { next: { revalidate: time } }
        : { cache: 'no-store' }
      : { cache: 'force-cache' };

    if (method === 'GET' || method === 'DELETE') {
      //fetch对GET请求等，不支持将参数传在body上，只能拼接url
      queryParams = qs.stringify(params, { arrayFormat: 'repeat' }) as string;
      url = `${url}?${queryParams}`;
    } else {
      //非form-data传输JSON数据格式
      if (!['[object FormData]', '[object URLSearchParams]'].includes(Object.prototype.toString.call(params))) {
        Object.assign(headers, { 'Content-Type': 'application/json' });
        requestPayload = JSON.stringify(params);
      }
    }
    return {
      url,
      options: {
        method,
        headers,
        body: method !== 'GET' && method !== 'DELETE' ? requestPayload : undefined,
        ...config,
      },
    };
  }

  /**
   * 响应拦截器
   */
  interceptorsResponse<T>(res: Response): Promise<T> {
    if (res.ok) {
      return res.json() as Promise<T>;
    } else {
      throw new Error('Request failed');
    }
  }

  async httpFactory<T>({ url = '', params = {}, method }: Props): Promise<T> {
    const req = this.interceptorsRequest({
      url: process.env.NEXT_PUBLIC_BASEURL + url,
      method,
      params: params.params,
      time: params.time,
    });
    const res = await fetch(req.url, req.options);
    return this.interceptorsResponse<T>(res);
  }

  async request<T>(method: Method, url: string, params?: Params): Promise<T> {
    return this.httpFactory<T>({ url, params, method });
  }

  get<T>(url: string, params?: Params): Promise<T> {
    return this.request('GET', url, params);
  }

  post<T>(url: string, params?: Params): Promise<T> {
    return this.request('POST', url, params);
  }

  put<T>(url: string, params?: Params): Promise<T> {
    return this.request('PUT', url, params);
  }

  delete<T>(url: string, params?: Params): Promise<T> {
    return this.request('DELETE', url, params);
  }

  patch<T>(url: string, params?: Params): Promise<T> {
    return this.request('PATCH', url, params);
  }
}

const request = new Request();

export default request;
