interface IFeatureProps {
  id: number;
  heading: string;
  subHeading: string;
  icon: string;
}

export interface IFeatureSectionProps {
  id: number;
  __component: string;
  title: string;
  description: string;
  feature: IFeatureProps[];
}
