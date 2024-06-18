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
      },
    },
  },
});

export default async function useHome() {
  const strapiData = await GetStrapiData(HomePageQuery, '/api/home-page');
  const { blocks } = strapiData;
  return { blocks };
}
