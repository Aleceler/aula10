import { useBoundStore } from "../../store/useBoundStore.ts";

const Cart = () => {
  const { cart, totalValue } = useBoundStore((state) => state);

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold text-center mb-4">
        Carrinho de Compras
      </h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">O carrinho está vazio.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.productId}
            className="flex items-center justify-between p-2 border-b border-gray-200"
          >
            <div className="flex items-center">
              <img
                src={item.productImage}
                alt={item.productName}
                className="w-16 h-16 object-cover rounded mr-3"
              />
              <div>
                <p className="font-medium">{item.productName}</p>
                <p className="text-gray-600">Quantidade: {item.quantity}</p>
              </div>
            </div>
          </div>
        ))
      )}
      <h2 className="pt-4">
        Preço total: <span>R$ {totalValue.toFixed(2)}</span>
      </h2>
    </div>
  );
};

export default Cart;
