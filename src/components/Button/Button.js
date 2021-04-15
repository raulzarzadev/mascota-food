
import s from './styles.module.css'

export default function Button ({ children, ...rest }) {
  return (
  <button className={s.button} {...rest}>
    {children}
  </button>
  )
}
