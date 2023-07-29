import { TabsProps } from "./types";

export function Tabs({ tabs = [], current, onTab }: TabsProps) {
  return (
    <div className="tab">
      <div className="tab-content flex justify-between">
        {tabs.map(({ reference, title }, key) => (
          <>
            <div
              key={key}
              className={`tab-item border-2 py-3 px-8 border-brand-primary-matte cursor-pointer ${
                key == 0 && !current ? "active-tab" : ""
              }${current == reference ? "active-tab" : ""}`}
              onClick={() => onTab(reference)}
            >
              <p className="text-white">{title}</p>
            </div>
          </>
        ))}
      </div>
      
    </div>
  );
}
