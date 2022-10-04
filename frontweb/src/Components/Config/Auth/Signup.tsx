
import { ReactComponent as Logosistema } from './img/cloud-32.svg'
import './styles.css'
import { useForm } from "react-hook-form";


const Signup =()=>{
  

type FormData = {
        usename: string
        password: string
    }

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
        if ( formData.usename =="02055523406" && formData.password == "admin"){

            
        }
        
    }

    return (
        <>
            <div className="container-main-login">
                <div className="main-login">
                    <div className="divi-logo-sistema">
                        <Logosistema className='logo-sistema' />  <h2>Ethan Sistema</h2>
                    </div>
                    <h5>Cadastro Usuário</h5>
                    <form action=""
                        onSubmit={handleSubmit(onSubmit)}>
                        <div className="inf-login">
                            <h6>Digite seu CPF*</h6> <input
                                {...register("usename")}
                                type={'number'}
                                className="inp-senha-login"
                                
                                name='usename' />
                        </div>
                        <div className="inf-login">
                            <h6>Nome completo*:</h6> <input
                                {...register("password")}
                                type={'text'}
                                className="inp-senha-login"
                                
                                name='password' />
                        </div>
                        <div className="inf-login">
                            <h6>E-mail*:</h6> <input
                                {...register("password")}
                                type={'email'}
                                className="inp-senha-login"
                                
                                name='password' />
                        </div>
                        <div className="inf-login">
                            <h6>Telefone de contato*</h6> <input
                                {...register("password")}
                                type={'tel'}
                                className="inp-senha-login"
                                
                                name='password' />
                        </div>
                        <div className="inf-login">
                            <h6>Senha*</h6> <input
                                {...register("password")}
                                type={'password'}
                                className="inp-senha-login"
                                
                                name='password' />
                        </div>
                        <div className="inf-login">
                            <h6>Confirme sua Senha*</h6> <input
                                {...register("password")}
                                type={'password'}
                                className="inp-senha-login"
                                
                                name='password' />
                        </div>
                        <div className='div-link-login'>
                            <a href="./login" >Faça seu login</a>
                        </div>
                        <div className='div-link-login'>
                            <a href="./recover" >Esqueci minha senha</a>
                        </div>
                        <div className='div-btn-enter'>
                            <button
                                className='btn-enter-login'
                            >Cadastrar</button>
                        </div>
                    </form>

                </div>
            </div>
       
        </>
    )
}
export default Signup