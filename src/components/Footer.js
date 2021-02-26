import { PropTypes } from "prop-types";

import './Footer.css'

function Footer({ company }) {
  return (
    <footer className="Footer">
      {new Date().getFullYear()} © {company}
    </footer>
  );
}

Footer.propTypes = {
  company: PropTypes.string.isRequired,
};

export default Footer;