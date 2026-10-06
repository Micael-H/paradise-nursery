import { Link, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'
import AboutUs from './AboutUs.jsx'
import ProductList from './ProductList.jsx'
import CartItem from './CartItem.jsx'

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6"/></svg>
}

function Home() {
  return (
    <>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner shell">
            <div className="hero-content">
              <span className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> BEM-VINDO À PARADISE NURSERY</span>
              <h1 id="hero-title">Sua casa<br />merece <em>florescer.</em></h1>
              <p>Plantas escolhidas com carinho para trazer mais verde, leveza e vida para cada canto do seu lar.</p>
              <Link className="button button-primary hero-button" to="/plantas">Get Started <ArrowIcon /></Link>
              <span className="hero-note">ENCONTRE A SUA PRÓXIMA PLANTA FAVORITA</span>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">01 <span /> 03</div>
        </section>
        <section className="intro-section shell" aria-label="Sobre a Paradise Nursery">
          <div className="intro-label"><span>✳</span> CRESCER FAZ BEM</div>
          <AboutUs />
          <Link className="text-link" to="/plantas">Explorar plantas <ArrowIcon /></Link>
        </section>
        <section className="promise-strip" aria-label="Nossos diferenciais">
          <div className="shell promise-grid"><div><span>01</span><strong>Curadoria especial</strong><p>Plantas escolhidas a dedo.</p></div><div><span>02</span><strong>Mais verde, mais vida</strong><p>Bem-estar em cada folha.</p></div><div><span>03</span><strong>Para todos os cantos</strong><p>Encontre a planta ideal para você.</p></div></div>
        </section>
      </main>
    </>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plantas" element={<ProductList />} />
        <Route path="/carrinho" element={<CartItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer className="site-footer"><div className="shell footer-inner"><span>✳ paradise nursery</span><span>Um lar mais verde começa aqui.</span><span>© {new Date().getFullYear()} Paradise Nursery</span></div></footer>
    </>
  )
}
