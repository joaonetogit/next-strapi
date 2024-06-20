import { IFeaturesSectionItemProps } from '@/types/components/custom/FeaturesSectionItem';
import IconRenderer from '../Icon';

export default function FeaturesSectionItem({ feature }: Readonly<IFeaturesSectionItemProps>) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <IconRenderer type={feature.icon} />
      </div>
      <h2 className="mb-4 text-2xl font-bold">{feature.heading}</h2>
      <p className="text-gray-500">{feature.subHeading}</p>
    </div>
  );
}
