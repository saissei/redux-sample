export type ZennTrendItem = {
  id: number;
  postType: string;
  title: string;
  slug: string;
  published: boolean;
  commentsCount: number;
  likedCount: number;
  bodyLettersCount: number;
  readingTime: number;
  articleType: string;
  emoji: string;
  isSuspendingPrivate: boolean;
  publishedAt: string;
  bodyUpdatedAt: string;
  sourceRepoUpdatedAt: null;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    username: string;
    name: string;
    avatarSmallUrl: string;
  };
  publication: null;
  topics: [
    {
      id: number;
      name: string;
      displayName: string;
      taggingsCount: number;
      imageUrl: 'https://storage.googleapis.com/zenn-user-upload/topics/742793a2fb.png';
    }
  ];
};

export type ZennTrends = Array<ZennTrendItem>;
