'use client';
import { cn } from "@/lib/utils";
import { AreaChart, Card, List, ListItem, Title } from "@tremor/react";

const chartdata3 = [
  {
    year: "2017",
    "total": 0
  },
  {
    year: "2018",
    "total": 1
  },
  {
    year: "2019",
    "total": 2
  },
  {
    year: "2020",
    "total": 0
  },
  {
    year: "2021",
    "total": 1
  },
  {
    year: "2022",
    "total": 8
  },
  {
    year: "2023",
    "total": 10
  },
];

const customTooltip = ({ payload, active }) => {
  if (!active || !payload) return null;
  return (
    <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div className={`w-1 flex flex-col bg-${category.color}-500 rounded`} />
          <div className="space-y-1">
            <p className="text-tremor-content">{category.dataKey}</p>
            <p className="font-medium text-tremor-content-emphasis">{category.value}</p>  
          </div>
        </div>
      ))}
    </div>
  );
};

export const AttritionChart = () => {
  return (
    <>
      <Card>
        <Title>Attrition Rate</Title>
        <AreaChart
          className="h-72 mt-4"
          data={chartdata3}
          index="year"
          categories={["total"]}
          colors={["blue"]}
          yAxisWidth={30}
          customTooltip={customTooltip}
        />
      </Card>
      
    </>
  );
};