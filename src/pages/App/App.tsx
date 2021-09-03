/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from "react";
import ButtonBuy from "../../components/ButtonBuy";
interface Info {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
[];

interface Img {
  name: string;
}

const App: FC = () => {
  const [data, setData] = useState<Data[]>([]);

  const url = "https://fakestoreapi.com/products";

  const useFetch = async (url: string) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setData(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFetch(url);
  }, []);

  return (
    <>
      <div>
        <h1>FakeApi Store</h1>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((product) => (
          <div
            key={`key${product.id}-${product.title} `}
            style={{
              margin: "40px",
              padding: "10px",
              width: "291px",
              height: "405px",
              background: "white",
              borderRadius: "5px",
            }}
          >
            <img
              style={{ width: "200px", height: "200px" }}
              src={product.image}
              alt={product.title}
            />
            <h4 style={{ width: "400px" }}>{product.title.slice(0, 20)}...</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{product.category}</p>
              <p>
                <b>${product.price}</b>
              </p>
            </div>
            <ButtonBuy title="Buy" size="md" color="primary"  disabledShadow/>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
