import {React, useState} from 'react'
import AddRemoveUser from "../assets/portfolio/AddRemoveUser.png"
import AutoPriceMLChart from "../assets/portfolio/AutoPriceMLChart.png"
import beachEvents1 from "../assets/portfolio/beachEvents1.JPG"
import beachEvents2 from "../assets/portfolio/beachEvents2.JPG"
import EvilTwinAttack from "../assets/portfolio/EvilTwinAttack.jpg"
import FridgeManager from "../assets/portfolio/FridgeManager.JPG"
import FridgeManagerApp from "../assets/portfolio/FridgeManagerApp.png"
import MITM from "../assets/portfolio/MITM.JPG"
import pokemonChart from "../assets/portfolio/pokemonChart.png"
import PokemonMain from "../assets/portfolio/PokemonMain.jpeg"
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'


function Portfolio() {
    const portfolios = [
        {
            id: 1, 
            src: beachEvents1, 
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate minima culpa ratione totam recusandae aliquid ",
            heading: "Beach Events",
            style: "shadow-[#8f15b1]"

        },
        {
            id: 2, 
            src:  FridgeManagerApp,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate minima culpa ratione totam recusandae aliquid ",
            heading: "Fridge Manager",
            style: "shadow-[#4d43c7]" 
        },
        {
            id: 3, 
            src: EvilTwinAttack,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate minima culpa ratione totam recusandae aliquid ",
            heading: "Evil Twin Attack Script",
            style: "shadow-[#00c8ff]"
        },
        {
            id: 4, 
            src: PokemonMain,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate minima culpa ratione totam recusandae aliquid ",
            heading: " Pokemon CLI Game",
            style: "shadow-[#fdf5a2]"

        },
        {
            id: 5, 
            src: AutoPriceMLChart,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate minima culpa ratione totam recusandae aliquid ",
            heading: " Auto price Predictor",
            style: "shadow-[#fe8088]"
        }

    ]
    const [index, setIndex] = useState(0)
    const leftProj = () =>{
        const isFirst = index === 0
        const newIndex = isFirst ? portfolios.length -1 : index - 1
        setIndex(newIndex)
    }
    const rightProj = () =>{
        const isLast = index === portfolios.length - 1 
        const newIndex = isLast ? 0 : index + 1
        setIndex(newIndex)
    }
  return (
    <div name='Projects' className=' bg-gradient-to-b from-black to-gray-900 text-white h-fit'>
            <div className='grid sm:grid-cols-2 justify-center items-center pt-28 sm:mx-36 mx-20 h-fit'>
                {
                    portfolios.map(({id, src, description, heading, style}) => (
                        <div className={'shadow-lg  rounded-xl mb-10 md:mb-10 sm:mx-3 p-2' + ' ' + style}>
                            <p className=' font-semibold text-center'><h1>{heading}</h1></p>
                            <div key={id} className='sm:flex sm:flex-row sm:gap-4 md:h-[220px] py-2'>
                                <div className=' sm:ml-2 grid grid-cols-1 sm:w-6/12'>
                                    <img src={src} alt="" className=' duration-200 h-[200px] sm:h-[140px] hover:scale-105 w-full rounded-xl'/>
                                    <div className=' flex flex-row  gap-2'>
                                            <button  className=' w-1/2  py-2  duration-200 hover:scale-110' >Demo</button>
                                            <button className=' w-1/2   py-2  duration-200 hover:scale-110' >Code</button>
                                    </div>
                                </div>
                                <div className='sm:w-7/12 sm:px-2'>
                                    <p>{description}</p>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

       
    </div>
  )
  
};

export default Portfolio