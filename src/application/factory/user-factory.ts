import { UserGateway } from "@/infrastructure/gateways/user.service";
import { AxiosClient } from "@/infrastructure/http/axios-client";
import { HttpClient } from "@/infrastructure/http/http-client";

import { UserCreatedDto, UserLoginDto } from "@/domain/user/user.dto";
import {
  CreateUserUseCase,
  ParsedCreatedResponse,
} from "../usecases/create-user.usecase";
import { LoginUserUseCase, ParsedResponse } from "../usecases/login-usecase";

const httpClient: HttpClient = new AxiosClient();

const userGateway = new UserGateway(httpClient);
const loginUserUseCase = new LoginUserUseCase(userGateway);
const createUserUseCase = new CreateUserUseCase(userGateway);

export async function userLogin(user: UserLoginDto): Promise<ParsedResponse> {
  const response = await loginUserUseCase.execute(user);
  console.log(response);
  return response;
}

export async function userCreate(
  user: UserCreatedDto
): Promise<ParsedCreatedResponse> {
  const response = await createUserUseCase.execute(user);
  console.log(response);
  return response;
}
