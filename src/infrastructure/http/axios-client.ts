import { HttpClient, HttpClientResponse, HttpServiceConfig } from '@/infrastructure/http/http-client';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { parseCookies } from 'nookies';

export class AxiosClient implements HttpClient {
  private readonly defaultConfig: AxiosRequestConfig = {
    timeout: 60_000,
  };

  private readonly httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({ ...this.defaultConfig });

    this.httpClient.interceptors.request.use((config: any) => {
      const cookies = parseCookies();
      const token = cookies['authToken'];
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    });
  }

  async get<Output>(url: string, config?: HttpServiceConfig): Promise<HttpClientResponse<Output>> {
    const response = await this.httpClient.get(url, { headers: config?.headers });
    return this.getResponse(response);
  }

  async post<Data, Output>(url: string, data: Data, config?: HttpServiceConfig): Promise<HttpClientResponse<Output>> {
    const response = await this.httpClient.post(url, data, { headers: config?.headers });
    return this.getResponse<Output>(response);
  }

  async put<Data, Output>(url: string, data: Data, config?: HttpServiceConfig): Promise<HttpClientResponse<Output>> {
    const response = await this.httpClient.put(url, data, { headers: config?.headers });
    return this.getResponse(response);
  }

  async patch<Data, Output>(url: string, data: Data, config?: HttpServiceConfig): Promise<HttpClientResponse<Output>> {
    const response = await this.httpClient.patch(url, data, { headers: config?.headers });
    return this.getResponse(response);
  }

  async delete<Output>(url: string, config?: HttpServiceConfig): Promise<HttpClientResponse<Output>> {
    const response = await this.httpClient.delete(url, { headers: config?.headers });
    return this.getResponse(response);
  }

  private getResponse<Output>(axiosResponse: AxiosResponse): HttpClientResponse<Output> {
    return { status: axiosResponse.status, data: axiosResponse.data };
  }
}
