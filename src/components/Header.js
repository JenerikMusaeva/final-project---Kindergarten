import Logo from '../images/Logo.png'

export default function Header() {

  return(
    <div className="header">
      <img className="logo" src={Logo} />
      <div>
        <button className="btn btn-primary">Log In</button>
        </div>
    </div>
    
  )
}