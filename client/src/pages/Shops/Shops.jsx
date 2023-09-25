import { useEffect, useState } from "react";
import ShopCard from "../../components/ShopCard";

import "./Shops.css";
const Shops = () => {
  const [shops, setShops] = useState([]);
  const [load, setLoading] = useState(true);

  useEffect(() => {
    const storeDB = "https://full-stack-challenge-klt3.onrender.com/store";
    const fetchStore = async () => {
      try {
        const response = await fetch(storeDB);
        if (!response.ok) {
          throw new Error("Network response not ok.");
        }
        const data = await response.json();
        setShops(data);
        setLoading(false);
      } catch (error) {
        console.error("error while fetching data", error);
        setLoading(true);
      }
    };
    fetchStore();
  }, []);
  console.log(shops);
  return (
    <div className="shopsContainer">
      {load ? (
        <p>is loading </p>
      ) : (
        shops.map((shop) => <ShopCard shop={shop} />)
      )}
    </div>
  );
};
export default Shops;
