import React from 'react'
import py from '../assets/python.png'
import cpp from '../assets/C++.png'
import aws from '../assets/amazon-aws.png'
import atom from '../assets/atom.png'
import css from '../assets/css.png'
import dj from '../assets/django.png'
import github from '../assets/github.png'
import haskell from '../assets/haskell.png'
import html from '../assets/html.png'
import java from '../assets/java.png'
import js from '../assets/javascript.png'
import mongo from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'
import rt from '../assets/react.png'
import postgresql from '../assets/postgresql.png'
import vscode from '../assets/visual-studio-code.png'
import node from '../assets/node.png'
import DataGrip from '../assets/DataGrip.png'
import Insomnia from '../assets/insomnia.jpg'



const Skills = () => {
  // const skills =[
  //   {
  //   name: 'Programming Languages :',
  //   icons: [py, cpp, java, haskell, html, js, css]
  //   },
  //   {
  //     name: 'Frameworks :',
  //     icons: [dj, rt, node]
  //   },
  //   {
  //     name: 'Database & tools :',
  //     icons: [mongo, mysql, postgresql, DataGrip]
  //   },
  //   {
  //     name: 'Development tools :',
  //     icons: [vscode, aws, atom, github, Insomnia]
  //   },
  // ] 
  return (
    <div name='Skills' className='w-full h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col  justify-center'>
      <div className=''>
          <p className='sm:mx-32 p-2 md:text-3xl text-xl font-semibold  border-b-2 border-gray-500 text-white'>Skills</p>
        <div className='md:flex md:flex-row md:justify-center'>
          <div className='grid grid-cols-1'>
            <p className=' m-7 text-white'> Programming Languages :</p>
            <p className=' m-7 text-white'> Frameworks :</p>
            <p className=' m-7 text-white'> Database & tools :</p>
            <p className=' m-7 text-white'> Development tools :</p>
          </div>
          <div className='gird grid-cols-1'>
            <div className='m-7 flex flex-row'>
              <img title='Python'src={py} className='h-12 w-12 ml-3' alt="" />
              <img title='C++'src={cpp} className='h-12 w-12 ml-3' alt="" />
              <img title='Java'src={java} className='h-12 w-12 ml-3' alt="" />
              <img title='Haskell'src={haskell} className='h-12 w-12 ml-3' alt="" />
              <img title='HTML'src={html} className='h-12 w-12 ml-3' alt="" />
              <img title='JavaScript'src={js} className='h-12 w-12 ml-3' alt="" />
              <img title='CSS'src={css} className='h-12 w-9 ml-3' alt="" />
            </div>
            <div className='m-7 flex flex-row'>
              <img title='Django'src={dj} className='h-12 w-12 ml-3' alt="" />
              <img title='React'src={rt} className='h-12 w-12 ml-3' alt="" />
              <img title='Node.js'src={node} className='h-12 w-12 ml-3' alt="" />
            </div>
            <div className='m-7 flex flex-row'>
              <img title='MongoDB'src={mongo} className='h-12 w-12 ml-3' alt="" />
              <img title='MySQL'src={mysql} className='h-12 w-12 ml-3' alt="" />
              <img title='Postgresql'src={postgresql} className='h-12 w-12 ml-3' alt="" />
              <img title='DataGrip'src={DataGrip} className='h-12 w-12 ml-3' alt="" />
            </div>
            <div className='m-7 flex flex-row'>
              <img title='VS Code'src={vscode} className='h-12 w-12 ml-3' alt="" />
              <img title='AWS'src={aws} className='h-12 w-12 ml-3' alt="" />
              <img title='Atom'src={atom} className='h-12 w-12 ml-3' alt="" />
              <img title='GitHub'src={github} className='h-12 w-12 ml-3 bg-white rounded-full border-2' alt="" />
              <img title='Insomnia (API testing)'src={Insomnia} className='h-12 w-12 ml-3 bg-white rounded-full border-2' alt="" />
            </div>

          </div>
        </div>
      </div> 
    </div>
  )
}

export default Skills