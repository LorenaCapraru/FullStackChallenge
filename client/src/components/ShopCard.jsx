import "./ShopCard.css";
import { Link } from "react-router-dom";

const ShopCard = ({ shop, click }) => {
  return (
    <div className={click === true ? "clickCardTrue" : "shopCard"}>
      <Link to={`/shop/${shop.id}`} style={{ textDecoration: "none" }}>
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
