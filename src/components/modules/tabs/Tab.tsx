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
    <div className="overflow-hidden">
      <div className="tabs">
        {tabs.map(({ label }, index) => {
          return (
            <button
              className={clsxm('tab text-current tab-bordered border-current transition-colors', {
                'text-primary border-primary': context?.activeTab === index
              })}
              onClick={() => context?.changeActiveTab(index)}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="py-6">
        {tabs.map(({ content }, index) => {
          return (
            <div
              className={clsx('transition-all duration-1000', {
                'hidden opacity-0 translate-x-full': context?.activeTab !== index,
                'opacity-100 translate-x-0': context?.activeTab === index
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
