import React from 'react'
import { FaHeart, FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

const Footer = ({ profile, socials = [] }) => {
    const currentYear = new Date().getFullYear()

    const socialIcons = {
        Instagram: FaInstagram,
        Tiktok: FaTiktok,
        Github: FaGithub,
        Youtube: FaYoutube,
        Linkedin: FaLinkedin
    }

    return (
        <footer
        className='border-t bg-linear-to-br from-red-400 to-white
        dark:bg-linear-to-br dark:from-red-950 dark:to-black py-6'>
            <div className='container mx-auto px-6 flex flex-col
            sm:flex-row justify-between items-center gap-4'>
                <div>
                    <h3 className='text-xl text-red-500 font-bold
                    dark:text-red-400'>
                        Portfolio
                    </h3>
                    <p className='text-xs'>{profile?.my_role}</p>
                </div>
                <div className='flex gap-4'>
                    {socials.map((social) => {
                        const Icon = socialIcons[social.platform]
                        if (!Icon) return null
                        return (
                            <a
                            key={social.id}
                            href={social.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={social.platform}
                            className='hover:text-red-500 transition-colors'>
                                <Icon size={20} />
                            </a>
                        )
                    })}
                </div>
                <p className='text-xs flex items-center gap-1'>
                    {currentYear} Made with <FaHeart
                    className='text-red-500'/> by <span
                    className='font-semibold text-red-500'>
                        {profile?.my_name} {profile?.my_surname}
                    </span>
                </p>
            </div>
            <div className='h-24'>

            </div>
        </footer>
    )
}

export default Footer