import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectCartItems } from './CartSlice.jsx'
import { categories, formatPrice, products } from './products.js'
import PlantImage from './PlantImage.jsx'

function ProductCard({ product, isAdded }) {
  const dispatch = useDispatch()
  return (
    <article className="product-card">
      <div className="product-media"><PlantImage product={product} />{product.tag && <span className="product-tag">{product.tag}</span>}</div>
      <div className="product-details"><div><h3>{product.name}</h3><p>{product.scientific}</p></div><strong>{formatPrice(product.price)}</strong></div>
      <button className={`add-button ${isAdded ? 'is-added' : ''}`} type="button" disabled={isAdded} onClick={() => dispatch(addItem(product))}>
        <span>{isAdded ? 'Adicionada ao carrinho' : 'Add to Cart'}</span><span aria-hidden="true">{isAdded ? '✓' : '+'}</span>
      </button>
    </article>
  )
}

export default function ProductList() {
  const cartItems = useSelector(selectCartItems)
  const addedIds = new Set(cartItems.map((item) => item.id))
  return (
    <main className="catalog-page shell">
      <div className="page-heading"><div><span className="eyebrow">A COLEÇÃO PARADISE</span><h1>Encontre sua <em>nova companhia.</em></h1><p>Dos clássicos tropicais às espécies mais delicadas: há uma planta perfeita esperando por você.</p></div><div className="heading-decoration" aria-hidden="true">✳</div></div>
      <nav className="category-nav" aria-label="Categorias de plantas"><span>EXPLORE POR CATEGORIA</span>{categories.map((category) => <button key={category.id} type="button" onClick={() => document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' })}>{category.title}</button>)}</nav>
      {categories.map((category, index) => (
        <section className="category-section" id={category.id} key={category.id} aria-labelledby={`${category.id}-title`}>
          <div className="category-heading"><div><span className="category-number">0{index + 1} / 03</span><h2 id={`${category.id}-title`}>{category.title}</h2><p>{category.subtitle}</p></div><span className="category-count">06 PLANTAS</span></div>
          <div className="product-grid">{products.filter((product) => product.category === category.id).map((product) => <ProductCard key={product.id} product={product} isAdded={addedIds.has(product.id)} />)}</div>
        </section>
      ))}
    </main>
  )
}
