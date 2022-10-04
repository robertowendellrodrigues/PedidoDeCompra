import { ReactComponent as Logosistema } from './img/cloud-32.svg'
import './styles.css'
import { useForm } from "react-hook-form";


const Recover =()=>{
  

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
                    <h5>Recuperar senha</h5>
                    <form action="" className='form-login'
                        onSubmit={handleSubmit(onSubmit)}>
                        <div className="inf-login">
                            <h6>Digite o e-mail cadastrdo:</h6> <input
                                {...register("usename")}
                                type={'number'}
                                className="inp-senha-login"
                                
                                name='usename' />
                        </div>
                        <h6>OU</h6>
                        <div className="inf-login">
                            <h6>Número de telefone cadastrdo:</h6> <input
                                {...register("password")}
                                type={'text'}
                                className="inp-senha-login"
                                
                                name='password' />
                        </div>
                        <div className='div-link-login'>
                            <a href="./login" >Fazer login</a>
                        </div>
                        <div className='div-link-login'>
                            <a href="./signup" >Faça seu cadastro clicando AQUI!</a>
                        </div>
                        <div className='div-btn-enter'>
                            <button
                                className='btn-enter-login'
                            >Recuperar</button>
                        </div>
                    </form>

                </div>
            </div>
       
        </>
    )
}
export default Recover