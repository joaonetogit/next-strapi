import { icons } from './Icon';

export interface IFeatureProps {
  id: number;
  heading: string;
  subHeading: string;
  icon: keyof typeof icons;
}

export interface IFeaturesSectionProps {
  data: {
    id: number;
    __component: string;
    title: string;
    description: string;
    feature: IFeatureProps[];
  };
}
