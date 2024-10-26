import { UserDto } from "@/domain/user/user.dto";
import { UserGateway } from "@/domain/user/user.gateway";

export type ParsedResponse = {
  accountId: string;
  token: string;
  userName: string;
}

export class LoginUserUseCase  {
  constructor(private readonly _userGateway: UserGateway) {}

  async execute(input: UserDto): Promise<ParsedResponse> {
    try {
      const response = await this._userGateway.userLogin(input);
      console.log(input)
      return {
        accountId: response.data.account.id,
        token: response.data.token,
        userName: response.data.user.name,
      };
    } catch (error) {
      console.error(error)
      throw error;
    } 
  }
}
