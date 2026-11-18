import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Skills = ({ skills = [] , websiteText}) => {
  const scrollRef = useRef(null)

  const handleScroll = (direction) => {
    if (!scrollRef.current) return

    const scrollAmount = scrollRef.current.clientWidth
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section id='skills' className='min-h-screen flex items-center
    py-20 px-4 sm:px-6 overflow-hidden relative'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80
        bg-red-500/5 rounded-full blur-3xl'></div>

        <div className='absolute -bottom-40 -left-40 w-80 h-80
        bg-red-500/5 rounded-full blur-3xl'></div>

      </div>

      <div className='max-w-6xl mx-auto w-full relative z-10'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <div className='inline-flex items-center gap-2
          px-4 py-1.5 rounded-full bg-red-500/10
          border border-red-500/20 mb-5'>
            <span className='w-2 h-2 rounded-full
            bg-red-500 animate-pulse'></span>
            <span className='text-sm font-medium
            dark:text-gray-300 text-gray-700'>
              Expertise
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl
          font-bold dark:text-white text-gray-900'>
            My <span className='text-red-500
            dark:text-red-400'>Skills</span>
          </h2>
          <p className='mt-4 text-gray-600
            dark:text-gray-300 max-w-2xl mx-auto'>
              {websiteText?.skills_text}

          </p>
        </div>

        <div className='flex items-center gap-3 sm:gap-5'>
          <button
            type='button'
            onClick={() => handleScroll('left')}
            aria-label='Mostra le skill precedenti'
            className='p-3 rounded-full border-2 shrink-0 transition-all duration-300
            dark:border-zinc-200 border-gray-800 dark:text-white text-gray-800
            hover:border-red-500 dark:hover:border-red-500
            hover:bg-red-500/10 dark:hover:bg-red-500/10'>
            <ChevronLeft size={22} />
          </button>

          <div
            ref={scrollRef}
            className='flex flex-1 gap-8 md:gap-12 overflow-x-auto scrollbar-none
            scroll-smooth snap-x snap-mandatory'>
            {skills.map((skill, index) => {
              const radius = 60
              const circumference = 2 * Math.PI * radius
              const offset = circumference - (
                skill.percentage / 100) * circumference
              const size = 150
              return (
                <div
                key={skill.id}
                className='flex flex-col items-center shrink-0 snap-start
                w-full sm:w-[calc(50%-24px)] md:w-[calc(50%-24px)]
                lg:w-[calc(25%-36px)]'
                data-aos='fade-up'
                data-aos-delay={index * 100}>
                  <div
                  className='relative'
                  style={{width: size, height:size}}>
                    <svg
                    className='transform -rotate-90'
                    width={size}
                    height={size}>
                      <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill='none'
                      stroke='#E5E7EB'
                      strokeWidth='10'
                      className='dark:stroke-gray-700'>
                      </circle>
                      <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill='none'
                      stroke={skill.color}
                      strokeWidth='10'
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap='round'
                      className='transition-all duration-1000 ease-out'
                      style={{transition: 'stroke-dashoffset 1.5s ease-in-out'}}>
                      </circle>
                    </svg>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span className='text-3xl font-bold dark:text-white text-gray-900'>
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                  <h3 className='mt-4 text-base font-medium text-center
                  dark:text-gray-200 text-gray-900'>
                    {skill.skill_name}
                  </h3>
                </div>
              )
            })}
          </div>

          <button
            type='button'
            onClick={() => handleScroll('right')}
            aria-label='Mostra le skill successive'
            className='p-3 rounded-full border-2 shrink-0 transition-all duration-300
            dark:border-zinc-200 border-gray-800 dark:text-white text-gray-800
            hover:border-red-500 dark:hover:border-red-500
            hover:bg-red-500/10 dark:hover:bg-red-500/10'>
            <ChevronRight size={22} />
          </button>
        </div>

      </div>

    </section>
  )
}

export default Skills