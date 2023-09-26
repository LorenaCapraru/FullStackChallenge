import "./CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ category, shopId }) => {
  return (
    <div className="shopCard">
      <Link to={`/shop/${shopId}/${category.id}`}>
        <img src={category.img} alt="category description" />
        <p>
          {category.name
            .split("")
            .map((el) => el.toUpperCase())
            .join("")}
        </p>
      </Link>
    </div>
  );
};
export default CategoryCard;
