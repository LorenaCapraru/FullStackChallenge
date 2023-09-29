import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../../components/ItemCard";
import ButtonItem from "../../components/ButtonItem";

const Items = () => {
  const { shopId } = useParams();
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [load, setLoading] = useState(true);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const item = `https://full-stack-challenge-klt3.onrender.com/store/${Number(
      shopId
    )}/${Number(categoryId)}`;
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
  }, [shopId, categoryId]);
  console.log(items);
  return (
    <div className="itemsContainer">
      {load ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <div className={click === true ? "clickTrue" : "shopPage"}>
          <ButtonItem
            items={items}
            setItems={setItems}
            click={click}
            setClick={setClick}
            shopId={shopId}
            categoryId={categoryId}
          />
          <div className="shopsContainer">
            {items.map((item) => (
              <ItemCard item={item} click={click} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Items;
