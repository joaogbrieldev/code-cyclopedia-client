
import { TokenResponseDto, UserDto } from '@/domain/user/user.dto';
import type { HttpClient, HttpServiceConfig } from '@/infrastructure/http/http-client';

const header = {
  'x-fingerprint-id': 'a',
};

const httpConfig: HttpServiceConfig = {
  headers: header,
  responseType: 'json',
};

export class UserGateway {
  private readonly _urlBase = 'http://localhost:3001';

  constructor(private readonly _httpClient: HttpClient) {}


  async userLogin(service: UserDto): Promise<TokenResponseDto> {
    const response = await this._httpClient.post<UserDto, TokenResponseDto>(
      `${this._urlBase}/auth`,
      service,
      httpConfig
    );

    return response.data;
  }
}
