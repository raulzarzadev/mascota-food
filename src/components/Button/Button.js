import s from './styles.module.css'

export default function Button ({
  Component,
  fullwidth = 'false',
  children,
  ...rest
}) {
  const WrapperComponent = (props) =>
    Component ? <Component {...props} /> : <button {...props} />

  return (
    <WrapperComponent
      {...rest}
      fullwidth={fullwidth && 'true'}
      className={s.button}
    >
      {children}
    </WrapperComponent>
  )
}
