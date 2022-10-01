import { Link } from "react-router-dom"
import { ReactComponent as Icon_logout } from './img/person-login.svg'
import Navicon from "../Navicon"

const Iconlog = () => {

    return (

        <>

            <Link className='icon' to={'/'}><Icon_logout /></Link>


        </>
    )
}
export default Iconlog