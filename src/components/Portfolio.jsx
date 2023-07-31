import {React} from 'react'
// import AddRemoveUser from "../assets/portfolio/AddRemoveUser.png"
import AutoPriceMLChart from "../assets/portfolio/AutoPriceMLChart.png"
import beachEvents1 from "../assets/portfolio/beachEvents1.JPG"
// import beachEvents2 from "../assets/portfolio/beachEvents2.JPG"
import EvilTwinAttack from "../assets/portfolio/EvilTwinAttack.jpg"
// import FridgeManager from "../assets/portfolio/FridgeManager.JPG"
import FridgeManagerApp from "../assets/portfolio/FridgeManagerApp.png"
// import MITM from "../assets/portfolio/MITM.JPG"
// import pokemonChart from "../assets/portfolio/pokemonChart.png"
import PokemonMain from "../assets/portfolio/PokemonMain.jpeg"
// import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'


function Portfolio() {
    const portfolios = [
        {
            id: 1, 
            src: beachEvents1, 
            description: "Created a native web-based app to enrich students' campus socialization. It enables easy navigation to favorite events and keeps track of subscribed organizations' activities.",
            heading: "Beach Events",
            style: "shadow-[#8f15b1]"

        },
        {
            id: 2, 
            src:  FridgeManagerApp,
            description: "Revolutionized household food management with a Django-powered web app. Users can efficiently utilize their fridges, track expiry dates, and share and manage items seamlessly.",
            heading: "Fridge Manager",
            style: "shadow-[#4d43c7]" 
        },
        {
            id: 3, 
            src: EvilTwinAttack,
            description: "Created an automated Evil Twin attack software as a class project. It steals login information by setting up a replica Wi-Fi network and hosting a deceptive login page on an Apache server.",
            heading: "Evil Twin Attack Script",
            style: "shadow-[#00c8ff]"
        },
        {
            id: 4, 
            src: PokemonMain,
            description: "Crafted a backend program for a distinct Pokémon game app with a unique experience of hunting Pokémons and engaging in thrilling player battles.",
            heading: " Pokemon CLI Game",
            style: "shadow-[#fdf5a2]"

        },
        {
            id: 5, 
            src: AutoPriceMLChart,
            description: "Created an ML model to predict the Prices of automobiles with an accuracy of 87% by applying processing data techniques on data fetched from UCI's Machine Learning Repository ",
            heading: " Auto price Predictor",
            style: "shadow-[#fe8088]"
        }

    ]

  return (
    <div name='Projects' className=' pt-24 bg-gradient-to-b from-black to-gray-900 text-white flex flex-col justify-center h-fit '>
        <p className='sm:mx-32 md:text-3xl text-xl font-semibold border-b-2 p-2 mx-2 border-gray-500'>Projects</p>
            <div className='grid sm:grid-cols-2 2xl:grid-cols-3 justify-center items-center pt-5 sm:pt-10 md:mx-40 mx-10 h-fit'>
                {   
                    portfolios.map(({id, src, description, heading, style}) => (
                        <div className={'shadow-lg hover:scale-105 rounded-xl mb-10  d:mb-10 sm:mx-3 p-2 '+ style}>
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