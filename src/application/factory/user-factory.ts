
import { UserGateway } from '@/infrastructure/gateways/user.service';
import { AxiosClient } from '@/infrastructure/http/axios-client';
import { HttpClient } from '@/infrastructure/http/http-client';

import { UserDto } from '@/domain/user/user.dto';
import { LoginUserUseCase, ParsedResponse, } from '../usecases/login-usecase';

const httpClient: HttpClient = new AxiosClient();

const userGateway = new UserGateway(httpClient);
const loginUserUseCase = new LoginUserUseCase(userGateway);

export async function userLogin(user: UserDto): Promise<ParsedResponse> {
  const response = await loginUserUseCase.execute(user);
  console.log(response)
  return response;
}
