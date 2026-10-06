import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from './CartSlice.jsx'

function BagIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 8h16l-1.2 12H5.2L4 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>
}

export default function Header() {
  const count = useSelector(selectCartCount)
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="brand" to="/" aria-label="Paradise Nursery — início">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>paradise<span className="brand-light"> nursery</span><small>plantas para viver melhor</small></span>
        </Link>
        <nav className="main-nav" aria-label="Navegação principal">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/plantas">Plantas</NavLink>
          <NavLink to="/carrinho" className="cart-nav" aria-label={`Carrinho com ${count} ${count === 1 ? 'item' : 'itens'}`}>
            <BagIcon /><span className="cart-nav-text">Carrinho</span><span className="cart-badge">{count}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
