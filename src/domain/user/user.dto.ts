export interface UserDto {
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