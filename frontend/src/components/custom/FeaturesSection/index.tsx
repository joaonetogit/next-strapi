import { IFeaturesSectionProps } from '@/types/components/custom/FeaturesSection';
import Container from '../Container';
import FeaturesSectionList from './FeaturesSectionList';

export default function FeatureSection({ data }: Readonly<IFeaturesSectionProps>) {
  const { feature } = data;

  return (
    <section className="py-6 lg:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <FeaturesSectionList feature={feature} />
        </div>
      </Container>
    </section>
  );
}
