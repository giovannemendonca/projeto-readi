import React from 'react'
import api from '../../api/Api'
import ButtomReset from '../buttomReset'
import ButtomSubmit from '../buttomSubmit'
import { useForm } from 'react-hook-form'
import styles from './cadastroCarro.module.css'



export default function RegisterCar({ setSucess }) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const getData = (e) => {
    postData(e)
  }

  const postData = (date) => {

    api.post('/cars', date)
      .then((response) => setSucess(true))
      .catch((err) => alert(err.response.data.messege))
  }

  return (

    <>

      <div className={styles.container}>
        <h1 className={styles.title}>Cadastrar carro</h1>

        <form className={styles.form} onSubmit={handleSubmit(getData)} >

          <div className={styles.input_group}>

            <div className={styles.input_box}>
              <label htmlFor="marca">Marca</label>
              <input type="text" id='marca' {...register('marca', { required: true })} />

              {errors.marca && <span className={styles.message_erro}>Marca é obrigatório</span>}
            </div>

            <div className={styles.input_box}>
              <label htmlFor="modelo">Modelo</label>
              <input type="text" id='modelo' {...register('modelo', { required: true })} />
              {errors.modelo && <span className={styles.message_erro}>Modelo é obrigatório</span>}
            </div>

            <div className={styles.input_box}>
              <label htmlFor="cor">Cor</label>
              <input type="text" id='cor' {...register('cor', { required: true })} />
              {errors.cor && <span className={styles.message_erro}>Cor é obrigatório</span>}
            </div>

            <div className={styles.input_box}>
              <label htmlFor="anoFabricacao">Ano de fabricação</label>
              <input type="number" id='anoFabricacao' {...register('anoFabricacao', { required: true })} />
              {errors.anoFabricacao && <span className={styles.message_erro}>Ano de fabricação é obrigatório</span>}
            </div>

            <div className={styles.input_box}>
              <label htmlFor="anoModelo">Ano do modelo</label>
              <input type="number" id='anoModelo' {...register('anoModelo', { required: true })} />
              {errors.anoModelo && <span className={styles.message_erro}>Ano do modelo é obrigatório</span>}
            </div>

            <div className={styles.input_box}  >
              <label htmlFor="cambio">Câmbio</label>
              <select name="" id='cambio'{...register('cambio', { required: true })} >
                <option value="Automatico">Automatico</option>
                <option value="Manual">Manual</option>
              </select>
              {errors.cambio && <span className={styles.message_erro}> Câmbio é obrigatório</span>}
            </div>
            <div className={styles.buttom_box}>
              <ButtomSubmit>Cadastrar carro</ButtomSubmit>
              <ButtomReset>Limpar</ButtomReset>
            </div>
          </div>
        </form>
      </div>
    </>

  )
}
