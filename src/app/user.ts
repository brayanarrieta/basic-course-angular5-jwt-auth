export class User {
  email: string;
  password: string;
  name: string;
  id: number;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
