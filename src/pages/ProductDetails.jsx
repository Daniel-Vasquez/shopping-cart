
import { useFilters } from '../hooks/useFilters.js'
import { products as initialProducts } from '../mocks/products.json'
import { useParams } from "react-router-dom";
import { Rating } from '../components/Rating.jsx';
import { Button } from '../components/Button.jsx'
import '../components/ProductDetails.css'


export const ProductDetails = () => {
  const { filterProducts } = useFilters()
  const { idProduct } = useParams()

  const filteredProducts = filterProducts(initialProducts)

  const product = filteredProducts.find((product) => product.id === parseInt(idProduct))

  const { title, price, thumbnail, description, rating, brand } = product

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
        <Rating value={ rating } />
      </div>
      <p className='product-details__brand'>Brand: {brand}</p>
      <Button
        route='/'
        text='Volver'
      />
    </div>
  )
}
