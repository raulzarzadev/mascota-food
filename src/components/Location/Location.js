import CONSTANTS from '../../../CONSTANTS'
import Link from '../Link'
import s from './styles.module.css'

export default function Location () {
  const {
    address,
    tel,
    mobile,
    msgText,
    telegramUser,
    googleLocation,
    contacts
  } = CONSTANTS

  return (
    <div className={s.location}>
      <div className={s.contacts}>
        <div className={s.address}>
          <div className={s.sub_title}>
            <h6>Encuentranos en:</h6>
          </div>
          <p>{address}</p>
        </div>
        <div className={s.tels}>
          <div className={s.sub_title}>
            <h6>Llamanos a : </h6>
          </div>
          <div className={s.callus}>
            {contacts.map(({ label, href, value, key }) => (
              <Link key={key} href={href}>
                <p className={s.label}>
                  {label}: <strong>{value}</strong>
                </p>
              </Link>
            ))}
          </div>
          {/*  <p>
            <Link href={'/'}>
              Fijo: <strong>{tel}</strong>
            </Link>
          </p>
          <p>
            <Link href={`https://wa.me/+521${mobile}?text=${msgText}`}>
              WhatsApp: <strong>{mobile}</strong>
            </Link>
          </p>
          <p>
            <Link href={`https://telegram.me/${telegramUser}`}>
              Telegram:
              <strong>{telegramUser}</strong>
            </Link>
          </p> */}
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
