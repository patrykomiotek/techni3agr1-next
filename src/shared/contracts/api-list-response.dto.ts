export interface ApiListResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: number | null;
  };
  results: T[];
}
