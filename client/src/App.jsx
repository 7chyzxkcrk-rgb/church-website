import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MainCards from './components/MainCards'
import QuickMenu from './components/QuickMenu'
import IntroSection from './components/IntroSection'
import ContentSection from './components/ContentSection'
import ServiceMap from './components/ServiceMap'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MainCards />
      <QuickMenu />
      <IntroSection />
      <ContentSection />
      <ServiceMap />
      <Footer />
    </div>
  )
}

export default App
