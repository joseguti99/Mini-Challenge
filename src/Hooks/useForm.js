import React, { useState } from "react"

const useForm = () => {
    const [form, setForm] = useState({
        nombre: "",
        edad: "",
        carrera: ""
    })

    const handleChangeForm = ({target}) => {
        const {name, value} = target
        setForm({...form, [name]: value});
    }

    const ClearForm = () => {
        setForm({
            nombre: "",
            edad: "",
            carrera: ""
        })
    }
    
    return {form, handleChangeForm, ClearForm}
}

export default useForm
