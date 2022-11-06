import React from 'react'
import styles from './botaoSubmit.module.css'

export default function ButtomSubmit(props) {
    return (
        <button className={styles.buttom_submit} type="submit">{props.children}</button>
    )
}
