import "./Button.css";
import FormCategory from "./FormCategory";

const ButtonCategory = ({ click, setClick, categories, setCategories }) => {
  const handleClick = () => {
    click === false ? setClick(true) : setClick(false);
  };
  return (
    <>
      <button onClick={handleClick}>Add a Category</button>
      {click === false ? null : (
        <div>
          <FormCategory categories={categories} setCategories={setCategories} />
        </div>
      )}
    </>
  );
};

export default ButtonCategory;
