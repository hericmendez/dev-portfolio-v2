import React, { useState, ReactElement } from 'react';
import RpguiCard from './RpguiCard';


type TabProps = {
  label: string;
  children: React.ReactNode;
};

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

type TabsProps = {
  children: ReactElement<TabProps>[];
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (

      <div >
        <div className="flex flex-row justify-start items-center mb-4 gap-4">
          {children.map((tab) => (
            <button
              key={tab.props.label}
              className={"rpgui-button golden text-2xl mx-5 " + (activeTab === tab.props.label ? "down" : "")}
              onClick={() => setActiveTab(tab.props.label)}
            >
             <p> {tab.props.label}</p>
            </button>
          ))}
        </div>

        <RpguiCard >
          {children.map((tab) =>
            tab.props.label === activeTab ? (
              <div
                key={tab.props.label}
                className='grid gap-4  md:grid-cols-2'

              >
                {tab.props.children}
              </div>
            ) : null
          )}
             
        </RpguiCard>

      </div>

  );
};

export default Tabs;
