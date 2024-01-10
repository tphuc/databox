import { Card, Title, BarChart, Text, Flex, Metric } from "@tremor/react";
import { User } from "lucide-react";
import '../chart.css'
const data = [
    {
        'skill': 'Block chain',
        'Vietnam': 0,
        'India': 1,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0
    },
    {
        'skill': 'HR',
        'Vietnam': 0,
        'India': 1,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0
    },
    {
        'skill': 'Enteprise Java',
        'Vietnam': 1,
        'India': 0,
        'Bangladesh': 1,
        'Singapore': 0,
        'UK': 0
    },
    {
        'skill': 'Account & Finance',
        'Vietnam': 0,
        'India': 2,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0
    },
    {
        'skill': 'AI / ML',
        'Vietnam': 2,
        'India': 1,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0
    },
    {
        'skill': 'Lowcode / Nocode',
        'Vietnam': 0,
        'India': 4,
        'Bangladesh': 0,
        'Singapore': 1,
        'UK': 2
    },
    {
        'skill': 'Saleforce',
        'Vietnam': 3,
        'India': 0,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0
    },
    {
        'skill': 'Sales & Marketing',
        'Vietnam': 0,
        'India': 1,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 2
    },
    {
        'skill': 'Enteprise .net',
        'Vietnam': 0,
        'India': 4,
        'Bangladesh': 0,
        'Singapore': 1,
        'UK': 2
    },
    {
        'skill': 'Cloud & DevOps',
        'Vietnam': 0,
        'India': 4,
        'Bangladesh': 0,
        'Singapore': 1,
        'UK': 2
    },
    {
        'skill': 'Operations',
        'Vietnam': 4,
        'India': 1,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0
    },
    {
        'skill': 'ODOO',
        'Vietnam': 0,
        'India': 4,
        'Bangladesh': 0,
        'Singapore': 1,
        'UK': 2
    },
    {
        'skill': 'QC',
        'Vietnam': 7,
        'India': 1,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0
    },
    {
        'skill': 'UX',
        'Vietnam': 6,
        'India': 1,
        'Bangladesh': 2,
        'Singapore': 0,
        'UK': 0
    },

    {
        'skill': 'Database',
        'Vietnam': 10,
        'India': 0,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0
    },
    {
        'skill': 'Analytics & Reporting',
        'Vietnam': 10,
        'India': 0,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 0
    },
    {
        'skill': 'Mobility',
        'Vietnam': 2,
        'India': 7,
        'Bangladesh': 3,
        'Singapore': 0,
        'UK': 0
    },
    {
        'skill': 'MERN & Mean',
        'Vietnam': 9,
        'India': 4,
        'Bangladesh': 3,
        'Singapore': 0,
        'UK': 0
    },

]

// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

export default function SkillMatrixExperiences() {
    return (
        <Card className="relative w-full grid h-full">
            <Flex>
                <div>
                    {/* <Title>Skills Demographic</Title> */}
                </div>

            </Flex>
            <div className="w-full overflow-x-scroll scrollbar-hide">

                <BarChart
                    layout="horizontal"
                    // className="w-[15000px] h-[500px]"
                    data={data}
                    index="skill"
                    showGridLines
                    showYAxis
                    showXAxis
                    rotateLabelX={{
                        angle:-90,
                            verticalShift:60,
                            xAxisHeight: 100
                    }}
                    categories={["India", "Vietnam", "Bangladesh", "Singapore", "UK"]}
                    colors={["cyan", "rose", "green", "yellow", "blue", "slate"]}
                    // valueFormatter={valueFormatter}
                    stack={true}
                />
            </div>
        </Card>
    );
}