import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard";
import "./Category.css";
const Category = () => {
  const { shopId } = useParams();
  const [categories, setCategories] = useState([]);
  const [load, setLoading] = useState(true);

  useEffect(() => {
    const category = `https://full-stack-challenge-klt3.onrender.com/store${Number(
      shopId
    )}-category`;
    const fetchCategory = async () => {
      try {
        const response = await fetch(category);
        if (!response.ok) {
          throw new Error("Network response not ok.");
        }
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("error while fetching data", error);
        setLoading(true);
      }
    };
    fetchCategory();
  }, [shopId]);
  console.log(categories);
  return (
    <div className="categoriesContainer">
      {load ? (
        <div className="lds-dual-ring"></div>
      ) : (
        categories.map((category) => (
          <CategoryCard shopId={shopId} category={category} />
        ))
      )}
    </div>
  );
};
export default Category;
