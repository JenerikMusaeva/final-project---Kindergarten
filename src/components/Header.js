import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'

export default function Header() {

  return(
    <div className="header">
      <Link to='/'><img className="logo" src={Logo} /></Link>
      <div>
      <Link to='/admin/:path'><button className="btn btn-login">Admin</button></Link>
        </div>
    </div>
    
  )
}