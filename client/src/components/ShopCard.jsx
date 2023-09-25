import "./ShopCard.css";
import { Link } from "react-router-dom";

const ShopCard = ({ shop }) => {
  return (
    <div className="shopCard">
      <Link to={`/shop/${shop.id}`}>
        <img src={shop.logo_url} alt="shop logo" />
        <p>
          {shop.name
            .split("")
            .map((el) => el.toUpperCase())
            .join("")}
        </p>
      </Link>
    </div>
  );
};
export default ShopCard;
