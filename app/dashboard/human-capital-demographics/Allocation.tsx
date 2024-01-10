'use client';

import { cn } from "@/lib/utils";
import { Card, DonutChart, List, ListItem, Title } from "@tremor/react";
import { useState } from "react";


const colors = ["indigo-600", "red-600", "cyan-500", "yellow-600", "green-500", "green-400"]
const data = [
  {
    name: "Billed",
    value: 81,
  },
  {
    name: "Buffer",
    value: 5,
  },
  {
    name: "Bench",
    value: 10,
  },
  {
    name: "Support",
    value: 2,
  },
  {
    name: "Executive",
    value: 2,
  },
  
];

const valueFormatter = (number) => `% ${number}`;

export const AllocationChart = () => {
  const [value, setValue] = useState(null);
  return (

      <Card className="w-full mt-0">
        <Title>Allocation</Title>
        <DonutChart
            className="mt-6"
            data={data}
            category="value"
            index="name"
            valueFormatter={valueFormatter}
            colors={colors}
        />
        <List className="w-full">
        {data.map((data, id) => (
            <ListItem key={data.name} className="space-x-2">
                <div className="flex items-center space-x-2 truncate">
                    <span
                        className={cn(
                            `bg-${colors?.[id]}`,
                            "h-2.5 w-2.5 rounded-sm flex-shrink-0",
                        )}
                    />

                    <span className="truncate">{data?.name}</span>
                </div>
              
                   
                    <span>{data.value}</span>
                
            </ListItem>
        ))}
    </List>
      </Card>

  );
};