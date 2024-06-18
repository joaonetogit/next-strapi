import { GetStrapiURL } from './GetStrapiURL';

export function GetStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith('data:')) return url;
  if (url.startsWith('http') || url.startsWith('//')) return url;
  return `${GetStrapiURL()}${url}`;
}
