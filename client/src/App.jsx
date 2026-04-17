import Header from './components/Header'
import MainCards from './components/MainCards'
import QuickMenu from './components/QuickMenu'
import IntroSection from './components/IntroSection'
import ContentSection from './components/ContentSection'
import ServiceMap from './components/ServiceMap'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white min-h-screen">
      <div style={{maxWidth: '1400px'}} className="mx-auto">
        <Header />
        <MainCards />
        <QuickMenu />
        <IntroSection />
        <ContentSection />
        <ServiceMap />
        <Footer />
      </div>
    </div>
  )
}

export default App
