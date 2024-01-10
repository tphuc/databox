import Image from 'next/image'
import ResourceExperiences from './ResourceExperiences'
import CountryWiseExperience from './ContryWiseExperience'
import SkillMatrixExperiences from './SkillMatrixByCountry'
import SkillMatrixChart from './SkillMatrixByCountry2'

export default function Page() {
  return (
    <div className="w-full px-4 space-y-4">

      <div className='w-full grid grid-cols-12 gap-4'>
        <div className='col-span-4'>
          <ResourceExperiences />
        </div>
        <div className='col-span-8'>
          <CountryWiseExperience />
        </div>

        {/* <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-blue-400">
  <div className="absolute top-0 aspect-square w-full rotate-[calc(72deg-45deg)] bg-gradient-to-tr from-transparent from-50% to-white to-50% transition-transform duration-500"></div>
  <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-blue-100"></div>
  <div className="absolute bottom-0 w-full truncate text-center text-[20vmax] leading-none">40%</div>
</div> */}
      </div>
      <div className='w-full grid gap-4 grid-cols-12'>
        <div className='col-span-4'>
          <SkillMatrixChart/>
        </div>
        <div className='col-span-8'>
          <SkillMatrixExperiences/>
        </div>
      </div>
    </div>
  )
}
