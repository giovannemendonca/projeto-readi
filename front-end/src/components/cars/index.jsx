import React from 'react'
import { useState } from 'react'
import RegisterCar from '../ registerCar'
import Sucess from '../sucess'

export default function Cars() {

    const [sucess, setSucess] = useState(false)

    return (
        <>
            {!sucess ? <RegisterCar setSucess={setSucess} /> : <Sucess />}

        </>
    )
}
