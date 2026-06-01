import type { ReactNode } from "react";

export type ComponentExample = {
  code: string;
  description?: string;
  preview: ReactNode;
  title: string;
};

export type ComponentDoc = {
  api: Array<{ defaultValue?: string; description: string; name: string; type: string }>;
  description: string;
  examples?: ComponentExample[];
  install?: string;
  name: string;
  preview: ReactNode;
  previewCode: string;
  slug: string;
  usage: string;
};

export const defaultInstall = "pnpm add @axie/ui";
