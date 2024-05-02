import { ReactNode } from 'react';

export type ProjectList = {
  company?: string;
  projectName: string;
  description: ReactNode;
  period?: string;
  images: string[];
  techStack: string[];
  TeamSize?: number;
};
