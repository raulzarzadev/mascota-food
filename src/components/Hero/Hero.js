
import s from './styles.module.css'

export default function Hero () {
  return (
  <div className={s.hero}>
    <div className={s.bgImage} style={{ backgroundImage: 'url(/perro.jpeg)' }}/>
    <span className={s.title}>
      <h1>
        MascotaFood
      </h1>
      </span>
  </div>
  )
}
