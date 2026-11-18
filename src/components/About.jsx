import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa'
import about from '../assets/about.png'
import { ArrowRight } from 'lucide-react'

const About = ({ profile, socials = [] }) => {
  
  const about_words = profile?.about_title ? profile.about_title.split(' '): []
  const firstPart = about_words.slice(0, -2).join(' ')
  const secondPart = about_words.slice(-2).join(' ')
  
  const socialConfig = {

    Instagram: {
      icon: FaInstagram,
      color: 'hover:text-pink-500 hover:border-pink-500/40'
    },
    Tiktok: {
      icon: FaTiktok,
      color: 'hover:text-purple-500 hover:border-purple-500/40'
    },
    Github: {
      icon: FaGithub,
      color: 'hover:text-blue-500 hover:border-blue-500/40'
    },
    Youtube: {
      icon: FaYoutube,
      color: 'hover:text-red-500 hover:border-red-500/40'
    },
    Linkedin: {
      icon: FaLinkedin,
      color: 'hover:text-blue-300 hover:border-blue-300/40'
    }
  }

  return (
    <section id='about' className='min-h-screen flex items-center
    py-20 px-4 sm:px-6 overflow-hidden relative'>
      <div className='max-w-6xl mx-auto w-full grid grid-cols-1
      lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10'>
        <div className='order-2 lg:order-1 flex flex-col
        items-center lg:items-start text-center lg:text-left'
        data-aos='fade-right'>  
          <div className='inline-flex items-center gap-2 px-4
          py-1.5 rounded-full bg-red-500/10 border
          border-red-500/20 mb-4'>
            <span className='w-2 h-2 rounded-full bg-red-500
            animate-pulse'></span>
            <span className='text-xs sm:text-sm font-semibold
            tracking-wider uppercase dark:text-red-300 text-red-600'>
              About Me
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold
          mb-6 dark:text-white text-gray-900 leading-tight'>
            { firstPart }
            <span className='text-red-600 dark:text-red-400 block'>
              { secondPart }</span>
          </h2>
          <p className='text-base lg:text-lg mb-8 leading-relaxed
          dark:text-gray-300 text-gray-700 max-w-xl'>
            { profile?.about_bio }
          </p>
          <div className='flex gap-4 mb-8'>
            {socials.map((social, index) => {

              const config = socialConfig[social.platform]
              if(!config) return null
              const IconComponent = config.icon

              return (
                <a
                key={social.id}
                href={social.url}
                target='_blank'
                rel="noopener noreferrer"
                aria-label = {social.platform}
                data-aos='zoom-in'
                data-aos-delay={index * 100}
                className={`w-12 h-12 rounded-full flex items-center
                  justify-center text-xl border border-gray-200
                  dark:border-gray-800 bg-white/50
                  dark:bg-gray-900/50 backdrop-blur-sm
                  dark:text-gray-300 text-gray-700
                  transition-all duration-300
                  hover:scale-110 hover:shadow-lg ${config.color}`}>
                    <IconComponent />
                </a>
              )
            })}
          </div>
          <a href="#contact" data-aos='fade-up' data-aos-delay='300'>
                                <button className='group inline-flex
                                items-center justify-center gap-2 px-8 py-3
                                rounded-full text-white font-semibold
                                bg-linear-to-r from-red-600 to-red-800
                                hover:shadow-[0_0_40px_rgba(220,38,38,0.7)]
                                transition-all duration-300 transform
                                hover:scale-105'>
                                    
                                    Let's Talk
                                    <ArrowRight size={18}/>
                                </button>

                            </a>
          </div>
        <div
        className='relative order-1 lg:order-2 flex justify-center'
        data-aos='fade-left'>
          <div className='relative w-full max-w-sm sm:max-w-md'>
            <div className='absolute inset-0 bg-linear-to-r
            from-red-600 to-red-800
            rounded-[40%_60%_60%/40%_60%_70%] filter blur-xl
            opacity-40 animate-pulse'/>
            <div className='relative w-full max-w-sm sm:max-w-md'>
            <div className='absolute inset-0 bg-linear-to-r
            from-red-600 to-red-800
            rounded-[40%_60%_60%/40%_60%_70%] transform
            rotate-3 scale-105'/>
            <img src={about} alt="About"
            className='relative z-10 rounded-[40%_60%_60%/40%_60%_70%]
            shadow-2xl w-full h-auto object-cover border-2
            border-red-500/30 backdrop-blur-sm'/>

            </div>

          </div>

        </div>
        </div>
   </section>
  )
}

export default About