'use client';
import { useEffect, useState } from "react";
import {
    BadgeDelta,
    Card,
    DeltaType,
    DonutChart,
    Select,
    SelectItem,
    Flex,
    Legend,
    List,
    ListItem,
    Title,
    CategoryBar,
    BarList,
    BarChart,
} from "@tremor/react";

const regions = [
    { key: "all", name: "All" },
    { key: "web", name: "Web development" },
    { key: "mobile", name: "Mobile development" },
    { key: "design", name: "Design" },
];

const data = [
    {
        'skill': 'Block chain',
        'Vietnam': 0,

        'India': 1,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0,
        total: 1,
    },
    {
        'skill': 'HR',

        'Vietnam': 0,
        'India': 1,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0,
        total: 1,
    },
    {
        'skill': 'Enteprise Java',
        'Vietnam': 1,
        'India': 0,
        'Bangladesh': 1,
        'Singapore': 0,
        'UK': 0,
        total: 2,
    },
    {
        'skill': 'Account & Finance',
        'Vietnam': 0,
        'India': 2,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0,
        total: 2,
    },
    {
        'skill': 'AI / ML',
        'Vietnam': 2,
        'India': 1,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0,
        total: 3,
    },
    {
        'skill': 'Lowcode / Nocode',
        'Vietnam': 0,
        'India': 3,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0,
        total: 3
    },
    {
        'skill': 'Saleforce',
        'Vietnam': 3,
        'India': 0,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0,
        total: 3
    },
    {
        'skill': 'Sales & Marketing',
        'Vietnam': 0,
        'India': 1,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 2,
        total: 3
    },
    {
        'skill': 'Enteprise .net',
        'Vietnam': 0,
        'India': 4,
        'Bangladesh': 0,
        'Singapore': 1,
        'UK': 2,
        total: 5
    },
    {
        'skill': 'Cloud & DevOps',
        'Vietnam': 1,
        'India': 3,
        'Bangladesh': 1,
        'Singapore': 0,
        'UK': 0,
        total: 5,
    },
    {
        'skill': 'Operations',
        'Vietnam': 4,
        'India': 1,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0,
        total: 5,
    },
    {
        'skill': 'ODOO',
        'Vietnam': 0,
        'India': 4,
        'Bangladesh': 0,
        'Singapore': 1,
        'UK': 2,
        total: 7
    },
    {
        'skill': 'Quality Certification',
        'Vietnam': 7,
        'India': 1,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0,
        total: 8
    },
    {
        'skill': 'UX',
        'Vietnam': 6,
        'India': 1,
        'Bangladesh': 2,
        'Singapore': 0,
        'UK': 0,
        total: 9
    },

    {
        'skill': 'Database',
        'Vietnam': 10,
        'India': 0,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0,
        total: 10
    },
    {
        'skill': 'Analytics & Reporting',
        'Vietnam': 10,
        'India': 0,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0,
        total: 10
    },
    {
        'skill': 'Mobility',
        'Vietnam': 2,
        'India': 7,
        'Bangladesh': 3,
        'Singapore': 0,
        'UK': 0,
        total: 12
    },
    {
        'skill': 'MERN & Mean / Open Source',
        'Vietnam': 9,
        'India': 4,
        'Bangladesh': 3,
        'Singapore': 0,
        'UK': 0,
        total: 16
    },
    {
        'skill': 'All',
        'Vietnam': 9,
        'India': 4,
        'Bangladesh': 3,
        'Singapore': 0,
        'UK': 0,
        total: 16
    },

];

const filterBySkill = (skill, data) => {
    let record = data.find((city) => city.skill === skill)
    return [
        {
            name: 'Vietnam',
            value: record['Vietnam']
        },
        {
            name: 'India',
            value: record['India']
        },
        {
            name: 'Bangladesh',
            value: record['Bangladesh']
        },
        {
            name: 'Singapore',
            value: record['Singapore']
        },
        {
            name: 'UK',
            value: record['UK']
        }
    ]
}


// const valueFormatter = (number) => `$${Intl.NumberFormat("us").format(number).toString()}`;

export default function SkillMatrixChart() {
    const [selectedSkill, setSelectedSkill] = useState("All");
    const [filteredData, setFilteredData] = useState<any>(data);

    useEffect(() => {
        setFilteredData(filterBySkill(selectedSkill, data));
    }, [selectedSkill]);

    console.log(filteredData)

    return (
        <Card className="w-full h-full grid space-y-4 dark:bg-gray-900/50">
            <Flex className="space-x-8" justifyContent="between" alignItems="center">
                <Title className="min-w-[100px]">Skill Matrix</Title>
                <Select className="max-w-[400px]" onValueChange={setSelectedSkill} placeholder="Skill Selection">
                    {data.map((item) => (
                        <SelectItem key={item.skill} value={item.skill}>
                            {item.skill}
                        </SelectItem>
                    ))}
                </Select>
            </Flex>


        
                <Flex>
                    <Title></Title>
                </Flex>
                <ListItem className="w-full" >

                    <Title>
                        {filteredData?.['skill']}
                    </Title>
                    <Title >

                    </Title>


                </ListItem>
                <br />
                <div>

                    <BarChart
                        className=" mt-4"
                        data={filteredData}
                        index="name"
                        categories={["value"]}
                        colors={["cyan"]}
                        showLegend
                        showGridLines
                        showXAxis
                        showYAxis
                        rotateLabelX={{
                            angle:-45,
                            verticalShift:30,
                            xAxisHeight: 100
                        }}
                        yAxisWidth={30}
                        
                        stack={false}
                    //   customTooltip={customTooltip}
                    />
                   


                </div>
        


        </Card>
    );
}