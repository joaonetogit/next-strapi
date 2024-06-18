import { IFeatureSectionProps } from '@/types/components/custom/FeatureSection';

export default function FeatureSection({ data }: { readonly data: IFeatureSectionProps }) {
  const { feature } = data;

  return (
    <div className="flex-1">
      <section className="container mx-auto px-4 py-6 md:px-6 lg:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {feature.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              {feature.icon}
              <h2 className="mb-4 text-2xl font-bold">{feature.heading}</h2>
              <p className="text-gray-500">{feature.subHeading}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}