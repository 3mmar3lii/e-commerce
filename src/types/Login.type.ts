interface User {
  _id: string;
  email: string;
  name: string;
  role: string;
}

export interface IResponseLogin {
  token: string;
  success: boolean;
  data: User;
}
