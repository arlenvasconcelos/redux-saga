import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadRequest } from "../../store/ducks/store/store";

const Store = () => {
  const dispatch = useDispatch();
  const { store, clients, products } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  console.log(clients, products);

  return (
    <div>
      {store.loading ? (
        <p style={{ color: "red" }}> Carregando</p>
      ) : (
        <p>
          <strong>Store:</strong>
          {store.data.id + " - " + store.data.name}
        </p>
      )}
      {/* {clients.loading ? (
        <p style={{ color: "red" }}> Carregando</p>
      ) : (
        <p>
          <strong>Clients:</strong>
          {clients.data.clients.map((client) => (
            <span>{client.name + " "}</span>
          ))}
        </p>
      )}
      {products.loading ? (
        <p style={{ color: "red" }}> Carregando</p>
      ) : (
        <p>
          <strong>Products:</strong>
          {products.data.products.map((product) => (
            <span>{product.name + " "}</span>
          ))}
        </p>
      )} */}
    </div>
  );
};

export default Store;
