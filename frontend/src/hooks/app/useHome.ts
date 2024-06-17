import { GetStrapiData } from '@/functions/GetStrapiData';

export default async function useHome() {
  const strapiData = await GetStrapiData('/api/home-page');

  const { Title, Description } = strapiData.data.attributes;

  return { Title, Description };
}
