import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, description, img, category, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h6 className="ItemHeader">{description}</h6>
      </header>
      <picture>
        <img src={img} alt={description} className="ItemImg" />
      </picture>
      <section>
        <p className="Info"> Categoria: {category}</p>
        <p className="Info"> Precio: ${price}</p>
        <p className="Info"> Stock disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}
        />
      </footer>
    </article>
  )
}
export default ItemDetail
