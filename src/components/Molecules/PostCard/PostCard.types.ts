type Post = {
  author: string;
  content: string;
  description: string;
  slug: {
    current: string;
    _type: string;
  };
  tags: {
    label: string;
    value: string;
  }[];
  title: string;
  _created_at: string;
  _id: string;
  _rev: string;
  _type: string;
  _updated_at: string;
};

export type PostCardProps = {
  post: Post;
};
