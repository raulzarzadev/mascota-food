
import CONSTANTS from '../../../CONSTANTS'
import Button from '../Button/Button'
import s from './styles.module.css'
import { FaTelegram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Description () {
  const {
    subHeroContent,
    subHeroTitle,
    mobile,
    msgText,
    telegramUser
  } = CONSTANTS

  return (
    <div className={s.description}>
      <div className={s.description_left}>
          <img style={{ width: '100%' }} className={s.icon} src={'/LogoMascotaFoodSigno.gif'} />
        <div className={s.action}>
          <div className={s.contacts}>
            <div className={s.label}>Pregunta</div>
            <Button
              p="1"
              icon="true"
              Component="a"
              href={`https://wa.me/+521${mobile}?text=${msgText}`}
            >
              <IoLogoWhatsapp fontSize="4rem" color="green" />
            </Button>
            <div className={s.contact}>
              <Button
                p="1"
                icon="true"
                Component="a"
                href={`https://telegram.me/${telegramUser}`}
              >
                <FaTelegram fontSize="3rem" color="blue" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={s.description_rigth}>
          <h2 className={s.title}>{subHeroTitle}</h2>
          <pre className={s.content}>{subHeroContent}</pre>
        </div>
      </div>
    </div>
  )
}
