import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../../components/ItemCard";
import "./Items.css";

const Items = () => {
  const { shopId } = useParams();
  const [items, setItems] = useState([]);
  const [load, setLoading] = useState(true);

  useEffect(() => {
    const item = `https://full-stack-challenge-klt3.onrender.com/store${Number(
      shopId
    )}-items`;
    const fetchItems = async () => {
      try {
        const response = await fetch(item);
        if (!response.ok) {
          throw new Error("Network response not ok.");
        }
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error("error while fetching data", error);
        setLoading(true);
      }
    };
    fetchItems();
  }, [shopId]);
  console.log(items);
  return (
    <div className="itemsContainer">
      {load ? (
        <p>is loading </p>
      ) : (
        items.map((item) => <ItemCard item={item} />)
      )}
    </div>
  );
};
export default Items;
