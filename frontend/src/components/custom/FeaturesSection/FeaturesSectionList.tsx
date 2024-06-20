import { IFeaturesSectionListProps } from '@/types/components/custom/FeaturesSectionList';

export default function FeaturesSectionList({ children }: Readonly<IFeaturesSectionListProps>) {
  return <div className="grid gap-8 md:grid-cols-3">{children}</div>;
}
