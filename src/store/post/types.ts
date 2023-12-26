type PostFetch = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type FetchParams = {
  reFetch?: boolean;
};
export type PostState = {
  fetch: {
    loading: boolean;
    data: PostFetch[];
    error: string;
  };
};
