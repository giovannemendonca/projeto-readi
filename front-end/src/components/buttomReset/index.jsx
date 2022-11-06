import React from 'react'
import styles from './buttomReset.module.css'

export default function ButtomReset(props) {
  return (
    <button className={styles.buttom_reset} type="reset">{props.children}</button>
  )
}
