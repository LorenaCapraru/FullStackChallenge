import "./ItemCard.css";

const ItemCard = ({ item, click }) => {
  return (
    <div className={click === true ? "clickCardTrueI" : "itemCard"}>
      <img src={item.img} alt="category description" />
      <span>£{item.price}</span>

      <p>
        {item.name
          .split("")
          .map((el) => el.toUpperCase())
          .join("")}
      </p>
    </div>
  );
};
export default ItemCard;
