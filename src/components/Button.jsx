import { Link } from 'react-router-dom'
import styleButton  from './Button.module.css'

export const Button = ({route, text}) => {
  return (
    <Link
      className={styleButton.btn}
      to={route}
    >
      {text}
    </Link>
  )
}
