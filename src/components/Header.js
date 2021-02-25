import "./Header.css";

function Header(props) {
  return <header>
    <img src={props.logo} alt="" />
    <span>{props.name}</span>
  </header>
}

export default Header;