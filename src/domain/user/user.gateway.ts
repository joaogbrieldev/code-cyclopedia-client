import { TokenResponseDto, UserDto } from './user.dto';

export interface UserGateway {
  userLogin(input: UserDto): Promise<TokenResponseDto>;
}
