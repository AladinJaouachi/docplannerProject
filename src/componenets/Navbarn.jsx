import logo from"./photos/logo-default-group-en.svg";

function Navbarn() {
    return(
        <>
        <nav>
        <img src={logo} alt="logo"/>
        <ul>
            <li><a href="">about us</a></li>
            <li><a href="">career</a></li>
            <li><a href="">departments</a></li>
        </ul>

        </nav>
    </>
    )
    
}
export default Navbarn;