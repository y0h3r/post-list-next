import { User } from './user';

export type Post = {
  id: string;
  title: string;
  content?: string | null;
  published: boolean;
  author?: User | null;
  authorId?: string | null;
};

export type MinimalPost = Pick<
  Post,
  'title' | 'content' | 'published' | 'authorId'
>;

export type MinimalPostUpdate = Pick<Post, 'title' | 'content' | 'published'>;
