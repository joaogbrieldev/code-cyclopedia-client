import {
  CreatedResponse,
  TokenResponseDto,
  UserCreatedDto,
  UserLoginDto,
} from "@/domain/user/user.dto";
import type {
  HttpClient,
  HttpServiceConfig,
} from "@/infrastructure/http/http-client";

const header = {
  "x-fingerprint-id": "a",
};

const httpConfig: HttpServiceConfig = {
  headers: header,
  responseType: "json",
};

export class UserGateway {
  private readonly _urlBase = "http://localhost:3001";

  constructor(private readonly _httpClient: HttpClient) {}

  async userLogin(service: UserLoginDto): Promise<TokenResponseDto> {
    const response = await this._httpClient.post<
      UserLoginDto,
      TokenResponseDto
    >(`${this._urlBase}/auth`, service, httpConfig);

    return response.data;
  }

  async userCreate(service: UserCreatedDto): Promise<CreatedResponse> {
    const response = await this._httpClient.post<
      UserCreatedDto,
      CreatedResponse
    >(`${this._urlBase}/users/create-user`, service, httpConfig);

    return response.data;
  }
}
