import { Card, LineChart, Title } from "@tremor/react";

const chartdata4 = [
    {"date": "Dec-22", "value": 21},
    {"date": "Jan-23", "value": 23},
    {"date": "Feb-23", "value": 22},
    {"date": "Mar-23", "value": 18},
    {"date": "Apr-23", "value": 14},
    {"date": "May-23", "value": 0},
    {"date": "Jun-23", "value": 0},
    {"date": "Jul-23", "value": 7},
    {"date": "Aug-23", "value": 7},
    {"date": "Sep-23", "value": 6},
    {"date": "Oct-23", "value": 6}
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
            <p className="font-medium text-tremor-content-emphasis">{category.value} bpm</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const EscapedDefects = () => {
  return (
    <>
      <Card>
        <Title>Escaped Defects</Title>
        <LineChart
          className="h-72 mt-4"
          data={chartdata4}
          index="date"
          categories={["value"]}
          colors={["blue"]}
          yAxisWidth={30}
        //   customTooltip={customTooltip}
        />
      </Card>
    </>
  );
};