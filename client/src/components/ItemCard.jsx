import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="itemCard">
      <img src={item.img} alt="category description" />
      {/* <p>
        {item.name
          .split("")
          .map((el) => el.toUpperCase())
          .join("")}
      </p> */}
      <span>£{item.price}</span>
    </div>
  );
};
export default ItemCard;
