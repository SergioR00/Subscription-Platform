import { Link } from "react-router-dom"

function App() {

  return (
    <body className="bg-black text-gray-100 min-h-screen">

    <nav className="bg-gray-800/60 backdrop-blur-xl mx-14 rounded-b-xl flex flex-wrap py-3">
        <div className="flex w-3/4 flex-wrap">
            <a href="#" className="flex items-center space-x-3 px-4">
                <span className="text-2xl font-semibold whitespace-nowrap text-blue-600">Pride Video</span>
            </a>
            <div className="ml-6 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
                    <li>
                    <a href="#" className="block py-2 px-3 text-white hover:text-blue-700" aria-current="page">Inicio</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 px-3 text-white hover:text-blue-700">Películas</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 px-3 text-white hover:text-blue-700">Series</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 px-3 text-white hover:text-blue-700">Deportes</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="flex w-1/4 justify-end px-4 pr-8">
            <Link to="/login" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">
                Empezar
            </Link>
        </div>
    </nav>

    <nav className="ml-14">
        <ul className="flex flex-col mt-14">
            <li className="font-bold text-xl mb-4">Series más vistas</li>
            <ul className="flex flex-row mb-10">
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://m.media-amazon.com/images/S/pv-target-images/25cecb7a0b99ad3cfcafcce91941ef616a94393f98937b2c2c2409023e86b885._SX1080_FMjpg_.jpg"></img></a>
                </li>
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://i.ytimg.com/vi/HvgLlVSXMm0/maxresdefault.jpg"></img></a>
                </li>
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://m.media-amazon.com/images/S/pv-target-images/a0a3733894bea5c83acd488276d7e1f88694ffa75b63ed7e894e131d40d9962f.jpg"></img></a>
                </li>
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://tm.ibxk.com.br/2025/11/20/The_Mighty_Nein_Episodios_Prime_Video_Calendario_e3aeecdd99.jpg"></img></a>
                </li>
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://i.ytimg.com/vi/37ZG9lddxto/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZLKnIpjjTtSnJ42qSZZ4q3HafcQ"></img></a>
                </li>
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://m.media-amazon.com/images/S/pv-target-images/1094da794491a5e3ec0feba5f3598ac9cab36a462efc9e8cae0df659c6de021b._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/a-f/freewithads/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,847,263,156_kv053498f62d21803ffcbf28da234cfe9f_SX500_FMpng_.png"></img></a>
                </li>
            </ul>

            <li className="font-bold text-xl mb-4">Recomendaciones</li>
            <ul className="flex flex-row mb-10">
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://m.media-amazon.com/images/S/pv-target-images/e951f17dea436fdbcc35db66a5bc29ad852f6392b895308e7b8a2355382d8187.jpg"></img></a>
                </li>
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUvNspnKLS6_oSSZrkUKGeAUloMRwQZeOIg&s"></img></a>
                </li>
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://m.media-amazon.com/images/S/pv-target-images/bdce45dcac2e566aebd4584d6bce60dc1922c4f954126ab8506d86eb35e8c558.jpg"></img></a>
                </li>
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://m.media-amazon.com/images/S/pv-target-images/3b03730ab175354c76edb4195ad03df03791a8b9c963b9c06f30f2136421ebac.jpg"></img></a>
                </li>
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://portalgeek.co/wp-content/uploads/2023/10/Invincible-1024x570.jpg"></img></a>
                </li>
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://www.radiofrance.fr/pikapi/images/cc746d89-c232-4cf6-9dde-9bbfcc12da98/1200x680?webp=false"></img></a>
                </li>
            </ul>

            <li className="font-bold text-xl mb-4">Seguir viendo</li>
            <ul className="flex flex-row mb-10">
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVZ2SgRU_0V6NcRpa_NXeCeYalAb4eRpTjg&s"></img></a>
                </li>
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://m.media-amazon.com/images/S/pv-target-images/b2bc2fc0a3fcf9aab1dd40855aeebb132c9298b58822dc3433cc7d75f77c5c8e._SX1080_FMjpg_.jpg"></img></a>
                </li>
                <li>
                    <a href="#"><img className="rounded-xl mr-6" width="300px" src="https://m.media-amazon.com/images/S/pv-target-images/3dccbe3669f316982a292b100ac7f75acc3361989fc7df2e85742bfc46720605.jpg"></img></a>
                </li>
            </ul>
        </ul>
    </nav>

    </body>
  )
}

export default App