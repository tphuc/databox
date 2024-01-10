'use client';
import { cn } from '@/lib/utils'
import { BadgeDelta, Bold, Card, CategoryBar, DonutChart, Flex, Legend, List, ListItem, Metric, ProgressBar, Text, Title } from '@tremor/react'
import Image from 'next/image'
import OpenpositionByDepartment from './OpenPositionByDepartment';
import ByGender from './ByGender';
import CandidateDecline from './CadidateDecline';
import CandidateTable from './CandidateTable';
import AcceptanceBySource from './AcceptanceBySource';
import GaugeComponent from 'react-gauge-component'

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

            
            <div className='grid col-span-4 gap-4 grid-cols-3'>
                       
                        <div className='col-span-4 grid grid-cols-3 gap-4'>
                            <Card decoration='top' decorationColor='rose' className=" mx-auto">

                                <Text>Cost For Hiring</Text>
                                <Metric>$ 96.7</Metric>

                                <Flex justifyContent="start" className="space-x-2 mt-4">
                                    <BadgeDelta deltaType='moderateIncrease'>
                                        80%
                                    </BadgeDelta>
                                    <Flex justifyContent="start" className="space-x-1 truncate">

                                        <Text className="truncate">to previous year</Text>
                                    </Flex>
                                </Flex>


                            </Card>
                            <Card decoration='top' decorationColor='blue' className=" mx-auto">

                                <Text>Total Male Hired %</Text>
                                <Metric>68%</Metric>

                                <Flex justifyContent="start" className="space-x-2 mt-4">
                                    <BadgeDelta deltaType='moderateDecrease'>
                                        10%
                                    </BadgeDelta>
                                    <Flex justifyContent="start" className="space-x-1 truncate">

                                        <Text className="truncate">to previous year</Text>
                                    </Flex>
                                </Flex>




                            </Card>
                            <Card decoration='top' decorationColor='pink' className=" mx-auto">

                                <Text>Total Female Hired %</Text>
                                <Metric>32%</Metric>

                                <Flex justifyContent="start" className="space-x-2 mt-4">
                                    <BadgeDelta deltaType='moderateIncrease'>
                                        10%
                                    </BadgeDelta>
                                    <Flex justifyContent="start" className="space-x-1 truncate">

                                        <Text className="truncate">to previous year</Text>
                                    </Flex>
                                </Flex>



                            </Card>
                          
                        </div>
                        <Card className='col-span-4 dark:bg-gray-900/50 dark:hover:bg-gray-900' >
                            <Text>Application Recieved</Text>
                            <Metric>35</Metric>
                            <div>
                                <CategoryBar
                                    showLabels={false}
                                    values={[40, 50, 10,]}

                                    colors={["emerald", "purple", 'rose']}
                                    className="mt-4"
                                />
                                <Legend
                                    categories={["Shortlisted", "Hired", "Rejected"]}
                                    colors={["emerald", "purple", 'rose']}
                                    className="mt-3"
                                />
                            </div>
                            <br />
                            <List>
                                <ListItem className="space-x-2">
                                    <div className="flex items-center space-x-2 truncate">
                                        <span
                                            className={cn(
                                                'bg-emerald-500',
                                                "h-2.5 w-2.5 rounded-sm flex-shrink-0",
                                            )}
                                        />

                                        <span className="truncate">Shortlisted</span>
                                    </div>
                                    <div className='flex min-w-[160px] items-center justify-between gap-4'>
                                        <Title> </Title>
                                        <span>40%</span>
                                    </div>
                                </ListItem>
                                <ListItem className="space-x-2">
                                    <div className="flex items-center space-x-2 truncate">
                                        <span
                                            className={cn(
                                                'bg-purple-500',
                                                "h-2.5 w-2.5 rounded-sm flex-shrink-0",
                                            )}
                                        />

                                        <span className="truncate">Hired</span>
                                    </div>
                                    <div className='flex min-w-[160px] items-center justify-between gap-4'>
                                        <Title> </Title>
                                        <span>50%</span>
                                    </div>
                                </ListItem>
                                <ListItem className="space-x-2">
                                    <div className="flex items-center space-x-2 truncate">
                                        <span
                                            className={cn(
                                                'bg-rose-500',
                                                "h-2.5 w-2.5 rounded-sm flex-shrink-0",
                                            )}
                                        />

                                        <span className="truncate">Rejected</span>
                                    </div>
                                    <div className='flex min-w-[160px] items-center justify-between gap-4'>
                                        <Title> </Title>
                                        <span>10%</span>
                                    </div>
                                </ListItem>
                            </List>


                        </Card>
                    </div>
                



            </div>
            <div className='w-full grid gap-4 grid-cols-12'>
                <div className='col-span-3'>
                    <Card className='h-full'>
                        <Title>Candidate Withdrawal Rate </Title>
                        <GaugeComponent
                            value={50}
                            type="radial"

                            arc={{
                                colorArray: ['#06b6d4'],
                                // subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
                                padding: 0.02,
                                width: 0.3
                            }}
                            pointer={{
                                elastic: true,
                                animationDelay: 0
                            }}
                        />

                    </Card>
                </div>
                <div className='col-span-3'>
                    <Card className='h-full'>
                        <Title>Offer Acceptance Rate </Title>
                        <GaugeComponent
                            value={50}
                            type="radial"

                            arc={{
                                colorArray: ['#06b6d4'],
                                // subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
                                padding: 0.02,
                                width: 0.3
                            }}
                            pointer={{
                                elastic: true,
                                animationDelay: 0
                            }}
                        />

                    </Card>
                </div>

                <div className='col-span-6'>
                    <AcceptanceBySource />
                </div>
            </div>
            {/* <div className='relative w-full grid grid-cols-2 relative gap-4'>
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
                <ByGender />
            </div> */}
            <div className='grid grid-cols-2 gap-4'>
                <CandidateDecline />
                <OpenpositionByDepartment />

            </div>
            <CandidateTable />
        </div>
    )
}
