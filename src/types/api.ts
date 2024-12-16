export interface IResponse<T> {
  data: T;
  message: string;
  success: boolean;
  errorCode?: number;
}
export interface IListResponse<T> {
  data: T[];
  message: string;
  success: boolean;
  errorCode?: number;
  meta: {
    total: number;
    perPage: number;
    currentPage: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}

export interface IResponseNotification {
  success: boolean;
  message: string;
  errorCode?: number;
}
