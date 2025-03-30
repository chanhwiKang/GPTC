import '../styles/layouts.css';

function Footer({ styleClass, children }) {
  return (
    <div className={`footer ${styleClass}`}>
      Copyright 2025. 지피티쳐. All rights reserved.
    </div>
  );
}

export default Footer;
