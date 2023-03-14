import clsx from 'clsx';
import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { clsxm } from 'utils';

export const TabContext = createContext<TabContextType | null>(null);

export default function Tab({ tabs }: TabProps) {
  const context = useContext(TabContext);

  return (
    <div>
      <div className="tabs">
        {tabs.map(({ label }, index) => {
          return (
            <button
              className={clsxm('tab text-current tab-bordered border-current transition-colors', {
                'text-primary border-primary': context?.activeTab === index
              })}
              key={label + index}
              onClick={() => context?.changeActiveTab(index)}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="py-4 relative overflow-hidden">
        {tabs.map(({ content }, index) => {
          return (
            <div
              key={'tabcontent' + index}
              className={clsx({
                'absolute w-full h-full animate-backOutDown': context?.activeTab !== index,
                'relative animate-backInUp': context?.activeTab === index
              })}
              style={{ transform: `translateX()` }}
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function TabProvider({ children }: { children: React.ReactElement }) {
  const [activeTab, setActiveTab] = useState(0);

  const changeActiveTab = (index = 0) => {
    setActiveTab(index);
  };

  return (
    <TabContext.Provider value={{ activeTab, changeActiveTab }}>{children}</TabContext.Provider>
  );
}

type TabProps = {
  tabs: TabDataType[];
};

type TabContextType = {
  activeTab: number;
  changeActiveTab: (index: number) => void;
};

export type TabDataType = {
  label: string;
  content: React.ReactElement;
};
