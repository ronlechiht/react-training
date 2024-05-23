import { QueryParams } from '../types/QueryParams';
import { buildQueryString } from '../utils/buildQueryString';

export class HttpService {
  constructor(private baseAPI: string) {}

  async request<T>(path: string, method: string): Promise<T> {
    const res = await fetch(path, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.json();
  }

  get<T>(params?: QueryParams): Promise<T> {
    let path: string = this.baseAPI;
    if (params) {
      const queryString: string = buildQueryString<QueryParams>(params);
      path = this.baseAPI + queryString;
    }

    return this.request(path, 'GET');
  }

  getId<T>(id: string): Promise<T> {
    let path: string = `${this.baseAPI}/${id}`;
    return this.request(path, 'GET');
  }
}
