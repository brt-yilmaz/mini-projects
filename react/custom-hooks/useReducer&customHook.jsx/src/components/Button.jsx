function Button({ icon = null, label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {icon && <img src={icon} className={"icon"} />} {label}
    </button>
  );
}

export default Button;
