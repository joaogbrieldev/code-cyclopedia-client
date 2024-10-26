export interface HttpClientResponse<Output> {
  status: number;
  data: Output;
}

export type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';

export type HttpServiceConfig = {
  headers?: object;
  responseType?: ResponseType;
};

export interface HttpClient {
  get: <Output>(url: string, config?: HttpServiceConfig) => Promise<HttpClientResponse<Output>>;
  post: <Data, Output>(url: string, data: Data, config?: HttpServiceConfig) => Promise<HttpClientResponse<Output>>;
  put: <Data, Output>(url: string, data: Data, config?: HttpServiceConfig) => Promise<HttpClientResponse<Output>>;
  patch: <Data, Output>(url: string, data: Data, config?: HttpServiceConfig) => Promise<HttpClientResponse<Output>>;
  delete: <Output>(url: string, config?: HttpServiceConfig) => Promise<HttpClientResponse<Output>>;
}
