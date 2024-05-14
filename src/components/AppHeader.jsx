import React, { useState } from 'react'
import styles from '../styles/modules/app.module.scss';
import Button from './Button';
import SelectButton from './SelectButton';

const AppHeader = () => {
  return (
    <div className={styles.appHeader}>
      <Button variant='primary'>
        Show Toast
      </Button>
      <Button variant='secondary'>
        Show Toast
      </Button>

      <SelectButton
        id="status"
      // onChange={(e) => updateFilter(e)}
      // value={filterStatus}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
    </div>
  )
}

export default AppHeader