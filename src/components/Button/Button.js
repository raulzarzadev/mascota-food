
import s from './styles.module.css'

export default function Button ({ Component, children, ...rest }) {
  const WrapperComponent = (props) => Component ? <Component {...props}/> : <button {...props}/>
  return (
    <WrapperComponent className={s.button} {...rest}>
      {children}
    </WrapperComponent>
  )
}
