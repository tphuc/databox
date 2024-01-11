import { Card, Metric, Title } from '@tremor/react'
import Image from 'next/image'
import { EscapedDefects } from './EscapedDefect'
import TrueTestCoverage from './TrueTestCoverage'
import DevOpsResearchAssessment from './DevOpsResearch&Assesment'
import { DevOpsResearchAssessmentChart } from './DevOpsResearch&AssesmentChart'
import MyChartComponent from './MixChartDevOpsResearch&Assessment'
import InvestmentDistribution from './InvestmentDistribution'
import ProofAcceleration from './ProofAcceleration'

export default function Page() {
  return (
    <div className="pb-20 px-2 w-full space-y-2">
      <div className='grid grid-cols-2  gap-4'>

        <EscapedDefects />
        <TrueTestCoverage />

      </div>
      <div className='grid grid-cols-2'>
        <div>
          <Image width={500} height={500} alt='' className='w-full h-full' src={'/performance.png'} />
        </div>
      </div>
      <div className='grid grid-cols-12  gap-4'>
        <Card className='col-span-3'>
          <Title>Matrix Sample Project</Title>
          <Metric>3</Metric>
        </Card>

        <Card className='col-span-3'>
          <Title>Matrix Sample Period</Title>
          <Metric>6</Metric>
        </Card>

        <Card className='col-span-6'>
          <DevOpsResearchAssessment />
        </Card>

        <Card className='col-span-6'>
          <MyChartComponent />
        </Card>
        <Card className='col-span-6'>
          <InvestmentDistribution />
        </Card>
        <Card className='col-span-6'>
          <ProofAcceleration />
        </Card>





      </div>
    </div>
  )
}
