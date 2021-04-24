
import CONSTANTS from '../../../CONSTANTS'
import s from './styles.module.css'

export default function Hero () {
  const { heroTitle } = CONSTANTS
  return (
  <div className={s.hero}>
    <div className={s.bgImage} style={{ backgroundImage: 'url(/perro-amigo.jpg)' }}/>
    <span className={s.title}>
      <h1>
      {heroTitle}
      </h1>
      </span>
  </div>
  )
}
