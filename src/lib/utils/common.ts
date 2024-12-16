export const buildQueryString = (
  queryParams?: Record<string, string | number>,
) => {
  if (!queryParams) return '';
  const queryString = new URLSearchParams(
    queryParams as Record<string, string>,
  ).toString();
  return queryString ? `?${queryString}` : '';
};
