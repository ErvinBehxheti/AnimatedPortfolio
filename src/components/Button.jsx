const Button = ({
  name,
  isBeam = false,
  containerClass,
  href = "#contact",
}) => {
  return (
    <a className={`btn ${containerClass}`} href={href}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </a>
  );
};

export default Button;
