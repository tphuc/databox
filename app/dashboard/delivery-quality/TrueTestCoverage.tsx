import { Card, Title, BarChart, Text, Flex, Metric, AreaChart } from "@tremor/react";
import { User } from "lucide-react";
import '../chart.css'
const data = [
    {
      "BuildQuarter": "Buid 1 YQ1",
      "UnitTest": 45,
      "RegressionTest": 23,
      "FunctionalTest": 37,
      "UAT": 63,
      "Total": 168
    },
    {
      "BuildQuarter": "Buid 1 YQ2",
      "UnitTest": 57,
      "RegressionTest": 26,
      "FunctionalTest": 29,
      "UAT": 52,
      "Total": 164
    },
    {
      "BuildQuarter": "Buid 1 YQ3",
      "UnitTest": 60,
      "RegressionTest": 21,
      "FunctionalTest": 27,
      "UAT": 39,
      "Total": 147
    },
    {
      "BuildQuarter": "Buid 1 YA4",
      "UnitTest": 77,
      "RegressionTest": 22,
      "FunctionalTest": 24,
      "UAT": 28,
      "Total": 151
    }
  ]
  



export default function TrueTestCoverage() {
    return (
        <Card className="relative w-full grid h-full">
            <Flex>
                <div>
                    <Title>True Test Coverage</Title>
                </div>

            </Flex>
            <div className="w-full overflow-x-scroll scrollbar-hide">

                <AreaChart
                    // layout="horizontal"
                    // className="w-[15000px] h-[500px]"
                    data={data}
                    index="BuildQuarter"
                    showGridLines
                    showYAxis
                    showXAxis
                    // rotateLabelX={{
                    //     angle:-90,
                    //         verticalShift:60,
                    //         xAxisHeight: 100
                    // }}
                    categories={["UnitTest", "RegressionTest", "FunctionalTest", "UAT"]}
                    colors={["cyan", "rose", "green", "yellow", "blue", "slate"]}
                    // valueFormatter={valueFormatter}
                    stack={true}
                />
            </div>
        </Card>
    );
}