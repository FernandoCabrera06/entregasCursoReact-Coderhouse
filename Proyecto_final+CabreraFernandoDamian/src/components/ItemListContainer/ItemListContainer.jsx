import React, { useEffect, useState } from "react"
import { getProductByCategory, getProducts } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import ClipLoader from "react-spinners/ClipLoader"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts
    setLoading(true)

    asyncFunc(categoryId)
      .then((response) => {
        setLoading(false)
        setProducts(response)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [categoryId])

  return (
    <div>
      {loading ? (
        <ClipLoader className="spinner" size={50} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <ItemList products={products} />
        </>
      )}
    </div>
  )
}

export default ItemListContainer
