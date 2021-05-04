const msgText = 'Hola Quiero Comprar Croquetas'
const mobile = '5554941191'
const email = 'mail@mascotafood.com'
const tel = '5532105757'

export default {
  heroTitle: 'Lo mejor para tu mejor amigo',
  subHeroTitle: 'MASCOTAFOOD',
  subHeroContent: `
  En Mascota Food encuentras 
  todo lo que necesitas para consentir 
  a tu mascota, las mejores marcas al mejor
  precio, ven a conocernos.
  `,
  tel,
  mobile,
  msgText,
  telegramUser: 'macotafood',
  address: `
    Blvd. Cuautitlan Izalli Mz. 1 Lt. 3, 
    Hacienda de la Luz, 
    Atizapán de Zaragoza, 
    Estado de México CP 52929
  `,
  googleLocation:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469.824367748742!2d-99.2256788!3d19.6018468!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe1d351af17f698f!2sCasa%20Maxcom!5e0!3m2!1ses-419!2smx!4v1619743163160!5m2!1ses-419!2smx',
  contacts: [
    { href: `tel:+521${tel}`, value: tel, label: 'Fijo', key: 'TEL' },
    { href: `tel:+521${mobile}`, value: mobile, label: 'Celular', key: 'CEL' },
    {
      href: `https://wa.me/+521${mobile}?text=${msgText}`,
      value: mobile,
      label: 'WhatsApp',
      key: 'WS'
    },
    {
      href: `mailto:${email}?Subject=From%20mascotafood.com`,
      value: email,
      label: 'Correo',
      key: 'MAIL'
    }
  ]
}
