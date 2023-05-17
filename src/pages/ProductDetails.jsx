
import { useState, useEffect } from 'react';
import { products } from '../mocks/products.json'
import { useParams } from "react-router-dom";
import { Rating } from '../components/Rating.jsx';
import { Button } from '../components/Button.jsx'
import { LoadingScreen } from '../components/LoadingScreen.jsx';
import '../components/ProductDetails.css'

export const ProductDetails = () => {
  const { idProduct } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const product = products.find((product) => product.id === parseInt(idProduct))

  useEffect(() => {
    setIsLoading(true)
    const time = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(time);
    }
  }, [])

  const {
    title,
    price,
    thumbnail,
    description,
    rating,
    score,
    brand
  } = product

  if (isLoading) return <LoadingScreen />

  return (
    <div className='product-details'>
      <div className='product-details-img'>
        <img className='product-details-img__img' src={thumbnail} alt={title} />
      </div>
      <h2 className='product-details__title'>
        {title} - ${price.toLocaleString()}
      </h2>
      <p className='product-details__description'>{description}</p>
      <div className='product-details__rating'>
        <Rating value={rating} />
        {score && <span>{score.toLocaleString()} scores</span>}
      </div>
      <p className='product-details__brand'>Brand: {brand}</p>
      <Button
        route='/'
        text='Go back'
      />
    </div>
  )
}
