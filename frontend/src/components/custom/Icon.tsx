import { IIconRendererProps, icons } from '@/types/components/custom/Icon';

export default function IconRenderer({ type }: IIconRendererProps) {
  const IconComponent = icons[type];
  return <IconComponent />;
}
