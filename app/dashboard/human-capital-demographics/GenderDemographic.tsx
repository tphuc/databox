import { Card, Title, BarChart, Text, Flex, Metric } from "@tremor/react";
import { User } from "lucide-react";
import '../chart.css'
const data = [
    
    {
        country: "India",
        Failed: 1890,
        "male": 63,
        "female": 8,
    },
    {
        country: "Vietnam",
        Failed: 2890,
        "male": 14,
        "female": 2,
    },
    
    {
        country: "Bangladesh",
        Failed: 11,
        "male": 2,
        "female": 3,
    },
    {
        country: "Singapore",
        Failed: 11,
        "male": 2,
        "female": 0,
    },
    {
        country: "UK",
        Failed: 3890,
        "male": 2,
        "female": 1,
    },
];

// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

export default function GenderDemographic() {
    return (
        <Card className="relative w-full">
            <Flex>
                <div>
                    <Title>Gender Demographic</Title>
                    <Text>Gender by country</Text>
                </div>
                <div className="flex items-center gap-4">
                    <Metric >105   </Metric>
                    <Text> Total </Text>
                </div>
            </Flex>


            <BarChart
                layout="vertical"
                className="w-full"
                
                data={data}
                yAxisWidth={80}
                index="country"
                categories={["male", "female"]}
                colors={["sky", "violet"]}
                // valueFormatter={valueFormatter}
                stack={true}
            />
        </Card>
    );
}