import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import CPS from './components/sections/CPS'
import Warriors from './components/sections/Warriors'
import FeaturedGame from './components/sections/FeaturedGame'
import Streamers from './components/sections/Streamers'
import ServerSection from './components/sections/Server'
import About from './components/sections/About'
import Staff from './components/sections/Staff'
import Wiki from './components/sections/Wiki'
import Storylines from './components/sections/Storylines'
import Recruitment from './components/sections/Recruitment'
import JoinUs from './components/sections/JoinUs'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <CPS />
        <Streamers />
        <ServerSection />
        <Warriors />
        <FeaturedGame />
        <About />
        <Staff />
        <Wiki />
        <Storylines />
        <Recruitment />
        <JoinUs />
      </main>

      <Footer />
    </div>
  )
}

export default App
