'use client';
import { cn } from '@/lib/utils'
import { BadgeDelta, Bold, Card, CategoryBar, DonutChart, Flex, Legend, List, ListItem, Metric, Text, Title } from '@tremor/react'
import Image from 'next/image'
import OpenpositionByDepartment from './OpenPositionByDepartment';
import ByGender from './ByGender';
import CandidateDecline from './CadidateDecline';
import CandidateTable from './CandidateTable';

const colors = {
    increase: "emerald",
    moderateIncrease: "emerald",
    unchanged: "orange",
    moderateDecrease: "rose",
    decrease: "rose",
};

export default function RecruitmentDashboard() {
    return (
        <div className="relative space-y-4 w-full px-4">
            <p className='text-3xl pt-0'>Recruitments Dashboard</p>
            <div className='w-full relative grid grid-cols-4 gap-4'>
                <div className='grid grid-cols-1 gap-4'>
                    <Card className='dark:bg-gray-900/50 dark:hover:bg-gray-900'>
                        <Text>Offer Acceptance Ratio</Text>
                        <Flex justifyContent="start" alignItems="baseline" className="truncate space-x-3">
                            <Metric>80%</Metric>
                            <Text className="truncate">from 100 candidates</Text>
                        </Flex>
                        <Flex justifyContent="start" className="space-x-2 mt-4">
                            <BadgeDelta size="xs">
                                80%
                            </BadgeDelta>
                            <Flex justifyContent="start" className="space-x-1 truncate">

                                <Text className="truncate">to previous month</Text>
                            </Flex>
                        </Flex>

                    </Card>


                </div>
                <div className='col-span-3 gap-4 grid grid-cols-4'>
                    <Card className='dark:bg-gray-900/50 dark:hover:bg-gray-900'>
                        <Text>Total applicant</Text>
                        <Metric>100</Metric>
                    </Card>

                    <Card className='dark:bg-gray-900/50 dark:hover:bg-gray-900' >
                        <Text>Cost per Hired </Text>
                        <Metric>$17K</Metric>
                    </Card>
                    <Card className='dark:bg-gray-900/50 dark:hover:bg-gray-900' >
                        <Text>Shortlisted Candidate</Text>
                        <Metric>35</Metric>
                    </Card>

                    <Card className='dark:bg-gray-900/50 dark:hover:bg-gray-900' >
                        <Text>Hired Candidate</Text>
                        <Metric>35</Metric>
                    </Card>

                    <Card className='dark:bg-gray-900/50 dark:hover:bg-gray-900' >
                        <Text>Rejected Candidate</Text>
                        <Metric>13</Metric>
                    </Card>


                    <Card className='dark:bg-gray-900/50 dark:hover:bg-gray-900' >
                        <Text>Time to hired (days)</Text>
                        <Metric>15</Metric>
                    </Card>
                    <Card className='dark:bg-gray-900/50 dark:hover:bg-gray-900' >
                        <Text>Time to fill (days)</Text>
                        <Metric>8</Metric>
                    </Card>
                </div>



            </div>
            <div className='relative w-full grid grid-cols-2 relative gap-4'>
                <Card className='dark:bg-gray-900/50 dark:hover:bg-gray-900' >
                    <Title>Interviews</Title>
                    <Metric>98</Metric>
                    <CategoryBar
                        showLabels
                        values={[30, 40, 30, 10, 40, 7]}
                        colors={["emerald", "purple", "blue", "teal", "yellow", "rose"]}
                        className="mt-4"
                    />
                    <Legend
                        categories={["Hired", "Offer received", "In progress", "Qualified", "Shortlisted", "Rejected"]}
                        colors={["emerald", "purple", "blue", "teal", "yellow", "rose"]}
                        className="mt-3"
                    />
                </Card>
                <ByGender/>




            </div>
            <div className='grid grid-cols-2 gap-4'>
                <CandidateDecline/>
                <OpenpositionByDepartment />
                
            </div>
            <CandidateTable/>
        </div>
    )
}
