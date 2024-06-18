import { GetStrapiData } from '@/functions/GetStrapiData';
import qs from 'qs';

const HomePageQuery = qs.stringify({
  populate: {
    blocks: {
      populate: {
        image: {
          fields: ['url', 'alternativeText'],
        },
        link: {
          populate: true,
        },
        feature: {
          populate: true,
        },
      },
    },
  },
});

export default async function useHome() {
  const strapiData = await GetStrapiData(HomePageQuery, '/api/home-page');
  const { blocks } = strapiData;
  const heroData = blocks[0];
  const featuresData = blocks[1];

  return { heroData, featuresData };
}
