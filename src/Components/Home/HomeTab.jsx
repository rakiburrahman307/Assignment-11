import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import Marquee from "react-fast-marquee";
import JobList from "./JobList ";


const HomeTab = () => {
  const [type, setType] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/type.json")
      .then((res) => res.json())
      .then((data) => setType(data))
      .catch((err) => console.error(err));

    // Fetch all jobs initially
    axios
      .get("https://assignment-11-server-pi-rouge.vercel.app/all_jobs", {
        withCredentials: true,
      })
      .then((res) => setFilterData(res?.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleFilter = (category) => {
    setLoading(true);
    axios
      .get("https://assignment-11-server-pi-rouge.vercel.app/all_jobs", {
        withCredentials: true,
      })
      .then((res) => {
        const jobs = res?.data;
        if (category === "allJobs") {
          setFilterData(jobs);
        } else {
          const filteredJobs = jobs?.filter(
            (job) => job?.category?.toLowerCase() === category?.toLowerCase()
          );
          setFilterData(filteredJobs);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="mb-10 min-h-[500px]">
      <h2 className="text-5xl font-extrabold my-8 text-center">
        Available Our <span className="text-teal-500">Jobs</span>
      </h2>
      <div>
        <Marquee className="mb-5">
          <h2 className="text-red-500">
            Using the react tab component, click a category to load related jobs
          </h2>
        </Marquee>
      </div>

      <Tabs>
        <TabList className="flex gap-2 justify-center border-b-2 pb-4">
          {type?.map((tab) => (
            <Tab
              key={tab.id}
              className="px-4 py-2 bg-teal-100 border-none rounded-lg cursor-pointer hover:bg-teal-200 active:bg-teal-300 transition-all"
              onClick={() => handleFilter(tab?.type)}
            >
              {tab?.type}
            </Tab>
          ))}
        </TabList>

        {type?.map((tab) => (
          <TabPanel key={tab.id}>
            <JobList jobs={filterData} loading={loading} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default HomeTab;
