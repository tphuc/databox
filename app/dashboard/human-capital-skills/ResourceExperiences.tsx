'use client';

import { Card, Flex, ProgressBar, Text, Title } from "@tremor/react";
import './progressbar.css'

const data = [
    {
        'name': '2-5 Years',
        value: 39,
        color:"blue"
    },
    {
        'name': '0-2 Years',
        value: 26,
        color:"purple"
    },
    {
        'name': '5-7 years',
        value: 15,
        color:"cyan"
    },
    {
        'name': '7-10 Years',
        value: 12,
        color:"green"
    },
    {
        'name': '>20 Years',
        value: 7,
        color:"slate"
    },
    {
        'name': '10-20 Years',
        value: 6,
        color:"rose"
    }
    
    

]

export default function ResourceExperiences(){
    return <Card className="w-full space-y-4 relative">
        <Title>Experience Level Head Count</Title>
        {data?.map((item) => <div key={item?.name} className="w-full space-y-1">
                    <Flex>
                    <Text>{item.name}</Text>
                    <Text>{item.value}%</Text>
                    </Flex>
                 

                  <ProgressBar
                    color={item?.color as any}
                    value={item.value}
                    
                    // label={`${item?.name}`}
                    // tooltip={item?.value}
                  />
                </div>)}
    </Card>
}