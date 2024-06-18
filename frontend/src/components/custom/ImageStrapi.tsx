import { GetStrapiMedia } from '@/lib/utils';
import { IImageStrapiProps } from '@/types/components/custom/ImageStrapi';
import Image from 'next/image';

export function ImageStrapi({ src, alt, height, width, className }: Readonly<IImageStrapiProps>) {
  if (!src) return null;
  const imageUrl = GetStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
}
