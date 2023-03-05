export interface Admin {
  id: number;
  name: string;
  email: string;
  token: string;
  avatarUrl?: string;
  createdAt?: Date;
}
