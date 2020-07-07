import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadRequest } from "../../store/ducks/store/store";

const Store = () => {
  const dispatch = useDispatch();
  const { store, clients, products } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

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
      {clients.loading ? (
        <p style={{ color: "red" }}> Carregando</p>
      ) : (
        <p>
          <strong>Clients:</strong>
          {clients.data.map((client) => (
            <span key={client.name}>{client.name + " "}</span>
          ))}
        </p>
      )}
      {products.loading ? (
        <p style={{ color: "red" }}> Carregando</p>
      ) : (
        <p>
          <strong>Products:</strong>
          {products.data.map((product) => (
            <span key={product.name}>{product.name + ", "}</span>
          ))}
        </p>
      )}
    </div>
  );
};

export default Store;
