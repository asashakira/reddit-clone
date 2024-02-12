import React from 'react'

import styles from './SiteHeader.css'

export const SiteHeader = () => {
  return (
    <header>
      <div className={styles.logo}>
        <h1>reddit?</h1>
      </div>
      <div className={styles.login}>
        <div>Log In</div>
      </div>
    </header>
  )
}
