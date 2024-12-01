export interface UserLoginDto {
  email: string;
  password: string;
}

export interface UserCreatedDto {
  username: string;
  email: string;
  password: string;
}

export interface TokenResponseDto {
  data: {
    token: string;
    username: string;
    id: string;
  };
}

export interface CreatedResponse {
  data: {
    id: string;
  };
}
