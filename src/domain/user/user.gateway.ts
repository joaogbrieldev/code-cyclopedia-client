import {
  CreatedResponse,
  TokenResponseDto,
  UserCreatedDto,
  UserLoginDto,
} from "./user.dto";

export interface UserGateway {
  userLogin(input: UserLoginDto): Promise<TokenResponseDto>;
  userCreate(input: UserCreatedDto): Promise<CreatedResponse>;
}
