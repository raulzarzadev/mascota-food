
import s from './styles.module.css'

export default function Product ({ title, subTitle, description, image, price = 0 }) {
  return (
  <div className={s.product}>
      <div style={{ backgroundImage: `url(${image})` }} className={s.image}/>
      <span className={s.description}>
        <h4 className={s.title}>
        {title}
        </h4>
        <h6>
      {subTitle}
        </h6>
        <div className={s.details}>
          {description} </div>
      </span>
      <div className={s.actions}>
        <div>
          {`$${price.toFixed(2)}`}
        </div>
        <div>
          Pedir
        </div>
      </div>

    </div>

  )
}
