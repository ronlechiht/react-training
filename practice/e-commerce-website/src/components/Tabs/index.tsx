import { MouseEventHandler, useState } from 'react';

import './index.css';

const Tab = ({
  label,
  onClick,
  isActive
}: {
  label: string;
  onClick: MouseEventHandler;
  isActive: boolean;
}) => (
  <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
    {label}
  </div>
);

const Tabs = ({ tabs }: { tabs: string[] }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            onClick={() => handleTabClick(index)}
            isActive={index === activeTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
