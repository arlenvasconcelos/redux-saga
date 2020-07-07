export function getStore() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Object.assign(
          {},
          {
            id: 1,
            name: "Mercado do Zé",
          }
        )
      );
    }, 3000);
  });
}

export function getProducts(store) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Leite",
          price: "1.89",
        },
        {
          id: 2,
          name: "Arooz",
          price: "3.89",
        },
      ]);
    }, 2500);
  });
}

export function getClients(store) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "João da Silva",
        },
        {
          id: 2,
          name: "José de Souza",
        },
      ]);
    }, 4500);
  });
}
