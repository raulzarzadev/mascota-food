
import s from './styles.module.css'

export default function Location () {
  return (
  <div className={s.location}>
    <div className={s.contacts}>
      <div className={s.adress} >
          Puedes encontrarnos en:
        <h5>
            Paseo de las villas # 16
        </h5>
      </div>
      <div className={s.tel}>
           Llamanos al
        <h5>
          55 5555 63234
        </h5>
      </div>
      <div className={s.ws}>
           Envianos un WhatsApp
        <h5>
          55 5555 63234
        </h5>
      </div>
    </div>
    <div className={s.map} style={{ width: 300, height: 200, backgroundColor: 'gray' }}>
    </div>
  </div>
  )
}
