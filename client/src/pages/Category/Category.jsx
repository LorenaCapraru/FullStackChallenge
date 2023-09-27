import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard";
import ButtonCategory from "../../components/ButtonCategory.jsx";
import "./Category.css";

const Category = () => {
  const { shopId } = useParams();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const categoryUrl = `https://full-stack-challenge-klt3.onrender.com/store${Number(
      shopId
    )}-category`;

    const fetchCategory = async () => {
      try {
        const response = await fetch(categoryUrl);
        if (!response.ok) {
          throw new Error("Network response not ok.");
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("error while fetching data", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchCategory();
  }, [shopId]);

  return (
    <div className="categoriesContainer">
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <div className={click === true ? "clickTrue" : "shopPage"}>
          <ButtonCategory
            categories={categories}
            setCategories={setCategories}
            click={click}
            setClick={setClick}
            shopId={shopId}
          />
          <div className="shopsContainer">
            {categories.map((category) => (
              <CategoryCard
                shopId={shopId}
                category={category}
                click={click}
                key={category.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
