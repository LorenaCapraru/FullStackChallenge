import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="shopCard">
      <img src={item.item_img} alt="category description" />
      <p>
        {item.item_name
          .split("")
          .map((el) => el.toUpperCase())
          .join("")}
      </p>
      <p>{item.item_price}</p>
    </div>
  );
};
export default ItemCard;
