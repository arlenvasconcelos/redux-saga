import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Store = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div>
      <p>Oi</p>
    </div>
  );
};

export default Store;
