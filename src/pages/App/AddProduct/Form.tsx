import { FC, FormEvent, useState } from "react";
import {
  FormBox,
  IName,
  IDesc,
  IPrice,
  SCategory,
  Submit,
  CImg,
} from "../../../styles/pages/App/AddProduct/FormStyle";

interface Data {
  name: string;
  desc: string;
  price: number;
  category: string;
  img: string | null | undefined;
}

const Form: FC = () => {
  const [data, setData] = useState<Partial<Data>>({});

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleImg = (event: any) => {
    const uploadImg = event.target.files[0];
    const types = ["image/png", "image/jpeg", "image/jpg"];

    if (uploadImg && types.includes(uploadImg.type)) {
      let reader = new FileReader();
      reader.onloadend = (event) => {
        setData({
          ...data,
          img: event?.target?.result,
        });
      };
      reader.readAsDataURL(uploadImg);
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  console.log(data);
  return (
    <main
      style={{
        background: "#E3E3E3",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormBox onSubmit={handleSubmit}>
        <IName
          type="text"
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <IDesc
          placeholder="Description"
          name="desc"
          value={data.desc}
          onChange={handleChange}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <IPrice
              type="number"
              name="price"
              value={data.price}
              onChange={handleChange}
              placeholder="Price"
            />
            <SCategory
              name="category"
              placeholder="Category"
              onChange={handleChange}
            >
              <option value="Clothes">Clothes</option>
              <option value="Food">Food</option>
              <option value="Tecnology">Tecnology</option>
            </SCategory>
          </div>
          <CImg
            htmlFor="img"
            style={{
              background: data.img
                ? `url("${data.img}") no-repeat center/cover`
                : "#e3e3e3",
            }}
          >
            <svg
              width="52"
              height="52"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4ZM16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2Z"
                fill={data.img? "white":"#979797"}
              />
              <path
                d="M24 15H17V8H15V15H8V17H15V24H17V17H24V15Z"
                fill={data.img? "white":"#979797"}
              />
            </svg>
          </CImg>
        </div>
        <input
          type="file"
          name="img"
          id="img"
          style={{ display: "none" }}
          onChange={handleImg}
        />
        <Submit type="submit">Submit</Submit>
      </FormBox>
    </main>
  );
};

export default Form;
