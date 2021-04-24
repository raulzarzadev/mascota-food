
import Link from '../Link'
import s from './styles.module.css'
import { AiOutlineMenuUnfold, AiOutlineMenuFold, AiOutlineHome, AiOutlineContacts } from 'react-icons/ai'

import Button from '../Button/Button'
import { useState } from 'react'

export default function Header () {
  const [hiddeSidebar, setHiddeSidebar] = useState(false)
  const handleSetSidebar = () => {
    setHiddeSidebar(!hiddeSidebar)
  }
  return (
  <header className={s.header}>
    <div className={s.menu}>
      <Button onClick={handleSetSidebar}>
        <AiOutlineMenuUnfold fontSize='49px'/>
      </Button>
      <div style={{ visibility: hiddeSidebar && 'visible' }} className={s.sidebar}>
        <Button onClick={handleSetSidebar}>
          <AiOutlineMenuFold fontSize='49px'/>
        </Button>
        <nav className={s.nav}>
          <ul className={s.ul}>
              <Link href="/">
                <li className={s.li}>
                  <AiOutlineHome fontSize='40px'/>
                  Inicio
                </li>
              </Link>
              <Link href="/">
                <li className={s.li}>
                  <AiOutlineContacts fontSize='40px'/>
                  Contaco
                </li>
              </Link>
          </ul>
        </nav>
        </div>
    </div>
    <div className={s.icon_cont}>
      <Link href='/'>
         <img src={'/favicon.ico'} className={s.icon}/>
      </Link>
    </div>
  </header>
  )
}
