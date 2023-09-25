import "./ShopCard.css";

const ShopCard = ({ shop }) => {
  return (
    <div className="shopCard">
      <img src={shop.logo_url} alt="shop logo" />
      <p>{shop.name}</p>
    </div>
  );
};
export default ShopCard;
