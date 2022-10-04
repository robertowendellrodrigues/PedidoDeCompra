import { ReactComponent as Logosistema } from './img/cloud-32.svg'
import './styles.css'
import { useForm } from "react-hook-form";



const Login = () => {


    type FormData = {
        usename: string
        password: string
    }

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
        if (formData.usename == "02055523406" && formData.password == "admin") {


        }

    }

    return (
        <>
            <div className="container-main-login">

                <div className="main-login">
                    <div className="divi-logo-sistema">
                        <Logosistema className='logo-sistema' />  <h2>Ethan Sistema</h2>
                    </div>
                    <div>
                        <h5>Seja bem-vindo</h5>
                    </div>

                    <form action="" className='form-login'

                        onSubmit={handleSubmit(onSubmit)}>

                        
                        <div className="inf-login">
                            <h6>Usuário:</h6> <input
                                {...register("usename")}
                                type={'number'}
                                className="inp-senha-login"

                                name='usename' />
                        </div>
                        <div className="inf-login">
                            <h6>Senha:</h6> <input
                                {...register("password")}
                                type={'password'}
                                className="inp-senha-login"

                                name='password' />
                        </div>

                        <div className='checkbox'>
                            <input type="checkbox" id='input-checkbox' />
                            <h6>Não sou robô</h6>
                        </div>

                        <div className='div-link-login'>
                            <a href="./recover" >Esqueci minha senha</a>

                        </div>
                        <div className='div-link-login'>

                            <a href="./signup" >Faça seu cadastro aqui!</a>
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
export default Login