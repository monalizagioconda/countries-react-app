import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function HomeButton() {
  return (
    <Link to="/" className={`shadow-button ${styles.baseBtn}`}>
      Home
    </Link>
  )
}
