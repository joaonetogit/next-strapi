import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function FlattenAttributes(data: any): any {
  if (
    typeof data !== 'object' ||
    data === null ||
    data instanceof Date ||
    typeof data === 'function'
  ) {
    return data;
  }
  if (Array.isArray(data)) {
    return data.map((item) => FlattenAttributes(item));
  }
  let flattened: { [key: string]: any } = {};
  for (let key in data) {
    if (!data.hasOwnProperty(key)) continue;
    if (
      (key === 'attributes' || key === 'data') &&
      typeof data[key] === 'object' &&
      !Array.isArray(data[key])
    ) {
      Object.assign(flattened, FlattenAttributes(data[key]));
    } else {
      flattened[key] = FlattenAttributes(data[key]);
    }
  }
  return flattened;
}

export function GetStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';
}

export function GetStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith('data:')) return url;
  if (url.startsWith('http') || url.startsWith('//')) return url;
  return `${GetStrapiURL()}${url}`;
}
