import "./Button.css";
import Form from "./Form";
const Button = ({ click, setClick, shops, setShops }) => {
  const handleClick = () => {
    click === false ? setClick(true) : setClick(false);
  };
  return (
    <>
      <button onClick={handleClick}>Add a Store</button>
      {click === false ? null : (
        <div>
          <Form shops={shops} setShops={setShops} />
        </div>
      )}
    </>
  );
};

export default Button;
