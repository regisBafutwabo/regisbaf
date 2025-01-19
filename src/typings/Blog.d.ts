export type Post = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  author: string;
  content: string;
  description: string;
  cover: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  slug: {
    _type: string;
    current: string;
  };
  tags: [
    {
      _type: string;
      label: string;
      value: string;
    },
    {
      label: string;
      value: string;
    },
    {
      label: string;
      value: string;
    },
  ];
  title: string;
};
