export interface UserDto {
  email: string;
  password: string;
  userId: '02038160-106b-4327-9290-3738ae91de94'
}

export interface TokenResponseDto {
  data: {
    token: string;
    user: {
      name: string;
    };
    account: {
      id: string;
    };
  };
}