interface IImageProps {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface ILinkProps {
  id: number;
  url: string;
  text: string;
  isExternal: boolean;
}

export interface IHeroSectionProps {
  data: {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    image: IImageProps;
    link: ILinkProps;
  };
}
