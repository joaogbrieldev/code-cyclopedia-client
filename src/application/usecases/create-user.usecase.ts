import { UserCreatedDto } from "@/domain/user/user.dto";
import { UserGateway } from "@/domain/user/user.gateway";

export type ParsedCreatedResponse = {
  id: string;
};

export class CreateUserUseCase {
  constructor(private readonly _userGateway: UserGateway) {}

  async execute(input: UserCreatedDto): Promise<ParsedCreatedResponse> {
    try {
      const response = await this._userGateway.userCreate(input);
      return {
        id: response.data.id,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
