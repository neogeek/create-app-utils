import { parse } from 'url';

export const getQueryParamsFromUrl = (
  url: string
): { [key: string]: string } => {
  const search = parse(url).search;

  if (!search) {
    return {};
  }

  return Object.fromEntries(new URLSearchParams(search));
};
