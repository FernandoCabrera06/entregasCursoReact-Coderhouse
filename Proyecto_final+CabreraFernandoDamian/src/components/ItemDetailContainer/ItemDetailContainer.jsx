import React, { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [itemId])

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <ClipLoader className="spinner" size={50} />
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  )
}

export default ItemDetailContainer
