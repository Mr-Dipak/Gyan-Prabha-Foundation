import React from 'react'
import { Navbar,Footer, TitlebarImageList,BlogSection,TeamSection } from '../index'
import {Feature} from '../index'

export function About() {
  return (
    <div>
    <TeamSection/>
    <BlogSection/>
    <Feature/>
    <TitlebarImageList/>
    </div>
  )
}
