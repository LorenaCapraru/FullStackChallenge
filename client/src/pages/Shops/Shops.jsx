import { useEffect, useState } from "react";

const Shops = () => {
  const [shops, setShops] = useState("");
  useEffect(() => {
    const storeDB = "https://full-stack-challenge-klt3.onrender.com/store";
    const fetchStore = async () => {
      try {
        const response = await fetch(storeDB);
        if (!response.ok) {
          throw new Error("Network response not ok.");
        }
        const data = response.json();
      } catch (error) {
        console.error("error while fetching data", error);
      }
    };
    fetchStore();
  }, []);

  return <div>Shops</div>;
};
export default Shops;
