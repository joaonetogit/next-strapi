import { IFeaturesSectionListProps } from '@/types/components/custom/FeaturesSectionList';
import IconRenderer from '../Icon';

export default function FeaturesSectionList({ feature }: Readonly<IFeaturesSectionListProps>) {
  return (
    <>
      {feature.map((feature) => (
        <div key={feature.id} className="flex flex-col items-center text-center">
          <div className="mb-4">
            <IconRenderer type={feature.icon} />
          </div>
          <h2 className="mb-4 text-2xl font-bold">{feature.heading}</h2>
          <p className="text-gray-500">{feature.subHeading}</p>
        </div>
      ))}
    </>
  );
}
