import React from 'react'
import styles from './sucess.module.css'
import img from '../../assets/img/checkSucess.png'
import { Link } from 'react-router-dom'

export default function Sucess() {
    return (
        <>
            <section className={styles.sucess_container}>
                <div className={styles.sucess_box}>
                    <div className={styles.box_logo}>
                        <img className={styles.logo} src={img} alt="sucess" />
                    </div>
                    <h3 className={styles.text}>Registro salvo com sucesso</h3>
                    <div >
                        <Link className={styles.link} to={'/'}>Ok</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
