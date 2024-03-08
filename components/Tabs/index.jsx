import React, { useState } from 'react'
import { TabsContainer, TabButton, TabContent } from './style'

const Tabs = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <TabButton
          key={index}
          active={index === activeTab}
          onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabsContainer>
      <TabContent>
        {tabs[activeTab].content}
        {tabs[activeTab].contentSecondary}

      </TabContent>
    </div>
  );
};
export default Tabs;