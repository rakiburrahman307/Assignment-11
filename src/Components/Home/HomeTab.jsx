import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css'

const HomeTab = () => {
  const [type, setType]= useState([])
  useEffect(()=>{
    fetch('type.json')
    .then(res=> res.json())
    .then(data => setType(data));
  },[])
  return (
    <div>
      <Tabs>
        <TabList>
          {
            type.map(tab =><Tab key={tab.id}>{tab.type}</Tab>)
          }
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HomeTab;