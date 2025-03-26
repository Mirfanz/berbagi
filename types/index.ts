import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Donation {
  id: number;
  title: string;
  description: string | null;
  active: boolean;
  deadline: string | null;
  amount: {
    target: number;
    collected: number;
    sended: number;
  };
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}
