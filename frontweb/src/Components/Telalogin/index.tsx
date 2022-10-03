import { ReactComponent as Logosistema } from './img/cloud-32.svg'
import './styles.css'
import React from 'react';
import { useForm } from "react-hook-form";
import { type } from '@testing-library/user-event/dist/type';



const Telalogin = () => {
    type FormData ={
        usename:string
        password:string

    }

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit =(formData : FormData)=>{
        console.log(formData)

    }


    return (
        <>
            <div className="container-main-login">
                <div className="main-login">
                    <div className="divi-logo-sistema">
                        <Logosistema className='logo-sistema' />  <h2>Ethan Sistema</h2>
                    </div>
                    <h5>Seja bem-vindo</h5>
                    <form action=""
                    onSubmit={handleSubmit(onSubmit)}>



                        <div className="inf-login">
                            <h6>Usuário:</h6> <input
                                {...register("usename")}
                                type={'text'}
                                className="inp-senha-login"
                                placeholder='login'
                                name='usename' />

                        </div>
                        <div className="inf-login">
                            <h6>Senha:</h6> <input
                                {...register("password")}
                                type={'text'}
                                className="inp-senha-login"
                                placeholder='login'
                                name='password' />
                        </div>
                        <div className='div-link-login'>
                            <a href="" >Esqueci minha senha</a>
                        </div>


                        <div className='div-btn-enter'>
                            <button
                                className='btn-enter-login'

                            >Entrar</button>
                        </div>
                    </form>

                </div>
            </div>




        </>
    )
}
export default Telalogin;