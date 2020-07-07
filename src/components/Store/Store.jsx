import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadRequest } from "../../store/ducks/stores/stores";

const Store = () => {
  const dispatch = useDispatch();
  const { stores } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  console.log(stores);

  return (
    <div>
      {stores.loading ? (
        <p style={{ color: "red" }}> Carregando</p>
      ) : (
        <p>{stores.data.id}</p>
      )}
    </div>
  );
};

export default Store;
