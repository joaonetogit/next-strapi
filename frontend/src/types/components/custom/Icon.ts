import { CheckIcon, ClockIcon, CloudIcon } from '@/components/custom/Icon/index';

export const icons = {
  CHECK_ICON: CheckIcon,
  CLOCK_ICON: ClockIcon,
  CLOUD_ICON: CloudIcon,
};

export interface IIconRendererProps {
  type: keyof typeof icons;
}
