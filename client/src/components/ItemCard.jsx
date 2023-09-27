import "./ItemCard.css";

const ItemCard = ({ item, click }) => {
  return (
    <div className={click === true ? "clickCardTrue" : "itemCard"}>
      <img src={item.img} alt="category description" />
      <p>
        {item.name
          .split("")
          .map((el) => el.toUpperCase())
          .join("")}
      </p>
      <p>£{item.price}</p>
    </div>
  );
};
export default ItemCard;
