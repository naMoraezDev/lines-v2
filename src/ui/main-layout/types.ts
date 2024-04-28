import { DefaultProps } from "@/types/default-props";

export interface MainLayoutProps extends DefaultProps {
  notFound?: boolean;
  children: React.ReactElement;
}
