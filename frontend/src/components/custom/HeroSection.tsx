import { IHeroSectionProps } from '@/types/components/custom/HeroSection';
import Link from 'next/link';
import { ImageStrapi } from './ImageStrapi';

export function HeroSection({ data }: Readonly<IHeroSectionProps>) {
  const { heading, subHeading, image, link } = data;

  return (
    <header className="relative h-screen overflow-hidden">
      <ImageStrapi
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
        src={image.url}
        width={1920}
        height={1080}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black bg-opacity-20 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">{heading}</h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">{subHeading}</p>
        <Link
          className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-black shadow hover:bg-gray-100"
          href={link.url}
        >
          {link.text}
        </Link>
      </div>
    </header>
  );
}
