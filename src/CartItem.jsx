import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementItem, incrementItem, removeItem, selectCartCount, selectCartItems, selectCartTotal } from './CartSlice.jsx'
import { formatPrice } from './products.js'
import PlantImage from './PlantImage.jsx'

export default function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const count = useSelector(selectCartCount)
  const total = useSelector(selectCartTotal)
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false)

  return (
    <main className="cart-page shell">
      <div className="page-heading cart-heading"><div><span className="eyebrow">SUAS ESCOLHAS</span><h1>Meu <em>carrinho.</em></h1><p>{count === 0 ? 'Seu próximo cantinho verde começa aqui.' : `${count} ${count === 1 ? 'planta escolhida' : 'plantas escolhidas'} para deixar sua casa mais viva.`}</p></div><div className="heading-decoration" aria-hidden="true">✳</div></div>
      {items.length === 0 ? (
        <div className="empty-cart"><span aria-hidden="true">✳</span><h2>Seu carrinho está vazio.</h2><p>Que tal encontrar uma nova planta para chamar de sua?</p><Link className="button button-primary" to="/plantas">Explorar plantas <span aria-hidden="true">→</span></Link></div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Itens do carrinho"><div className="cart-items-header"><h2>Suas plantas <span>({count})</span></h2><span>VALOR TOTAL</span></div>
            {items.map((item) => <article className="cart-row" key={item.id}>
              <PlantImage product={item} className="cart-thumbnail" />
              <div className="cart-item-info"><h3>{item.name}</h3><p>{item.scientific}</p><span>Preço unitário: {formatPrice(item.price)}</span><button className="remove-button" type="button" onClick={() => dispatch(removeItem(item.id))}>Excluir</button></div>
              <div className="cart-item-controls"><div className="quantity-control" aria-label={`Quantidade de ${item.name}`}><button type="button" aria-label={`Diminuir quantidade de ${item.name}`} onClick={() => dispatch(decrementItem(item.id))}>−</button><span aria-live="polite">{item.quantity}</span><button type="button" aria-label={`Aumentar quantidade de ${item.name}`} onClick={() => dispatch(incrementItem(item.id))}>+</button></div><strong>{formatPrice(item.price * item.quantity)}</strong></div>
            </article>)}
            <Link className="continue-link" to="/plantas">← Continuar comprando</Link>
          </section>
          <aside className="order-summary" aria-labelledby="summary-title"><span className="eyebrow">QUASE LÁ</span><h2 id="summary-title">Resumo do pedido</h2><div className="summary-line"><span>Plantas ({count})</span><span>{formatPrice(total)}</span></div><div className="summary-line total-line"><strong>Total</strong><strong>{formatPrice(total)}</strong></div><p>O frete será calculado quando o checkout estiver disponível.</p><button className="button button-primary checkout-button" type="button" onClick={() => setShowCheckoutMessage(true)}>Finalizar compra <span aria-hidden="true">→</span></button>{showCheckoutMessage && <div className="checkout-message" role="status">Em breve! O checkout estará disponível em uma próxima versão.</div>}<div className="summary-footnote">✳ Obrigado por cultivar mais verde conosco.</div></aside>
        </div>
      )}
    </main>
  )
}
