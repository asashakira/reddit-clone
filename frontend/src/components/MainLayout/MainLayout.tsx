import React from 'react'

import {SiteHeader} from '@src/components/SiteHeader'

import styles from './MainLayout.css'

type MainLayoutProps = {
  className?: string
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({children, className}) => {
  return (
    <div className={styles.root}>
      <SiteHeader />
      <div className={className}>{children}</div>
    </div>
  )
}
