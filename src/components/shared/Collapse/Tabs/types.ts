export type TabsProps = {
  onTab: (tab: string) => void;
  tabs: Array<Tab>;
  current?: string;
};

export type Tab = {
  title: string;
  reference: string;
};
