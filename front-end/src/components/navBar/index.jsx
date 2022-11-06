import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css'

export default function Header() {
    return (
        <div className={styles.reader_box}>
            <Link className={styles.link} to={'/'}>Home</Link>
            <Link className={styles.link} to={'/cars'}>Cadastrar carro</Link>
        </div>

    )
}
