import Link from '../Link'
import s from './styles.module.css'
import {
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
  AiOutlineHome,
  AiOutlineContacts
} from 'react-icons/ai'

import Button from '../Button/Button'
import { useEffect, useState } from 'react'

export default function Header () {
  const [hiddeSidebar, setHiddeSidebar] = useState(false)
  const handleSetSidebar = () => {
    setHiddeSidebar(!hiddeSidebar)
  }

  const closeSideBar = (e) => {
    const el = e.target.id
    if (el !== 'side-menu') {
      handleSetSidebar()
    }
  }

  useEffect(() => {
    if (hiddeSidebar) {
      document.addEventListener('click', closeSideBar)
    }
    return () => document.removeEventListener('click', closeSideBar)
  }, [hiddeSidebar])

  return (
    <header className={s.header}>
      <div className={s.side_menu}>
        <Button onClick={handleSetSidebar} id="side-menu-open">
          <AiOutlineMenuUnfold fontSize="49px" />
        </Button>
        <div
          style={{ visibility: hiddeSidebar && 'visible' }}
          className={s.sidebar}
          id="side-menu"
        >
          <div className={s.menu_button}>
            <Button onClick={handleSetSidebar} fullwidth>
              <AiOutlineMenuFold fontSize="49px" />
            </Button>
          </div>
          <nav className={s.nav}>
            <ul className={s.ul}>
              <Link href="/">
                <li className={s.li}>
                  <AiOutlineHome fontSize="40px" />
                  Inicio
                </li>
              </Link>
              <Link href="/">
                <li className={s.li}>
                  <AiOutlineContacts fontSize="40px" />
                  Contaco
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      <div className={s.top_menu}>
        <nav className={s.top_nav}>
          <ul>
            <li>
              <Link href="/">Contacto</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Link href="/">
        <img
          width="180"
          height="100%"
          src={'/LogoMascotaFood.gif'}
          className={s.icon}
        />
      </Link>
    </header>
  )
}
