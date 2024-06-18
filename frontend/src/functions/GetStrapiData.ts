import { FlattenAttributes, GetStrapiURL } from '@/lib/utils';

export async function GetStrapiData(query: string, path: string) {
  const baseURL = GetStrapiURL();
  const url = new URL(path, baseURL);
  url.search = query;

  try {
    const response = await fetch(url.href, { cache: 'no-store' });
    const data = await response.json();
    const flattenedData = FlattenAttributes(data);
    return flattenedData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
