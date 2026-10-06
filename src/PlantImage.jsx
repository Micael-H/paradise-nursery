const imageUrl = `${import.meta.env.BASE_URL}images/plants-grid.png`

export default function PlantImage({ product, className = '' }) {
  const column = product.imageIndex % 6
  const row = Math.floor(product.imageIndex / 6)
  return (
    <div className={`plant-image ${className}`}>
      <img
        src={imageUrl}
        alt={`Foto de ${product.name}`}
        loading="lazy"
        style={{ left: `-${column * 100}%`, top: `-${row * 100}%` }}
      />
    </div>
  )
}
