
import Product from '../Product/Product'
import s from './styles.module.css'

export default function Products () {
  return (
  <div className={s.products}>
    <h2>Algunos de nuestros Productos</h2>
    <div className={s.grid}>
      <div className={s.item}>
        <Product title='Pedigree' subTitle='Sobre 150g' image='/comida.jpeg' price={20} />
      </div>
      <div className={s.item}>
        <Product title='Pedigree' subTitle='Sobre 150g' image='/comida.jpeg' price={20} />
      </div>
      <div className={s.item}>
        <Product title='Pedigree' subTitle='Sobre 150g' image='/comida.jpeg' price={20} />
      </div>
      <div className={s.item}>
        <Product title='Pedigree' subTitle='Sobre 150g' image='/comida.jpeg' price={20} />
      </div>
      <div className={s.item}>
        <Product title='Pedigree' subTitle='Sobre 150g' image='/comida.jpeg' price={20} />
      </div>
      <div className={s.item}>
        <Product title='Pedigree' subTitle='Sobre 150g' image='/comida.jpeg' price={20} />
      </div>
      <div className={s.item}>
        <Product title='Pedigree' subTitle='Sobre 150g' image='/comida.jpeg' price={20} />
      </div>
    </div>
  </div>
  )
}
