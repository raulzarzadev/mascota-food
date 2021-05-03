import Link from '../Link'
import s from './styles.module.css'
import {
  FaFacebookSquare,
  FaWhatsapp,
  FaTwitterSquare,
  FaInstagram
} from 'react-icons/fa'

export default function Socials () {
  const mobile = '5554941191'
  const msgText = 'Hola Quiero Comprar Croquetas'

  const socials = [
    { color: '#FE15AC', href: '/', icon: <FaInstagram /> },
    { color: '#00ACEE', href: '/', icon: <FaTwitterSquare /> },
    {
      color: '#25D366',
      href: `https://wa.me/+521${mobile}?text=${msgText}`,
      icon: <FaWhatsapp />
    },
    {
      color: '#3B5998',
      href: 'https://www.facebook.com/MascotaFoodVillas',
      icon: <FaFacebookSquare />
    }
  ]
  return (
    <div className={s.socials}>
      <h4>Cotiza en: </h4>
      <div>
        {socials.map((social, i) => (
          <Link key={i} href={social.href}>
            <div className={s.icon} style={{ color: social.color }}>
              {social.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
