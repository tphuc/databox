import { Card, Title, BarChart, Text, Flex, Metric } from "@tremor/react";
import { User } from "lucide-react";
import '../chart.css'
const data = [
    {
        'name': '2-5 Years',
        'Vietnam': 18,
        'India': 11,
        'Bangladesh': 10,
        'Singapore': 0,
        'UK': 0

       
    },
    {
        'name': '0-2 Years',
        'Vietnam': 4,
        'India': 20,
        'Bangladesh': 2,
        'Singapore': 0,
        'UK': 0
    },
    {
        'name': '5-7 years',
        'Vietnam': 1,
        'India': 13,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0
    },
    {
        'name': '7-10 Years',
        'Vietnam': 0,
        'India': 11,
        'Bangladesh': 1,
        'Singapore': 0,
        'UK': 0
    },
    {
        'name': '>20 Years',
        'Vietnam': 0,
        'India': 4,
        'Bangladesh': 0,
        'Singapore': 1,
        'UK': 2
    },
    {
        'name': '10-20 Years',
        'Vietnam': 0,
        'India': 4,
        'Bangladesh': 0,
        'Singapore': 1,
        'UK': 2
    }
    
    

]

// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

export default function CountryWiseExperience() {
    return (
        <Card className="relative w-full h-full">
            <Flex>
                <div>
                    {/* <Title>Gender Demographic</Title> */}
                    <Title>Experiences By Country</Title>
                </div>
                {/* <div>
                    <Title className="flex items-center gap-2">Total <User/> </Title>
                    <Metric>105 </Metric>
                </div> */}
            </Flex>


            <BarChart
                layout="vertical"
                className="w-full"
                data={data}
                yAxisWidth={80}
                index="name"
                categories={["India", "Vietnam", "Bangladesh", "Singapore", "UK"]}
                colors={["cyan", "rose", "green", "yellow", "blue", "slate"]}
                // valueFormatter={valueFormatter}
                stack={true}
            />
        </Card>
    );
}