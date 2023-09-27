import "./Button.css";
import FormItem from "./FormItems";

const ButtonItem = ({
  click,
  setClick,
  items,
  setItems,
  shopId,
  categoryId,
}) => {
  const handleClick = () => {
    click === false ? setClick(true) : setClick(false);
  };
  return (
    <>
      <button onClick={handleClick}>Add an Item</button>
      {click === false ? null : (
        <div>
          <FormItem
            items={items}
            setItems={setItems}
            shopId={shopId}
            categoryId={categoryId}
          />
        </div>
      )}
    </>
  );
};

export default ButtonItem;
