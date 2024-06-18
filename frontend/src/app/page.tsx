import { HeroSection } from '@/components/custom/HeroSection';
import useHome from '@/hooks/app/useHome';

export default async function Home() {
  const { blocks } = await useHome();
  const heroData = blocks[0];

  return (
    <main>
      <HeroSection data={heroData} />
      <div className="container"></div>
    </main>
  );
}
