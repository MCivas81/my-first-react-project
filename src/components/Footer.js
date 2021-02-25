import "./Footer.css";

function Footer(props) {
  const today = new Date();
  const date = today.getFullYear();
  return <footer>{date} &copy; {props.company}</footer>
}

export default Footer;