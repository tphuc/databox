import { Card, Title, BarChart, Text, Flex, Metric, AreaChart } from "@tremor/react";
import { User } from "lucide-react";
import '../chart.css'

const data = [
    {
        "year": 2017,
        "AutomationCoverage": 20,
        "VulnerabilityPercentage": 80,
        "AutoscaleFrequency": 0
    },
    {
        "year": 2018,
        "AutomationCoverage": 30,
        "VulnerabilityPercentage": 80,
        "AutoscaleFrequency": 0
    },
    {
        "year": 2019,
        "AutomationCoverage": 30,
        "VulnerabilityPercentage": 85,
        "AutoscaleFrequency": 0
    },
    {
        "year": 2020,
        "AutomationCoverage": 50,
        "VulnerabilityPercentage": 85,
        "AutoscaleFrequency": 20
    },
    {
        "year": 2021,
        "AutomationCoverage": 60,
        "VulnerabilityPercentage": 88,
        "AutoscaleFrequency": 25
    },
    {
        "year": 2022,
        "AutomationCoverage": 86,
        "VulnerabilityPercentage": 90,
        "AutoscaleFrequency": 18
    },
    {
        "year": 2023,
        "AutomationCoverage": 88,
        "VulnerabilityPercentage": 92,
        "AutoscaleFrequency": 12
    }
]


export default function ProofAcceleration() {
    return (
        <Card className="relative w-full grid h-full">
            <Flex>
                <div>
                    <Title>Full Proof Acceleration</Title>
                </div>

            </Flex>
            <div className="w-full overflow-x-scroll scrollbar-hide">

                <AreaChart
                    data={data}
                    index="year"
                    showGridLines
                    showYAxis
                    showXAxis
                    categories={["AutomationCoverage", "VulnerabilityPercentage", "AutoscaleFrequency"]}
                    colors={["cyan", "rose", "green", "yellow", "blue", "slate"]}
                    stack={true}
                />
            </div>
        </Card>
    );
}