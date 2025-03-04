import { Post } from './post';

export type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  createdAt: Date;
  updatedAt: Date;
  posts: Post[];
};

export type MinimalUser = Pick<User, 'name' | 'email'>;
