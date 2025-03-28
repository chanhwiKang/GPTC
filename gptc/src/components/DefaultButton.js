import '../styles/buttons.css';

function DefaultButton({ text, styleClass }) {
  return <button className={`btn-default ${styleClass}`}>{text}</button>;
}

export default DefaultButton;
