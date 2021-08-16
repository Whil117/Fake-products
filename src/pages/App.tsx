/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useState } from "react";

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

const App: FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [info, setInfo] = useState<Info>({} as Info);

  const url = "https://fakestoreapi.com/products";

  const useFetch = async (url: string) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setData(data);
  };
  const handleChange = (event: any) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();

    setData([
      ...data,
      {
        ...info,
        id: data.length + 1,
      },
    ]);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFetch(url);
  }, []);

  console.log(data);
  return (
    <>
      <div>
        <h1>FakeApi</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="title"
            value={info.title}
            type="text"
            placeholder="Title"
          />
          <input type="text" onChange={handleChange} name="price" value={info.price} placeholder="price"/>
          <input
            onChange={handleChange}
            name="description"
            value={info.description}
            type="text"
            placeholder="description"
          />
          <input type="text" onChange={handleChange} name="category" value={info.category} placeholder="category" />
          <button type="submit">Send</button>
        </form>
      </div>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {data.map((product) => (
          <div key={`key ${product.id}c4${product.title} `}  style={{margin:"40px"}}>
            <h4 style={{width:"400px"}}>{product.title}</h4>
            <h6>{product.category}</h6>
            <img
              style={{ width: "200px", height: "200px" }}
              src={product.image}
              alt={product.title}
            />
            <p><b>${product.price}</b></p>
            <p style={{width:"200px"}}>{product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
