import { cn } from '@/lib/utils'
import { BadgeDelta, Card, CategoryBar, DonutChart, Flex, Legend, List, ListItem, Metric, Text } from '@tremor/react'
import Image from 'next/image'
import GenderDemographic from './GenderDemographic';
import { AttritionChart } from './AttritionChart';
import { AllocationChart } from './Allocation';
import AttritionReason from './AttritionReason';
import EmployeePerfomanceAnalysis from './EmployeePerfomanceAnalysis';

const colors = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

export default function Page() {
  return (
    <div className='space-y-4 px-4'>
      <div className="relative grid grid-cols-12 gap-4  w-full ">
        <div className='col-span-8'>
          <GenderDemographic />
        </div>
        <div className='col-span-4 mt-0'>
          <AllocationChart />
        </div>

      </div>
      <div className='relative grid grid-cols-12 gap-4'>
        <div className='col-span-4'>
          <AttritionChart />
        </div>
        <div className='col-span-8'>
          <AttritionReason />
        </div>
        <div className='col-span-12'>
          <EmployeePerfomanceAnalysis/>
        </div>


      </div>

    </div>
  )
}
