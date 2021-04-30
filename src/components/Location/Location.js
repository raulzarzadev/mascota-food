import CONSTANTS from '../../../CONSTANTS'
import Link from '../Link'
import s from './styles.module.css'

export default function Location () {
  const { address, tel, mobile, msgText, telegramUser, googleLocation } = CONSTANTS
  return (
    <div className={s.location}>
      <div className={s.contacts}>
        <div className={s.address}>
          <h5>Puedes encontrarnos en:</h5>
          <p>{address}</p>
        </div>
        <div className={s.tel}>
          <h5>Llamanos a los telefonos : </h5>
          <p>
            Fijo:{' '}
            <Link href={'/'}>
              <strong>{tel}</strong>
            </Link>
          </p>
          <p>
            WhatsApp:{' '}
            <Link href={`https://wa.me/+521${mobile}?text=${msgText}`}>
              <strong>{mobile}</strong>
            </Link>
          </p>
          <p>
            Telegram:
            <Link href={`https://telegram.me/${telegramUser}`}>
              <strong>{telegramUser}</strong>
            </Link>
          </p>
        </div>
      </div>
      <div
        className={s.map}
        style={{ width: '100%', height: 300, backgroundColor: 'gray' }}
      >
        <iframe
          src={googleLocation}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}
