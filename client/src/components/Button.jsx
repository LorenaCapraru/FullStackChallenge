import "./Button.css";
import Form from "./Form";
const Button = ({ click, setClick }) => {
  const handleClick = () => {
    click === false ? setClick(true) : setClick(false);
  };
  return (
    <>
      <button onClick={handleClick}>Add a Store</button>
      {click === false ? null : (
        <div>
          <Form />
        </div>
      )}
    </>
  );
};

export default Button;
