"use client";

import { PageHeader } from "../components/PageHeader";
import { Sidebar } from "../components/Sidebar";

import { ClicksChart, ChartData } from "../components/analytics/ClicksChart";

function getSampleData() {
  const now = new Date();

  const currentHour = now.getHours();
  const evenHour = currentHour % 2 === 0 ? currentHour : currentHour - 1;

  const baseTime = new Date(now);
  baseTime.setMinutes(0, 0, 0);
  baseTime.setHours(evenHour);

  const sampleChartData: ChartData[] = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(baseTime);
    date.setHours(baseTime.getHours() - (11 - i) * 2);

    return {
      date: date.getTime(),
      clicks: Math.floor(Math.random() * 300) + 50,
    };
  });
  return sampleChartData;
}

export default function Dashboard() {
  return (
    <div className="flex min-h-svh">
      <div className="flex flex-row w-full min-h-full p-3 gap-2">
          <Sidebar />
          <div className="w-[85%] h-full">
            <PageHeader />
            <div className="w-full max-h-[40%] h-[40%] flex flex-row justify-center gap-5 pl-5 pr-5">
              <ClicksChart title="Clicks in the past 24 Hours" chartData={getSampleData()} />
              {/* <div className="w-[65%] bg-[#171717] border-[#cccccc20] border rounded-2xl"> */}
                {/* World map display click thing ? */}
              {/* </div> */}
            </div>
          </div>
      </div>
    </div>
  );
}
