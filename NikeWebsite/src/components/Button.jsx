import { arrowRight } from "../assets/icons";

const Button = ({
  label,
  iconURL,
  textcolor = "text-white",
  className = "",
}) => {
  return (
    <button
      className={`${className}  flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full  border-coral-red  ${textcolor}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5 "
        />
      )}
    </button>
  );
};

export default Button;
