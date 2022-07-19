import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classesHome from "./home.module.scss";
import Item from "./item/Item";
import { selectItems, setItems } from "./homeSlice";
import { setCart } from "../cart/cartSlice";

function Home() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(setItems(res));
      });
  }, [dispatch]);

  return (
    <div>
      <div className={classesHome["items"]}>
        {items.map((item) => (
          <Item key={item.id} item={item} setCart={setCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
