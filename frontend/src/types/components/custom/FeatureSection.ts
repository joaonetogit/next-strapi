import { icons } from './Icon';

interface IFeatureProps {
  id: number;
  heading: string;
  subHeading: string;
  icon: keyof typeof icons;
}

export interface IFeatureSectionProps {
  data: {
    id: number;
    __component: string;
    title: string;
    description: string;
    feature: IFeatureProps[];
  };
}
