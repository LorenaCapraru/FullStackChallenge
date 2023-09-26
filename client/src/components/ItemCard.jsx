import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="itemCard">
      <img src={item.item_img} alt="category description" />
      <p>
        {item.item_name
          .split("")
          .map((el) => el.toUpperCase())
          .join("")}
      </p>
      <span>£{item.item_price}</span>
    </div>
  );
};
export default ItemCard;
