import { Tabs } from "./Tabs";
import { TabsProps } from "./Tabs/types";

export type CollapseProps = {
  children: React.ReactNode;
} & TabsProps;

export function Collapse({ children, onTab, tabs, current }: CollapseProps) {
  return (
    <>
      <div className="collapse-head">
        <Tabs tabs={tabs} current={current} onTab={onTab} />
      </div>
      <div className="collapse-content">{children}</div>
    </>
  );
}
