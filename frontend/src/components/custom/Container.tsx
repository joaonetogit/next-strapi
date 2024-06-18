import { IContainerProps } from '@/types/components/custom/Container';

export default function Container({ children }: Readonly<IContainerProps>) {
  return <div className="container">{children}</div>;
}
