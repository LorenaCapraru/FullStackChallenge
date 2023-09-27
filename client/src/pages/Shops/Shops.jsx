import { useEffect, useState } from "react";
import ShopCard from "../../components/ShopCard";
import "./Shops.css";
import Button from "../../components/Button";

const Shops = () => {
  const [shops, setShops] = useState([]);
  const [load, setLoading] = useState(true);

  const [click, setClick] = useState(false);

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
  return (
    <div>
      {load ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <div className={click === true ? "clickTrue" : "shopPage"}>
          <Button
            shops={shops}
            setShops={setShops}
            click={click}
            setClick={setClick}
          />
          <div className="shopsContainer">
            {shops.map((shop) => (
              <ShopCard click={click} shop={shop} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Shops;
