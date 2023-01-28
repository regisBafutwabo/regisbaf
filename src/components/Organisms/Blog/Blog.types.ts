export type postsType = any & {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  name: string;
  tags: string[];
};

export type BlogProps = {
  posts: postsType[];
};
