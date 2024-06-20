import { IFeaturesSectionProps } from '@/types/components/custom/FeaturesSection';
import Container from '../Container';
import FeaturesSectionItem from './FeaturesSectionItem';
import FeaturesSectionList from './FeaturesSectionList';

export default function FeatureSection({ data }: Readonly<IFeaturesSectionProps>) {
  const { feature } = data;

  return (
    <section className="py-6 lg:py-24">
      <Container>
        <FeaturesSectionList>
          {feature.map((feature) => (
            <FeaturesSectionItem key={feature.id} feature={feature} />
          ))}
        </FeaturesSectionList>
      </Container>
    </section>
  );
}
