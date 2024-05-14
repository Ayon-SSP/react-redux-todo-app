import React, { useState } from 'react'
import styles from '../styles/modules/app.module.scss';
import Button from './Button';

const AppHeader = () => {
  return (
    <div className={styles.appHeader}>
      <Button variant='primary'>
        Show Toast
      </Button>
      <Button variant='secondary'>
        Show Toast
      </Button>
    </div>
  )
}

export default AppHeader