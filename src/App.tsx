import { About } from './components/About'
import { BuiltFor } from './components/BuiltFor'
import { Cta } from './components/Cta'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowTo } from './components/HowTo'
import { Nav } from './components/Nav'
import { Payments } from './components/Payments'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Payments />
        <HowTo />
        <About />
        <Features />
        <BuiltFor />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
