import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiFacebook} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="#" target="_blank"><BsLinkedin/></a>
        <a href="#" target="_blank"><FaGithub/></a>
        <a href="#" target="_blank"><SiFacebook/></a>
    </div>
  )
}

export default HeaderSocials