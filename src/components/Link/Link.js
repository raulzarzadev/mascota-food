/*
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
} */
/*
import React from 'react'
import NextLink from 'next/link'
import s from './styles.module.css'

export default function Link ({ external, href, children, ...rest }) {
  const WrapperComponent = (props) =>
    external
      ? (
          <a className={s.link} href={href}>{props.children}</a>
        )
      : (
      <a className={s.link}>
        <NextLink href={href}>{props.children}</NextLink>
      </a>
        )
  return (
    <WrapperComponent >
      {children}
    </WrapperComponent>
  )
} */

import s from './styles.module.css'
import NextLink from 'next/link'
export default function Link ({ children, href, ...rest }) {
  return (
    <NextLink href={href}>
      <a className={s.link}>{children}</a>
    </NextLink>
  )
}
