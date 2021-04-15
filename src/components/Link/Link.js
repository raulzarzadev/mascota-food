
import s from './styles.module.css'
import ReactLink from 'next/link'
import React from 'react'

export default function Link ({ href, children, external = false }) {
  if (external) {
    return <a href={href} className={s.link}>
      {children}
 </a>
  }
  return <ReactLink href={href}>
    <a className={s.link}>
      {children}
    </a>
  </ReactLink>
}
