'use client';
import { BarList, Bold, Card, Flex, Text, Title } from "@tremor/react";

const data = [
    {
        name: "Salary",
        value: 40,
        color:"cyan"
       
    },
    {
        name: "Perfomance Issues",
        value: 25,
        color:"green"
        
        
    },
    {
        name: "Better oppotunitiy",
        value: 10,
        color:"yellow"
      
        
    },
    {
        name: "Client Rejection",
        value: 10,
        color:"pink"

       
    },
    {
        name: "Attitude and Integrity Issue",
        color:"red",
        
        value: 10,
    
        
    },
    {
        name: "Change of Location",
        value: 5,
        color:"sky"

    },
];

export default function AttritionReason() {
    return (
        <Card className="w-full">
            <Title>Reason For Attrition (%)</Title>
            <Flex className="mt-4">
                <Text>
                    <Bold>Reason</Bold>
                </Text>
                <Text>
                    <Bold>%</Bold>
                </Text>
            </Flex>
            <BarList  data={data} className="mt-2" />
        </Card>
    )
};