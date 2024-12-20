import { UserLoginDto } from "@/domain/user/user.dto";
import { UserGateway } from "@/domain/user/user.gateway";

export type ParsedResponse = {
  token: string;
  userName: string;
  id: string;
};

export class LoginUserUseCase {
  constructor(private readonly _userGateway: UserGateway) {}

  async execute(input: UserLoginDto): Promise<ParsedResponse> {
    try {
      const response = await this._userGateway.userLogin(input);

      return {
        token: response.data.token,
        userName: response.data.username,
        id: response.data.id,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
